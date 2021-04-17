import React, { Fragment } from 'react';
import Head from "next/head";

export const pageId = "about-me";
export default function AboutUs () {
    return (
        <Fragment>
            <Head>
                <link rel="stylesheet" href="/data/about-me/css/index.css"/>
                <title> About me ( HBFD ) </title>
            </Head>
            <input type="hidden" value={ pageId } id="content-page-id"/>
            <div className="container">
                About me
            </div>
        </Fragment>
    );
};

AboutUs.pageId = pageId;