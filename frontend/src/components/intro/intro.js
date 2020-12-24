import React from 'react'
import hero_img from '../../assets/img/hero/hero_right.png'
import top_left_shape from '../../assets/img/hero/top-left-shape.png'


export default function Intro() {

    return (
        <div>
                {/*// <!-- Slider Area Start-->*/}
                <div className="slider-area slider-bg ">
                    <div className="slider-active">
                        {/*// <!-- Single Slider -->*/}
                        <div className="single-slider d-flex align-items-center slider-height ">
                            <div className="container">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-xl-5 col-lg-5 col-md-9 ">
                                        <div className="hero__caption">
                                            <span data-animation="fadeInLeft" data-delay=".3s">Best Domain & hosting service provider</span>
                                            <h1 data-animation="fadeInLeft" data-delay=".6s ">Powerful web hosting</h1>
                                            <p data-animation="fadeInLeft" data-delay=".8s">Supercharge your WordPress
                                                hosting with detailed
                                                website analytics, marketing tools, security, and data
                                                backups all in one place.</p>
                                            {/*// <!-- Slider btn -->*/}
                                            <div className="slider-btns">
                                                {/*// <!-- Hero-btn -->*/}
                                                <a data-animation="fadeInLeft" data-delay="1s" href="industries.html"
                                                   className="btn radius-btn">get started</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="hero__img d-none d-lg-block f-right">
                                            <img src={hero_img} alt=""
                                                 data-animation="fadeInRight" data-delay="1s" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- Slider Shape -->*/}
                    <div className="slider-shape d-none d-lg-block">
                        <img className="slider-shape1" src={top_left_shape} alt="" />
                    </div>
                </div>
        </div>
    )
}