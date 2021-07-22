import React from 'react';
import HomeList from '../HomeList/HomeList';
import HomeModal from '../HomeModal/HomeModal';
import { Container } from 'react-bootstrap';
import Navb from './../../../Shared/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const ManageHome = () => {
    return (
            <Container style={{marginTop:"100px"}}>
                <Sidebar />
                <HomeModal />
                <HomeList />
            </Container>
    );
};

export default ManageHome;