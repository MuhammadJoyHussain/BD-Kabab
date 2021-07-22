import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../../App';

const Checkout = () => {
    const [checkout, setCheckout] = useState([]);
    const { id } = useParams();
    const [loggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://bd-kebab-bangla.herokuapp.com/api/products/${id}`)
            .then(res => res.json())
            .then(data => setCheckout(data))
    }, []);

    const onSubmit = data => {

        const orderDetails = {
            name: data.name,
            email: data.email,
            address: data.address,
            phone: data.phone,
            productName: checkout.productName,
            price: checkout.price
        };
        
        axios.post('https://bd-kebab-bangla.herokuapp.com/api/orders', orderDetails)
            .then(data => {
                window.location.reload()
            })
    };

    return (
        <Form className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label">Name</label>
                            <input {...register("name", { required: true })} type="text" className="form-control" defaultValue={loggedInUser.name} />
                            {errors.name && <span>Name required</span>}
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label">Email</label>
                            <input {...register("email", { required: true })} type="email" className="form-control" defaultValue={loggedInUser.email} />
                            {errors.email && <span>Email required</span>}
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label">Address</label>
                            <input {...register("address", { required: true })} type="text" className="form-control" />
                            {errors.address && <span>Address required</span>}
                        </div>
                    </div>

                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label">Phone</label>
                            <input {...register("phone", { required: true })} type="text" className="form-control" />
                            {errors.phone && <span>Phone required</span>}
                        </div>
                    </div>
                </div>
                <Button type="submit" variant="primary">Cash on delivery</Button>
            </form>
        </Form>
    )
};

export default Checkout;

const Form = styled.div`
    margin-top: 100px;
`