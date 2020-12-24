import React from 'react'
import footer_logo from '../../assets/img/logo/logo2_footer.png'

export default function Footer() {
    return (
            <footer>
                <div className="footer-wrappr "
                     style={{
                         background: '#3b1440'
                     }}
                     >
                    <div className="footer-area footer-padding ">
                        <div className="container">
                            <div className="row d-flex justify-content-between">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        {/*// <!-- logo -->*/}
                                        <div className="footer-logo mb-25">
                                            <a href="index.html"><img src={footer_logo} alt="" /></a>
                                        </div>
                                        <div className="footer-tittle mb-50">
                                            <p>Subscribe our newsletter to get updates about our services</p>
                                        </div>

                                        {/*// <!-- social -->*/}
                                        <div className="footer-social mt-50">
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1"></div>
                                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Company</h4>
                                            <ul>
                                                <li><a href="#">Why choose us</a></li>
                                                <li><a href="#"> Review</a></li>
                                                <li><a href="#">Customers</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Carrier</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Products</h4>
                                            <ul>
                                                <li><a href="#">Why choose us</a></li>
                                                <li><a href="#"> Review</a></li>
                                                <li><a href="#">Customers</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Carrier</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Support</h4>
                                            <ul>
                                                <li><a href="#">Technology</a></li>
                                                <li><a href="#"> Products</a></li>
                                                <li><a href="#">Customers</a></li>
                                                <li><a href="#">Quality</a></li>
                                                <li><a href="#">Sales geography</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// <!-- footer-bottom area -->*/}
                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="footer-border">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="footer-copy-right text-center">
                                            <p>
                                                Copyright &copy;
                                                <script>document.write(new Date().getFullYear());</script>
                                                All rights reserved | This template is made with <i
                                                    className="fa fa-heart" aria-hidden="true"></i> by <a
                                                    href="https://colorlib.com" target="_blank">Colorlib</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}