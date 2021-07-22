import React from 'react';
import ProductList from '../ProductList/ProductList';
import ProductModal from '../ProductModal/ProductModal';
import { Container } from 'react-bootstrap';
import Navb from '../../../Shared/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const ManageProducts = () => {
    return (
        <Container style={{marginTop:"100px"}}>
            <Sidebar />
            <ProductModal />
            <ProductList />
        </Container>
    );
};

export default ManageProducts;