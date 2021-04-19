import React, { Fragment } from "react";
import Head from "next/head";

export const pageId = "home";
export default function Index() {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/files/css/index.css"/>
                <title> Home ( HBFD ) </title>
            </Head>
            <input type="hidden" value={ pageId } id="content-page-id"/>
            <div className="row container-fluid d-flex flex-lg-row-reverse m-0 p-0">
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="container rounded-circle content-image-icon position-relative d-flex justify-content-center align-items-center animate-item">
                        <img src="/img/img-icon.png" alt="icon" className="img image-icon d-block position-relative" />
                        <div className="container rounded-circle subcontent-image-icon position-relative d-flex justify-content-center align-items-center"></div>
                    </div>
                </div>
                <div className="col-12 col-lg-7 d-flex flex-column justify-content-center">
                    <div className="container d-flex flex-column justify-content-start align-items-start">
                        <div className="part-title d-flex flex-column w-100 p-0 mb-5 animate-item">
                            <div className="container-fluid part-title-text d-block position-relative text-left"> Hello everyone </div>
                            <div className="container-fluid part-title-bar d-flex justify-content-start position-relative mt-3 mt-lg-4">
                                <span className="bar d-block position-relative"></span>
                            </div>
                        </div>
                        <div className="part-content d-flex-flex-column w-100 p-0 mb-5 animate-item">
                            <div className="container-fluid part-content-text d-block position relative text-left">
                                I am Franck Duval, i'am { new Date().getFullYear() - 2003 - 1 } years old, web and Java developer. JavaScript specialist. I am currently styduing
                                at Yaounde 1 University, based in Yaounde, capital of the Camroon. Am member of the Google Student 
                                developer program. I'm back-end developer and front-end designer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center content-hire m-0 p-0 py-4">
                <a href="mailto:10franckpertinent@gmail.com" target="_blank">
                    <input type="button" value="Hire me" id="hire"/>
                </a>
            </div>
            <div className="description container-fluid content-card m-0 p-0 py-5">
                <div className="description-content container-fluid content-card m-0 p-0 py-4">
                    <div className="row container-fluid content-card m-0 p-0 py-1 py-lg-2">
                        <div className="col d-flex justify-content-center align-items-start py-2 py-lg-3">
                            <div className="card content-card-part shadow-lg animate-item">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <span className="card-title"> GitHub </span>
                                    <img src="/img/github.png" alt="github" className="card-icon d-block img-responsive rounded-circle img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start py-2 py-lg-3">
                            <div className="card content-card-part shadow-lg animate-item">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <span className="card-title"> Next.js </span>
                                    <img src="/img/next.svg" alt="github" className="card-icon d-block img-responsive img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row container-fluid content-card m-0 p-0 py-1 py-lg-2">
                        <div className="col d-flex justify-content-center align-items-start py-2 py-lg-3">
                            <div className="card content-card-part shadow-lg animate-item">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <span className="card-title"> React </span>
                                    <img src="/img/react.png" alt="github" className="card-icon d-block img-responsive img"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-start py-2 py-lg-3">
                            <div className="card content-card-part shadow-lg animate-item">
                                <div className="card-body d-flex flex-column align-items-center">
                                    <span className="card-title"> Bootstrap </span>
                                    <img src="/img/bootstrap.png" alt="github" className="card-icon d-block img-responsive img"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid d-flex justify-content-center align-items-center content-hire p-0 overflow-hidden animate-item">
                <img src="/img/logo1.JPG" alt="logo" className="img image-logo"/>
            </div>
        </Fragment>
    );
};

Index.pageId = pageId;