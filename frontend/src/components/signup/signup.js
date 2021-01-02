import React, {useState} from 'react'
import {axiosInstance} from '../../axiosAPI'
import CsrfToken from "../csrfToken/csrfToken";

import loder from '../../assets/img/logo/loder.png'
import bg_vid from '../../assets/img/login-bg.mp4'
import {Link} from "react-router-dom";
import Proloader from "../mainjs/Proloader";

export default function Signup() {
    const [state, setState] = useState({
        username: "",
        email: "",
        password: "",
        confPassword: "",
        passMatch: true,
        errors: {}
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
        state.errors = {}

        if (state.password === state.confPassword) {
            axiosInstance.post('/api/user/create/', {
                username: state.username,
                email: state.email,
                password: state.password
            }).then(() => {
                window.location.href = '/login/'
            }).catch(error => {
                setState(prevState => ({
                    ...prevState,
                    errors: error.response.data
                }))
            })
        } else {
            setState(prevState => ({
                ...prevState,
                passMatch: false
            }))
        }
    }

    return (
        <div>

            <Proloader />

            {/*// <!-- Register -->*/}

            <main className="login-body" data-vide-bg={bg_vid}>
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

                {/*// <!-- Login Admin -->*/}
                <form className="form-default" onSubmit={handleSubmit}>
                    <CsrfToken />

                    <div className="login-form">
                        {/*// <!-- logo-login -->*/}
                        <div className="logo-login">
                            <Link to={'/'}><img src={loder} alt="" /></Link>
                        </div>
                        <h2>Registration Here</h2>

                        <div className="form-input">
                            <label htmlFor="username">Username</label>
                            <input
                                id="username"
                                type="text"
                                name="usernamename"
                                placeholder="Username"
                                value={state.username}
                                onChange={handleChange}
                            />
                            {state.errors.username ? state.errors.username : null}
                        </div>
                        <div className="form-input">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={state.email}
                                onChange={handleChange}
                            />
                            {state.errors.email ? state.errors.email : null}

                        </div>
                        <div className="form-input">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={state.password}
                                onChange={handleChange}
                            />
                            {state.errors.password ? state.errors.password : null}
                        </div>
                        <div className="form-input">
                            <label htmlFor="confPassword">Confirm Password</label>
                            <input
                                id="confPassword"
                                type="password"
                                name="password"
                                placeholder="Confirm Password"
                                value={state.confPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-input pt-30">
                            <input type="submit" name="submit" value="Registration" />
                        </div>
                        {/*// <!-- Forget Password -->*/}
                        <Link to={'/login'} className="registration">login</Link>
                    </div>
                </form>
                {/*// <!-- /end login form -->*/}
            </main>
        </div>
    )
}