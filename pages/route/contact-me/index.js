import React, { Fragment } from 'react';
import Head from 'next/head';

export const pageId = "contact-me";
export default function ContactUs () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/data/contact-me/css/index.css"/>
                <title> Contact me ( HBFD ) </title>
            </Head>
            <input type="hidden" value={ pageId } id="content-page-id"/>
            <div className="container">
                Contact us
            </div>
        </Fragment>
    );
};

ContactUs.pageId = pageId;