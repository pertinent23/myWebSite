import ErrorPage from "./route/@error-page";

const Error = ( { statusCode } ) => {
    console.log( statusCode );
    return (
        <ErrorPage code={ statusCode ? statusCode : 404 } />
    );
};

Error.getInitialProps = ( res, err ) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
};

export default Error;