import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/logo/logo.png'
import Proloader from "../mainjs/Proloader";
import {axiosInstance} from "../../axiosAPI";

export default function Header(props) {
    const handleLogout = () => {
        axiosInstance.post('/api/blacklist/', {
            'refresh_token': localStorage.getItem('refresh_token')
        }).then(response => {
            localStorage.removeItem('access_token')
            localStorage.removeItem('refresh_token')
            axiosInstance.defaults.headers['Authorization'] = null
            props.onLogOut()
            window.location.href = '/'
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <div>
            <Proloader />
                            {/*// <!-- Header Start -->*/}
            <header>
                <div className="header-area header-transparent"
                     style={{
                         backgroundColor: props.background_color
                     }}
                >
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    {/*// <!-- Logo -->*/}
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <Link to={'/'}>
                                                {/*<img src={logo} alt="" />*/}
                                                <p
                                                    style={{
                                                        fontSize: '20px',
                                                        color: 'white',
                                                        fontWeight: 'bold'
                                                    }}
                                                >
                                                    P&N ENGAGE
                                                </p>
                                            </Link>
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
                                                        <li><a href="#">Contact</a></li>
                                                        {/*// <!-- Button -->*/}
                                                        {
                                                            props.isLogged === false &&

                                                            <li className="button-header margin-left">
                                                                <Link
                                                                    to={'/register'} className="btn">Sign Up
                                                                </Link>
                                                            </li> }
                                                        {
                                                            props.isLogged === false &&

                                                            <li className="button-header">
                                                                <Link to={'/login'} className="btn3">
                                                                    Sign In
                                                                </Link>
                                                            </li>
                                                        }
                                                        {
                                                            props.isLogged &&

                                                            <li className="button-header margin-left">
                                                                <Link to={'/dashboard'}  className="btn">
                                                                    Dashboard
                                                                </Link>
                                                            </li>
                                                        }

                                                        {
                                                            props.isLogged &&

                                                            <li className="button-header">
                                                                <a onClick={handleLogout}>Log out</a>
                                                            </li>
                                                        }

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
