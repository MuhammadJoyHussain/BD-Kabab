import React, { Component } from 'react';
import { Container, Table, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getProducts, deleteProduct } from '../../../../Actions/productActions';
import PropTypes from 'prop-types';

class ProductList extends Component {

    componentDidMount() {
        this.props.getProducts();
        console.log(getProducts());
    }

    onDeleteClick = id => {
        this.props.deleteProduct(id);
    }

    render() {
        const { products } = this.props.product;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="mt-3">
                        <Table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {products.map(({ _id, productName, price }) => (
                                <CSSTransition key={_id}>
                                    <tbody>
                                        <tr>
                                            <td>{productName}</td>
                                            <td>{price}</td>
                                            <td><Button className="remove-btn" color="danger"
                                                size="sm"
                                                onClick={this.onDeleteClick.bind(this, _id)}
                                            >&times;</Button></td>
                                        </tr>
                                    </tbody>
                                </CSSTransition>
                            ))
                            }
                        </Table>
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ProductList.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    product: state.product
});

export default connect(
    mapStateToProps,
    { getProducts, deleteProduct }
)(ProductList);
