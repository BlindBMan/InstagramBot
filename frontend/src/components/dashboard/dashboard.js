import React, {useState, useEffect} from 'react'
import Header from "../header/header";
import DashBody from "./dashbody";
import Subscription from "./subscription";
import {axiosInstance} from "../../axiosAPI";
import jwt_decode from "jwt-decode";


export default function Dashboard(props) {
    const [expiryDate, setExpiryDate] = useState("")

    function changeExpiryDate() {
        let curr_date = new Date().toISOString().split('T')[0]
        setExpiryDate(curr_date)
        axiosInstance.post('/api/user/update/',{
            username: jwt_decode(localStorage.getItem('access_token'))['username'],
            new_date: curr_date
        }).then(() => {
            console.log('user updated')
        }).catch(err => {
            console.error(err)
        })
    }

    function onChangeLog() {
        props.onLoginChange()
    }

    function checkExpDate() {
        let ex_date = new Date(expiryDate)
        let curr_date = new Date()

        return ex_date.getTime() > curr_date.getTime()
    }

    useEffect(() => {
        let value = localStorage.getItem('access_token') !== null
        if (value === true) {
            let decoded_token = jwt_decode(localStorage.getItem('access_token'))
            setExpiryDate(decoded_token['expiry_date'])
        }
    }, [])

    return (
        <div style={{
            background: "#f1f4f7",
            height: "100%",
            paddingTop: "6vh"
        }}>
            <Header isLogged={props.isLoggedIn} onLogOut={onChangeLog} background_color={"#000"}/>
            {checkExpDate() ?
                <DashBody
                    expiryDate={expiryDate}
                /> :
                <Subscription
                    expiryDate={expiryDate}
                    onExpiryChange={changeExpiryDate}
                />
            }

        </div>
    )
}