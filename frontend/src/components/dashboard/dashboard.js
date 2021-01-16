import React, {useState, useEffect} from 'react'
import Header from "../header/header";
import DashBody from "./dashbody";
import Subscription from "./subscription";
import {axiosInstance} from "../../axiosAPI";
import jwt_decode from "jwt-decode";
import StripePayment from "./stripePayment";


export default function Dashboard(props) {
    const [expiryDate, setExpiryDate] = useState("")
    const [hasSubscribed, setHasSubscribed] = useState(false)

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
            axiosInstance.post('/api/obtain_expiry_date/',
                {
                    username: decoded_token['username']
                })
                .then(response => {
                    setExpiryDate(response.data['exp_date'])

                    let ex_date = new Date(response.data['exp_date'])
                    let curr_date = new Date()

                    setHasSubscribed(ex_date.getTime() > curr_date.getTime())
                })
                .catch(err => {
                    console.error(err)
                })

        }
    }, [])

    return (
        <div style={{
            background: "#f1f4f7",
            height: "100%",
            paddingTop: "6vh"
        }}>
            <Header isLogged={props.isLoggedIn} onLogOut={onChangeLog} background_color={"#000"}/>
            {hasSubscribed ?
                <DashBody
                    expiryDate={expiryDate}
                /> :
                // <Subscription
                //     expiryDate={expiryDate}
                //     onExpiryChange={changeExpiryDate}
                // />
                <div
                    style={{
                        marginTop: '40px'
                    }}
                >
                    <h2>You don't currently have a subscription. Please proceed to checkout!(or just wait 2-3sec)</h2>
                    <StripePayment />
                </div>
            }

        </div>
    )
}