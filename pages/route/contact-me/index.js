import React, { Fragment } from 'react';
import Head from 'next/head';

export const pageId = "contact-me";
export default function ContactUs () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/data/contact-me/css/style.css"/>
                <title> Contact me ( HBFD ) </title>
            </Head>
            <input type="hidden" value={ pageId } id="content-page-id"/>
            <div className="container-fluid">
                <div className="container">
                    <div className="container rounded py-5">
                        <a href="https://wa.me/c/237655788837?fbclid=IwAR1iL8B8mi2OtQrveqj9EJq3-vNoxQfmNBTNDZ-8meBZD908AHbCY7CS8s4" target="_blank" className="d-flex flex-row justify-content-start align-items-center py-4">
                            <img src="/img/whatsapp.jpeg" alt="whatsapp" height="80" width="120" className="img"/>
                            <span className="item-text"> +237 6 55 78 88 37 </span>
                        </a>
                        <a href="mailto:10franckpertinent@gmail.com" target="_blank" className="d-flex flex-row justify-content-start align-items-center py-4">
                            <img src="/img/gmail.png" alt="gmail" height="80" width="90" className="img"/>
                            <span className="item-text"> 10franckpertinent@gmail.com </span>
                        </a>
                        <a href="https://web.facebook.com/Thewebdesigner2.0" target="_blank" className="d-flex flex-row justify-content-start align-items-center py-4">
                            <img src="/img/facebook.jpg" alt="whatsapp" height="80" width="120" className="img"/>
                            <span className="item-text"> The web designer </span>
                        </a>
                        <a href="https://www.instagram.com/web.designer2.0" target="_blank" className="d-flex flex-row justify-content-start align-items-center py-4">
                            <img src="/img/instagram.jpg" alt="instagram" height="80" width="90" className="img"/>
                            <span className="item-text"> The web designer 2.0 </span>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

ContactUs.pageId = pageId;