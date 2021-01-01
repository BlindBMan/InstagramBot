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
                                <p>Supercharge your WordPress hosting with detailed website analytics, marketing tools. Our experts are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you succeed!</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-10">
                            <div className="single-card text-center mb-30">
                                <div className="card-top">
                                    <img src={price1} alt="" />
                                        <h4>Shared Hosting</h4>
                                        <p>Starting at</p>
                                </div>
                                <div className="card-mid">
                                    <h4>$4.67 <span>/ month</span></h4>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li>2 TB of space</li>
                                        <li>unlimited bandwidth</li>
                                        <li>full backup systems</li>
                                        <li>free domain</li>
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
                                        <h4>Dedicated Hosting</h4>
                                        <p>Starting at</p>
                                </div>
                                <div className="card-mid">
                                    <h4>$4.67 <span>/ month</span></h4>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li>2 TB of space</li>
                                        <li>unlimited bandwidth</li>
                                        <li>full backup systems</li>
                                        <li>free domain</li>
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
                                        <h4>Cloud Hosting</h4>
                                        <p>Starting at</p>
                                </div>
                                <div className="card-mid">
                                    <h4>$4.67 <span>/ month</span></h4>
                                </div>
                                <div className="card-bottom">
                                    <ul>
                                        <li>2 TB of space</li>
                                        <li>unlimited bandwidth</li>
                                        <li>full backup systems</li>
                                        <li>free domain</li>
                                        <li>unlimited database</li>
                                    </ul>
                                    <a href="#" className="borders-btn">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/*// <!-- Pricing Card End -->*/}
        </div>
    )
}