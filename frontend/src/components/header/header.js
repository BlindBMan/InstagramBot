import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo/logo.png'
import Proloader from "../mainjs/Proloader";

export default function Header() {

    return (
        <div>
            <Proloader />
                            {/*// <!-- Header Start -->*/}
            <header>
                <div className="header-area header-transparent">
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    {/*// <!-- Logo -->*/}
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <Link to={'/'}><img src={logo} alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                            {/*// <!-- Main-menu -->*/}
                                            <div className="main-menu d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li><Link to={'/'}>Home</Link></li>
                                                        {/*<li><a href="#">Blog</a>*/}
                                                        {/*    <ul className="submenu">*/}
                                                        {/*        <li><a href="blog.html">Blog</a></li>*/}
                                                        {/*        <li><a href="blog_details.html">Blog Details</a></li>*/}
                                                        {/*        <li><a href="elements.html">Element</a></li>*/}
                                                        {/*    </ul>*/}
                                                        {/*</li>*/}
                                                        <li><a href="contact.html">Contact</a></li>
                                                        {/*// <!-- Button -->*/}
                                                        <li className="button-header margin-left ">
                                                            <Link
                                                                to={'/register'} className="btn">Sign Up
                                                            </Link>
                                                        </li>
                                                        <li className="button-header">
                                                            <Link to={'/login'} className="btn3">Sign In</Link>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    {/*// <!-- Mobile Menu -->*/}
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Header End -->*/}
            </header>
        </div>
    )
}
