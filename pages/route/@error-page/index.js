import React, { Fragment } from 'react';

export const pageId = "error404";
export default function Error404 ( { code } ) {
    return (
        <Fragment>
            <input type="hidden" value={ pageId } id="content-page-id"/>
            <div className="container d-flex justify-content-center align-items-center shadow rounded py-5 my-5 error-box">
                <div className="d-flex position-relative justify-content-center align-items-center error-content">
                    <div className="display-4">  Error { code } </div>
                </div>
            </div>
        </Fragment>
    );
};