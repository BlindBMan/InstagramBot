import React from 'react'
import Header from "../header/header";
import Intro from "../intro/intro";
import Pricings from "../pricings/pricings";
import Footer from "../footer/footer";

export default function Home() {
    return (
        <div>
            <Header />
            <Intro />
            <Pricings />
            <Footer />
        </div>
    )
}
