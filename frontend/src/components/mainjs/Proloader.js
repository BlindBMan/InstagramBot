import React, { useEffect } from 'react'
import $ from 'jquery'
import loder from "../../assets/img/logo/loder.png";


export default function Proloader() {
    useEffect(() => {
        $('#preloader-active').delay(450).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    }, [])

    return (
        <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
                <div className="preloader-inner position-relative">
                    <div className="preloader-circle"></div>
                    <div className="preloader-img pere-text">
                        {/*<img src={loder} alt="" />*/}
                        P&N ENGAGE
                    </div>
                </div>
            </div>
        </div>
    )
}
