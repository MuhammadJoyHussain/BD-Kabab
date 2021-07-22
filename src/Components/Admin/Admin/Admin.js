import React, { useContext } from 'react';
import { UserContext } from './../../../App';
import Sidebar from './../Sidebar/Sidebar';
import styled from 'styled-components';
import { Button, Container } from 'react-bootstrap';
import { handleSignout } from './../../Login/LoginManager';
import { useHistory, useLocation } from 'react-router-dom';

const Admin = () => {
    const [loggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/home" } };

    const logout = () => {
        handleSignout();
        localStorage.removeItem('token')
        history.replace(from);
    };

    return (
        <Container className="text-center">
            <Sidebar />
            <img style={{ borderRadius: "100%", marginTop: "100px" }} src={loggedInUser.photoURL} />
            <h6>{loggedInUser.displayName}</h6>
            <h6>{loggedInUser.email}</h6>
            <div class="col-2 mx-auto">
                <Button onClick={logout} className="form-control btn-outline-light">Log Out</Button>
            </div>
        </Container>
    );
};

export default Admin;