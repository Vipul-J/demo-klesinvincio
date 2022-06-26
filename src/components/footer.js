import React from 'react';
import { faFacebook, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function footer() {
    return (
        <>
            <section className="bg-light py-4">
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-6 col-md-12 col-sm-12'>
                            <div className='mb-2'>
                                <h5 className='invi-txt-head fw-bold'>Newsletter</h5>
                                <form action="" className="">
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control form-control-lg w-50" placeholder="Subscribe Here" />
                                        <button type="submit" className="input-group-text btn-primary  btn text-white rwt-bg-primary"> Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-12 col-sm-12 text-end d-none d-lg-block d-xl-block d-xxl-block'>
                            <div className='text-end'>
                                <h5 className="invi-txt-head fw-bold" >Connect Us</h5>
                                <a href='#' className='btn  btn-primary btn-floating text white me-2' > <FontAwesomeIcon icon={faInstagram} size='2x' /></a>
                                <a href='#' className='btn btn-primary btn-floating text white' ><FontAwesomeIcon icon={faFacebook} size='2x' /></a>
                                {/* <a href='#' className='btn btn-floating rwt-bg-primary text-white' ><i className="bi bi-youtube fs-4 "></i></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="rwt-dark-footer-bg pb-5">
                <div className='container'>
                    <div className='row'>
                        <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 col-xs-6 mt-3">
                            <div className="mb-4 mt-4"><a href=""><img className="img-fluid" src='/assets/images/footlogo.png' alt="footer logo" /></a></div>
                            <p className='footer-txt'>For us, education does not lie in the qualification of knowledge, it lies in the quality of knowledge that helps form the character of students.</p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 col-xs-6 mt-3">
                            <h4 className="mb-4 mt-4  text-white">Information</h4>
                            <div className='text-left'>
                                <p><a href="#" className="text-decoration-none footer-txt">Home</a></p>
                                <p><a href="#" className="text-decoration-none footer-txt">Registration</a></p>
                                <p><a href="#" className="text-decoration-none footer-txt">Teaser</a></p>
                                <p><a href="#" className="text-decoration-none footer-txt">Events</a></p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 col-xs-6 mt-3 ">
                            <h4 className="mb-4 mt-4 text-white">College</h4>
                            <p><a href="#" className="text-decoration-none footer-txt">About</a></p>
                            <p><a href="#" className="text-decoration-none footer-txt">Website</a></p>
                            <p><a href="#" className="text-decoration-none footer-txt">Admission Enquiry</a></p>
                            <p><a href="#" className="text-decoration-none footer-txt">Help Desk</a></p>
                        </div>
                        <div className="col-lg-3 col-md-3 col-xl-3 col-sm-6 col-xs-6 mt-3 ">
                            <h4 className="mb-4 mt-4 text-white">Contact Us</h4>
                            <p href="#" className="text-decoration-none footer-txt">KLE Society's BCA, Vidya Nagar, Hubballi, Karnataka 580031</p>
                            <p><a href="#" className="text-decoration-none footer-txt">infodesk@klebcahubli.in</a></p>
                            <p><a href="#" className="text-decoration-none footer-txt">+918362372298</a></p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col d-lg-none d-xl-none d-xxl-none'>
                            <h5 className='mt-3 mb-2 text-white'>Connect Us</h5>
                            <a href='#' className='btn btn-floating rwt-bg-primary text-white me-2' ><i className="bi bi-facebook fs-5 "></i></a>
                            <a href='#' className='btn btn-floating rwt-bg-primary text-white' ><i className="bi bi-instagram fs-5 "></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='rwt-dark-footer-bg p-2'>
                <div className='text-center text-white fs-6'>
                    &copy; 2022 Kle BCA's Invincio. Designed and Developed by<a href="#" className="text-decoration-none footer-txt-vj"> Vipul Jujar</a>
                </div>
            </section>
        </>
    )
}

export default footer;