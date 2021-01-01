import React from 'react'
import Header from "../header/header";
import Intro from "../intro/intro";
import Pricings from "../pricings/pricings";
import Footer from "../footer/footer";

export default function Home(props) {
    function onChangeLog() {
        props.onLoginChange()
    }

    return (
        <div>
            <Header isLogged={props.isLoggedIn} onLogOut={onChangeLog}/>
            <Intro />
            <Pricings />
            <Footer />
        </div>
    )
}
