import React, { Component } from 'react';
import { Container, Table, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReviews, deleteReview } from './../../../../Actions/reviewActions';
import Sidebar from '../../Sidebar/Sidebar';


class ReviewList extends Component {

    componentDidMount() {
        this.props.getReviews();
    }

    onDeleteClick = id => {
        this.props.deleteReview(id);
    }

    render() {
        const { reviews } = this.props.review;
        return (
            <div>
                <Sidebar />
                <Container style={{ marginTop: "80px" }}>
                    <ListGroup>
                        <TransitionGroup className="mt-3">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Review</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                {reviews.map(({ _id, name, review }) => (
                                    <CSSTransition key={_id}>
                                        <tbody>
                                            <tr>
                                                <td>{name}</td>
                                                <td>{review}</td>
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
            </div>
        );
    }
}

ReviewList.propTypes = {
    getReviews: PropTypes.func.isRequired,
    review: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    review: state.review
});

export default connect(
    mapStateToProps,
    { getReviews, deleteReview }
)(ReviewList);
