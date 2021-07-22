import React, { useState } from 'react';
import { faClipboardList, faHome, faPlus, faStar, faCog, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const Sidebar = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <Container>
            <Menu>
                <Link to="/home" className="navbar-brand text-dark"><h3>BD Kebab Bangla</h3></Link>
            </Menu>
            <RightMenu>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                <li>
                    <Link to="/home" className="text-decoration-none"><FontAwesomeIcon icon={faHome} style={{ fontSize: '1em' }} /> Home</Link>
                </li>
                <li>
                    <Link to="/admin" className="text-decoration-none"><FontAwesomeIcon icon={faUser} style={{ fontSize: '1em' }} /> Profile</Link>
                </li>
                <li>
                    <Link to="/updateHome" className="text-decoration-none"><FontAwesomeIcon icon={faCog} style={{ fontSize: '1em' }} /> Update Home</Link>
                </li>
                <li>
                    <Link to="/manageProducts" className="text-decoration-none"><FontAwesomeIcon icon={faPlus} style={{ fontSize: '1em' }} /> Manage Products</Link>
                </li>
                <li>
                    <Link to="/reviews" className="text-decoration-none"><FontAwesomeIcon icon={faStar} style={{ fontSize: '1em' }} /> Reviews</Link>
                </li>
                <li>
                    <Link to="/orders" className="text-decoration-none"><FontAwesomeIcon icon={faClipboardList} style={{ fontSize: '1em' }} /> Orders</Link>
                </li>

            </BurgerNav>
        </Container>
    );
};

export default Sidebar;


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`


const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    display: flex;
    align-items: flex-end;
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: #5094cb;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.7s;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        
        a{
            color: black;
            font-weight: 600;
        }
    }

`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`