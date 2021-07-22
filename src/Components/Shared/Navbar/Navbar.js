import React, { useContext } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../App';
import { handleSignout, initializeLoginFramework } from '../../Login/LoginManager';

const Navbar = () => {
    const [loggedInUser, setLoggedInUser, isAdmin] = useContext(UserContext);
    const { isSignedIn } = loggedInUser;
    initializeLoginFramework();

    const logout = () => {
        handleSignout();
        setLoggedInUser({});
        localStorage.removeItem('token');
    }


    return (
        <Nav>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <Link to="/" className="navbar-brand text-white">BD KEBAB BANGLA</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} style={{ color: "#c69963" }} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-lg-auto text-center">
                            <li className="nav-item">
                                <Link className="nav-link" to='/home'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">Menu</Link>
                            </li>
                            <li className="nav-item">
                                {isSignedIn || localStorage.getItem('token') ? <Link className="nav-link" to="/dashboard">Dashboard</Link> : null}
                            </li>
                            <li className="nav-item">
                                {isAdmin ? <Link className="nav-link" to="/admin">Admin</Link> : null}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/career">Career</Link>
                            </li>
                            <li className="nav-item">
                                {isSignedIn || localStorage.getItem('token') ? <Link onClick={logout} className="btn nav-link">Log Out</Link> :
                                    <Link to="/login" className="btn nav-link">Log In</Link>}
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.div`
    nav {
        background: #10132F;
    }

    .nav-link {
        position: relative;
        margin-right: 30px;
        color: white;
        padding: 0;
    }

    .nav-link::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -3px;
        background-color: #c69963;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 650ms;
    }

    .nav-link:hover::before {
        transform: scaleX(1);
    }

    @media(max-width: 992px) {
        ul {
            margin-top: 30px;
        }
        .nav-link {
            padding-bottom: 25px;
        }

        .nav-link::before {
            bottom: 12px;
            align-items: center;
            transform-origin: center;
        }
    }
`