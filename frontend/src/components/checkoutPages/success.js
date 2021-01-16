import React, {useEffect} from "react";
import Header from "../header/header";
import {axiosInstance} from "../../axiosAPI";
import jwt_decode from "jwt-decode";
import {Link} from "react-router-dom";

export default function Success(props) {
    useEffect(() => {
        let curr_date = new Date().toISOString().split('T')[0]
        axiosInstance.post('/api/user/update/',{
            username: jwt_decode(localStorage.getItem('access_token'))['username'],
            new_date: curr_date
        }).then(() => {
            console.log('user updated')
        }).catch(err => {
            console.error(err)
        })
    })

    return (
        <div style={{
            background: "#f1f4f7",
            height: "100%",
            paddingTop: "6vh"
        }}>
            <Header isLogged={props.isLoggedIn} onLogOut={props.onLoginChange} background_color={"#000"}/>

            <div
                style={{
                    padding: '20px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    marginBottom: '15px'
            }}>
                Your account has been successfully charged! Please re-login!
            </div>
            <div>
                <Link className={'btn'} to={'/login/'}>Log in</Link>
            </div>

        </div>
    )
}