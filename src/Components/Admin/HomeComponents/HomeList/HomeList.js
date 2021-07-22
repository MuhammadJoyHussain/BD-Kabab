import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getHome, deleteHome } from './../../../../Actions/homeActions';
import PropTypes from 'prop-types';

class HomeList extends Component {

    componentDidMount() {
        this.props.getHome();
    }

    onDeleteClick = id => {
        this.props.deleteHome(id);
    }

    render() {
        const { homes } = this.props.home;
        return (
            <Container>
                <TransitionGroup className="mt-3">
                    <Table>
                        <thead>
                            <tr>
                                <th>Hours of opening</th>
                                <th>Location</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        {homes.map(({ _id, openandclose, location, phone, story }) => (
                            <CSSTransition key={_id} timeout={500}>
                                <tbody>
                                    <tr>
                                        <td style={{width: "300px"}}>{openandclose}</td>
                                        <td style={{width: "500px"}}>{location}</td>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr>
                                        <th>Story:</th>
                                        <td >{story}</td>
                                        <td>
                                            <Button className="btn-danger btn-sm" onClick={this.onDeleteClick.bind(this, _id)}>&times; </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </CSSTransition>
                        ))
                        }
                    </Table>
                </TransitionGroup>
            </Container>
        );
    }
}

HomeList.propTypes = {
    getHome: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    home: state.home
});

export default connect(
    mapStateToProps,
    { getHome, deleteHome }
)(HomeList);