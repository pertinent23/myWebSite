import React from "react";
import Root from "./route/Root";

const MyApp = function( { Component, pageProps } ) {
    return (
        <Root active={ Component.pageId }>
            <Component { ...pageProps } />
        </Root>
    );
};

export default MyApp;