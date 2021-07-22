import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getOrder, deleteOrder } from './../../../Actions/orderActions';
import PropTypes from 'prop-types';
import Navb from '../../Shared/Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

class OrderList extends Component {

    componentDidMount() {
        this.props.getOrder();
    }

    onDeleteClick = id => {
        this.props.deleteOrder(id);
    }

    render() {
        const { orders } = this.props.order;
        return (
            <div>
                <Sidebar />
                <Container style={{marginTop: "100px"}}>
                    <TransitionGroup className="mt-3">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Phone</th>
                                    <th>Product</th>
                                    <th></th>
                                </tr>
                            </thead>
                            {orders.map(({ _id, name, address, phone, productName }) => (
                                <CSSTransition key={_id}>
                                    <tbody>
                                        <tr>
                                            <td>{name}</td>
                                            <td>{address}</td>
                                            <td>{phone}</td>
                                            <td style={{ width: "400px" }}>{productName}</td>
                                            <td><Button className="btn-danger btn-sm" onClick={this.onDeleteClick.bind(this, _id)}>&times; </Button></td>
                                        </tr>
                                    </tbody>
                                </CSSTransition>
                            ))
                            }
                        </Table>
                    </TransitionGroup>
                </Container>
            </div>
        );
    }
}

OrderList.propTypes = {
    getOrder: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    order: state.order
});

export default connect(
    mapStateToProps,
    { getOrder, deleteOrder }
)(OrderList);