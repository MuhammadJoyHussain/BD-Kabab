import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Forbidden = () => {
    return (
        <div className="container text-center">
            <div className="row mt-5">
                <div className="col-md-6 mt-5 p-2">
                    <img src="https://media.giphy.com/media/cn2II3fn5LEJxNhd8Y/giphy.gif" alt="" />
                </div>
                <div className="col-md-6" style={{ marginTop: "150px" }}>
                    <h1 className="text-black fw-bold text-uppercase">403 <span className="text-danger">Forbidden Error</span></h1>
                    <br />
                    <h2 className="text-uppercase fw-bold text-block">Access denied</h2>
                    <br />
                    <span className="fw-bold">Sorry, you don't have the permission</span>
                    <div className="mt-4 mb-5">
                        <Link className="btn btn-outline-primary border-primary shadow-lg" to="/"><FontAwesomeIcon icon={faHome} /> Return Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forbidden;