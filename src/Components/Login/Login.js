import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../App';
import { FcGoogle } from "react-icons/fc";
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleGoogleSignIn, authToken, signInWithEmailAndPassword } from './LoginManager';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        authToken(res, true);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 5;
            isFieldValid = isPasswordValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        console.log(user.email && user.password);
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        e.preventDefault();
    }

    return (
        <LoginForm className="text-center container-fluid">
            <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
                <div className="col-md-4 col-sm-4 col-xs-12">
                    <div className="form-container">
                        <form onSubmit={handleSubmit}>
                            {newUser && <div className="mb-3 text-start">
                                <label className="form-label">Name</label>
                                <input className="form-control" onBlur={handleBlur} type="text" name="name" />
                            </div>}
                            <div className="mb-3 text-start">
                                <label className="form-label">Email</label>
                                <input className="form-control" onBlur={handleBlur} type="email" name="email" required />
                            </div>
                            <div className="mb-3 text-start">
                                <label className="form-label">Password</label>
                                <input className="form-control" onBlur={handleBlur} type="password" name="password" required />
                            </div>
                            <div className="mb-3 form-check text-start">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Rmember Me</label>
                            </div>
                            {newUser ?
                                <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} className="btn btn-outline-primary form-control" /> :
                                <input type="submit" name="newUser" value={newUser ? 'Sign up' : 'Sign in'} className="btn btn-outline-primary form-control" />
                            }
                        </form>
                        <p>or</p>
                        <button onClick={googleSignIn} className="btn btn-outline-danger form-control mb-3"><FcGoogle style={{ fontSize: "30px" }} /> Sign in with Google</button>
                        {newUser ?
                            <p className="mt-3">Already  have an account? <span onClick={() => setNewUser(!newUser)}>Sign in</span></p> :
                            <p className="mt-3">Dont have an account? <span onClick={() => setNewUser(!newUser)}>Sign up</span></p>
                        }
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-12"></div>
            </div>
        </LoginForm>
    );
};

export default Login;

const LoginForm = styled.div`
    .form-container {
        padding: 50px 60px;
        margin-top: 10vh;
        box-shadow: 1px 4px 26px 10px rgb(207, 207, 207);
    }

    p {
        font-size: 15px;
        font-weight: 500;
    }

    span {
        cursor: pointer;
        color: blue;
    }

    @media (max-width: 500px) {
        .form-container{
            height: 560px;
        }
    }

`