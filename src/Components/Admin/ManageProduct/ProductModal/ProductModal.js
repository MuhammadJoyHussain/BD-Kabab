import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { addProduct } from '../../../../Actions/productActions';
import axios from 'axios';

class ProductModal extends Component {
    state = {
        modal: false,
        productName: '',
        price: '',
        file: null
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
                this.setState({image: res.data.data.display_url});
            })
            .then(err => {
            })

    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();


        const newFoodItem = {
            productName: this.state.productName,
            price: this.state.price,
            image: this.state.image
        };
        console.log(this.state);
        this.props.addProduct(newFoodItem)

        //Close modal
        this.toggle();
    }

    render() {
        return (
            <div>
                <Button color="dark" style={{ marginBottom: "2rem" }} onClick={this.toggle}>Add Product</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Food List</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit} encType="multipart/form-data">
                            <FormGroup>

                                <Label className="mt-3 mb-2" for="Food">Food Name</Label>
                                <Input type="name" name="productName" id="Food" placeholder="Add Food" onChange={this.onChange} />

                                <Label className="mt-3 mb-2" for="Food">Food Price</Label>
                                <Input type="text" name="price" id="Food" placeholder="Add Price" onChange={this.onChange} />

                                <Label className="mt-3 mb-2" for="Food">Upload Image</Label>
                                <Input className="form-control" type="file" name="image" id="Food" onChange={ this.handleImageUpload } />

                                <Button color="dark" style={{ marginTop: "2rem" }} block >Add Food</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    product: state.product
})

export default connect(mapStateToProps, { addProduct })(ProductModal);