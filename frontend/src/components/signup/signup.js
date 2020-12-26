import React, { useEffect } from 'react'

import loder from '../../assets/img/logo/loder.png'
import bg_vid from '../../assets/img/login-bg.mp4'
import {Link} from "react-router-dom";
import Proloader from "../mainjs/Proloader";

export default function Signup() {
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
                <form className="form-default" action={bg_vid} method="POST">

                    <div className="login-form">
                        {/*// <!-- logo-login -->*/}
                        <div className="logo-login">
                            <Link to={'/'}><img src={loder} alt="" /></Link>
                        </div>
                        <h2>Registration Here</h2>

                        <div className="form-input">
                            <label htmlFor="name">Full name</label>
                            <input  type="text" name="name" placeholder="Full name" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Email Address</label>
                            <input type="email" name="email" placeholder="Email Address" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                        <div className="form-input">
                            <label htmlFor="name">Confirm Password</label>
                            <input type="password" name="password" placeholder="Confirm Password" />
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