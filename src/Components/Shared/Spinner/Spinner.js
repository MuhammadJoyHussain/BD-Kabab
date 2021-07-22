import React from 'react';
import * as ReactBootstrap from 'react-bootstrap'

const Spinner = () => {
    return (
        <div className="mw-100 vw-100 d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <ReactBootstrap.Spinner animation="border" />
        </div>
    );
};

export default Spinner;