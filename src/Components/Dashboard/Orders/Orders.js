import React, { useEffect, useState, useContext } from 'react';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { UserContext } from '../../../App';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar';

const Order = () => {
    const [order, setOrder] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch(`https://bd-kebab-bangla.herokuapp.com/api/orders/customer`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [loggedInUser?.email]);


    return (
        <div>
            <DashboardSidebar />
            <Orders>
                <Table className="container mt-5 table-sm" striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Product Name</th>
                        </tr>
                    </thead>
                    {
                        order.map(order => {
                            return (
                                <>
                                    <tbody key={order._id}>
                                        <tr>
                                            <td>{order.name}</td>
                                            <td>{order.address}</td>
                                            <td>{order.productName}</td>
                                        </tr>
                                    </tbody>
                                </>
                            );
                        })
                    }
                </Table>
            </Orders>
        </div>
    );
};

export default Order;

const Orders = styled.div`
@media(max-width: 992px) {
    margin-left: 10%;
}

@media(max-width: 400px) {
    margin-left: 17%;
}

`