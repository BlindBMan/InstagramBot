import React from 'react'
import Header from "../header/header";
import DashBody from "./dashbody";


export default function Dashboard(props) {
    function onChangeLog() {
        props.onLoginChange()
    }

    return (
        <div style={{
            background: "#f1f4f7",
            height: "100%",
            paddingTop: "6vh"
        }}>
            <Header isLogged={props.isLoggedIn} onLogOut={onChangeLog} background_color={"#000"}/>
            <DashBody />
        </div>
    )
}