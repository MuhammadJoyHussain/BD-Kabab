import React from 'react';
import { faClipboard, faHome, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
            <SideNav style={{ background: "#5094cb", position: 'fixed' }}>
                <SideNav.Toggle />
                <SideNav.Nav>
                    <NavItem>
                        <NavIcon>
                            <Link to="/home"><FontAwesomeIcon icon={faHome} style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/home" className="text-decoration-none">Home</Link>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <Link to="/dashboard"><FontAwesomeIcon icon={faUser} style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/dashboard" className="text-decoration-none">Profile</Link>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <Link to="/review"><FontAwesomeIcon icon={faStar} style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/review" className="text-decoration-none">Review</Link>
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <Link to="/orders"><FontAwesomeIcon icon={faClipboard} style={{ fontSize: '1.75em' }} /></Link>
                        </NavIcon>
                        <NavText>
                            <Link to="/orders" className="text-decoration-none">Review</Link>
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
    );
};

export default DashboardSidebar;