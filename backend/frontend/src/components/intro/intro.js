import React, { useEffect } from 'react'
import $ from 'jquery'
import 'slick-carousel'
import hero_img from '../../assets/img/hero/hero_right.png'
import top_left_shape from '../../assets/img/hero/top-left-shape.png'


export default function Intro() {
    function mainSlider() {
        let BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            let $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            let $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 4000,
            dots: false,
            fade: true,
            arrows: false,
            prevArrow: '<button type="button" class="slick-prev"><i class="ti-angle-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="ti-angle-right"></i></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false
                    }
                }
            ]
        });

        function doAnimations(elements) {
            let animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                let $this = $(this);
                let $animationDelay = $this.data('delay');
                let $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    useEffect(() => {
        mainSlider()
    }, [])

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