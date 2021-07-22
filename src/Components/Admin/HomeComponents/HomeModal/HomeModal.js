import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addHome } from '../../../../Actions/homeActions';
import axios from 'axios';

class HomeModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '70d681c32fc6921d44ddd09d8845db65');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                this.setState({ img: res.data.data.display_url });
            })
            .then(err => {

            })
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newHome = {
            img: this.state.img,
            openandclose: this.state.openandclose,
            location: this.state.location,
            phone: this.state.phone,
            story: this.state.story
        }
        this.props.addHome(newHome)

        this.toggle();
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: "2rem" }} onClick={this.toggle}>Update Home</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Update home</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>

                                <Label for="Home">Upload Image</Label>
                                <Input className="mt-3 mb-3 form-control" type="file" name="img" onChange={this.handleImageUpload} />

                                <Label for="Home">Hours of operation</Label>
                                <Input className="mt-3 mb-3" type="text" name="openandclose" onChange={this.onChange} />

                                <Label for="Home">Location</Label>
                                <Input className="mt-3 mb-3" type="text" name="location" onChange={this.onChange} />

                                <Label for="Home">Phone</Label>
                                <Input className="mt-3 mb-3" type="text" name="phone" onChange={this.onChange} />

                                <Label for="Home">Story</Label>
                                <textarea className="form-control mt-3" type="text" name="story" onChange={this.onChange} />

                                <Button color="dark" style={{ marginTop: "2rem" }} block>Update</Button>

                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    home: state.home
})

export default connect(mapStateToProps, { addHome })(HomeModal);