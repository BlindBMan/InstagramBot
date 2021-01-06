import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {axiosInstance} from "../../axiosAPI";
import CsrfToken from "../csrfToken/csrfToken";

import bg_vid from '../../assets/img/login-bg.mp4';
import loder from '../../assets/img/logo/loder.png';
import Proloader from "../mainjs/Proloader";


export default function Login(props) {
    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const {id , value} = e.target
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // axiosInstance.defaults.xsrfHeaderName = 'X-CSRFToken'
        axiosInstance.post('/api/token/obtain/', {
            username: state.username,
            password: state.password
        }).then(response => {
            axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access
            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)
            props.onLoginChange()
            window.location.href = '/'
        }).catch(error => {
            alert('username or password wrong')
            throw error
        })

    }

    return (
        <div>
            <Proloader />
            <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
                <div style={{
                    position: 'absolute',
                    zIndex: '-1',
                    inset: '0px',
                    overflow: 'hidden',
                    backgroundSize: 'cover',
                    backgroundColor: 'transparent',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 50%',
                    backgroundImage: 'none'
                }}>
                    <video
                        style={{
                            margin: 'auto',
                            position: 'absolute',
                            zIndex: '-1',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            visibility: 'visible',
                            opacity: '1',
                            width: 'auto',
                            height: '977px'
                        }}
                        autoPlay
                        muted
                        loop>
                        <source src={bg_vid} type={'video/mp4'} />
                    </video>
                </div>
                {/*/!*<!-- Login Admin -->*!/*/}
                <form className="form-default" onSubmit={handleSubmit}>
                    <CsrfToken />

                    <div className="login-form">
                        {/*// <!-- logo-login -->*/}
                        <div className="logo-login">
                            <Link to={'/'}><img src={loder} alt="" /></Link>
                        </div>
                        <h2>Login Here</h2>
                        <div className="form-input">
                            <label htmlFor="name">Username</label>
                            <input
                                id="username"
                                type="username"
                                name="username"
                                placeholder="Username"
                                value={state.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="login" />
                        </div>

                        <Link to={'/register'} className="registration">Registration</Link>
                    </div>
                </form>
                {/*// <!-- /end login form -->*/}
            </main>
        </div>
    )
}
