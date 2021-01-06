import React from 'react'

import price1 from '../../assets/img/icon/price1.svg'
import price2 from '../../assets/img/icon/price2.svg'
import price3 from '../../assets/img/icon/price3.svg'

export default function Pricings() {
    return (
        <div>
            {/*// <!--? Pricing Card Start -->*/}
            <section className="pricing-card-area fix">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-8">
                            <div className="section-tittle text-center mb-90">
                                <h2>Choose plan which fit for you</h2>
                                <p>Need an automated system for liking and commenting Instagram post? Our web-integrated sysytem can do all that for you in one simple click. Sit back and let the code do the crunching!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                            <div className="single-card text-center mb-30">
                                <div className="card-top">
                                    <img src={price1} alt="" />
                                        <h4>Instagram Bot</h4>
                                        <p>Starting at</p>
                                </div>
                                <div className="card-mid">
                                    <h4>$14.99 <span>/ month</span></h4>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li>Unlimited comments</li>
                                        <li>Likes guaranteed</li>
                                        <li>full backup systems</li>
                                        <li>free support</li>
                                        <li>unlimited database</li>
                                    </ul>
                                    <a href="#" className="borders-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                            <div className="single-card text-center mb-30">
                                <div className="card-top">
                                    <img src={price2} alt="" />
                                    <h4>Instagram Bot</h4>
                                    <p>Starting at</p>
                                </div>
                                <div className="card-mid">
                                    <h4>$14.99 <span>/ month</span></h4>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li>Unlimited comments</li>
                                        <li>Likes guaranteed</li>
                                        <li>full backup systems</li>
                                        <li>free support</li>
                                        <li>unlimited database</li>
                                    </ul>
                                    <a href="#" className="borders-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                            <div className="single-card text-center mb-30">
                                <div className="card-top">
                                    <img src={price3} alt="" />
                                    <h4>Instagram Bot</h4>
                                    <p>Starting at</p>
                                </div>
                                <div className="card-mid">
                                    <h4>$14.99 <span>/ month</span></h4>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li>Unlimited comments</li>
                                        <li>Likes guaranteed</li>
                                        <li>full backup systems</li>
                                        <li>free support</li>
                                        <li>unlimited database</li>
                                    </ul>
                                    <a href="#" className="borders-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">*/}
                        {/*    <div className="single-card text-center mb-30">*/}
                        {/*        <div className="card-top">*/}
                        {/*            <img src={price2} alt="" />*/}
                        {/*                <h4>Dedicated Hosting</h4>*/}
                        {/*                <p>Starting at</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-mid">*/}
                        {/*            <h4>$4.67 <span>/ month</span></h4>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-bottom">*/}
                        {/*            <ul>*/}
                        {/*                <li>2 TB of space</li>*/}
                        {/*                <li>unlimited bandwidth</li>*/}
                        {/*                <li>full backup systems</li>*/}
                        {/*                <li>free domain</li>*/}
                        {/*                <li>unlimited database</li>*/}
                        {/*            </ul>*/}
                        {/*            <a href="#" className="borders-btn">Get Started</a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">*/}
                        {/*    <div className="single-card text-center mb-30">*/}
                        {/*        <div className="card-top">*/}
                        {/*            <img src={price3} alt="" />*/}
                        {/*                <h4>Cloud Hosting</h4>*/}
                        {/*                <p>Starting at</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-mid">*/}
                        {/*            <h4>$4.67 <span>/ month</span></h4>*/}
                        {/*        </div>*/}
                        {/*        <div className="card-bottom">*/}
                        {/*            <ul>*/}
                        {/*                <li>2 TB of space</li>*/}
                        {/*                <li>unlimited bandwidth</li>*/}
                        {/*                <li>full backup systems</li>*/}
                        {/*                <li>free domain</li>*/}
                        {/*                <li>unlimited database</li>*/}
                        {/*            </ul>*/}
                        {/*            <a href="#" className="borders-btn">Get Started</a>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>
        {/*// <!-- Pricing Card End -->*/}
        </div>
    )
}