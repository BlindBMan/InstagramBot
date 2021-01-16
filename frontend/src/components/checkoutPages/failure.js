import React from "react";
import Header from "../header/header";

export default function Failure(props) {
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
                Ups, something went wrong.. Contact the staff!
            </div>

        </div>
    )
}