import React, { Fragment } from "react";
import { element } from "prop-types";
import Head from "next/head";
import Navigation from "./@navigation"

export default function Root ( { children, active } ) {
    return (
        <Fragment>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="description" content="Fr@nckkk Pertinent ( HBFD ) web and java developer. " />
                <meta name="author" content="10franckpertinent@gmail.com" />
                <link rel="icon" type="image/jpg" href="/img/logo1.JPG" />
                <link rel="stylesheet" type="text/css" href="/libs/bootstrap.min.css" />
                <link rel="stylesheet" type="text/css" href="/files/css/main.css" />
                <script src="/libs/jquery-3.3.1.slim.min.js"></script>
                <script src="/libs/popper.min.js"></script>
                <script src="/libs/digital-v2.0.0.min.js"></script>
                <title> HBFD </title>
            </Head>
            <noscript> You need to enable JavaScript to run this app. </noscript>
            <div className="container-fluid page-content main-container p-0">
                <div className="container-fluid p-0 menu">
                    <div className="container-fluid p-0 d-flex position-relative justify-content-center align-items-center content-banner header">
                        <div className="banner-text-container position-absolute position-lg-relative d-flex flex-column">
                            <span className="main-text d-block banner-text"> Fr@nckkk Pertinent </span>
                            <span className="sub-text d-block banner-text"> HBFD </span>
                        </div>
                        <img src="/img/img-icon.png" alt="Banner image" className="img-fluid position-relative banner-img" />
                    </div>
                    <div className="container-fluid nav-container d-flex position-relative p-0 m-0 justify-content-lg-between">
                        <nav className="navbar navbar-expand-lg container-fluid d-flex justify-content-arround position-relative w-100 p-0 py-3 main-nav" role="navigation">
                            <div className="nabar-brand ml-3 ml-md-0 d-inline-block">
                                <span className="navbar-text navbar-title ml-3"> Welcome </span>
                            </div>
                            <button className="navbar-toggler mr-3 d-inline-block d-lg-none main-nav-button p-0" type="button" data-toggle="collapse" data-target="#nav-bar-sub-content" arial-controls="nav-bar-sub-content" aria-expanded="false" aria-label="button">
                                <span className="navbar-toggler-icon button-item"></span>
                            </button>
                            <div className="collapse navbar-collapse d-lg-inline-block position-relative p-0 py-2 m-0 ml-lg-5" id="nav-bar-sub-content">
                                <ul className="navbar-nav d-flex position-relative flex-column flex-lg-row p-0" id="navbar-items-container">
                                    <Navigation active={ active } />
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="container-fluid subnav"></div>
                </div>
                <div className="container-fluid body d-flex flex-column p-0" id="root">
                    { children }
                </div>
                <div className="container-fluid footer d-flex flex-column justify-content-center p-0 m-0">
                    <div className="container-fluid page-text-container content-progression p-5 mb-4">
                        <span className="page-text px-2 py-3"> Fr@nckkk Pertinent </span>
                    </div>
                    <div className="row container-fluid p-0 m-0 py-3 footer-item-container">
                        <div className="col d-flex justify-content-center ml-3 align-items-start py-2">
                            <div className="footer-item d-flex flex-column justify-content-start align-items-start animate-item">
                                <div className="footer-item-title d-block"> Mastered Language </div>
                                <div className="footer-item-content d-block">
                                    <ul className="d-block d-flex flex-column p-0 py-1 m-0">
                                        <li> JavaScript </li>
                                        <li> Java </li>
                                        <li> C </li>
                                        <li> TypeScript </li>
                                        <li> Python </li>
                                        <li> C++ </li>
                                        <li> SQL </li>
                                        <li> PHP </li>
                                        <li> HTML </li>
                                        <li> CSS </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center mr-3 align-items-start py-2">
                            <div className="footer-item d-flex flex-column justify-content-start align-items-start animate-item">
                                <div className="footer-item-title d-block text-center"> Mastered Framework </div>
                                <div className="footer-item-content d-block">
                                    <ul className="d-block d-flex flex-column p-0 py-1 m-0">
                                        <li> React and React Native </li>
                                        <li> Laravel </li>
                                        <li> Next.js </li>
                                        <li> Bootstrap </li>
                                        <li> GrallVm </li>
                                        <li> JavaFx ( openfx ) </li>
                                        <li> Gtkm </li>
                                        <li> Vue.js </li>
                                        <li> Angular.js </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid p-0 m-0 footer-bottom"></div>
                    <div className="container-fluid footer-end py-4">
                        <div className="footer-title"> Contact me </div>
                        <div className="footer-end-container py-4 pl-5">
                            <div className="footer-sub-text"> 
                                Franck Duval Heuba, University of Yaounde 1, 
                                <a href="mailto:franck.heuba@facsciences-uy1.com"> franck.heuba@facsciences-uy1.com </a>
                            </div>
                            <div className="footer-sub-text py-1 mt-4">
                                <b className="footer-sub-text"> Whatsapp business: </b>
                                <a href="https://wa.me/c/237655788837?fbclid=IwAR1iL8B8mi2OtQrveqj9EJq3-vNoxQfmNBTNDZ-8meBZD908AHbCY7CS8s4"> +237 6 55 78 88 37 </a>
                            </div>
                            <div className="footer-sub-text py-1">
                                <b className="footer-sub-text"> E-mail: </b>
                                <a href="mailto:10franckpertinent@gmail.com"> 10franckpertinent@gmail.com </a>
                            </div>
                            <div className="footer-sub-text py-1">
                                <b className="footer-sub-text"> Facebook </b>
                                <a href="https://web.facebook.com/Thewebdesigner2.0"> The web designer </a>
                            </div>
                            <div className="footer-sub-text py-1">
                                <b className="footer-sub-text"> Instagram: </b>
                                <a href="https://www.instagram.com/web.designer2.0"> web.designer2.0 </a>
                            </div>
                        </div>
                        <div className="container-fuild py-4">
                            <div className="container text-center"> &copy; copyright { new Date().getFullYear() } </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="/libs/bootstrap.bundle.min.js"></script>
            <script src="/files/js/main.js"></script>
        </Fragment>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            data: { }
        }
    };
};

Root.propTypes = {
    children: element
};