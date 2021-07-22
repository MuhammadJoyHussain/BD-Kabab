import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { UserContext } from '../../../App';

const CareerForm = () => {
    const [loggedInUser] = useContext(UserContext);
    const [data, setData] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleBlur = e => {
        const newData = { ...data };
        newData[e.target.name] = e.target.value;
        setData(newData);
    }
    const onSubmit = () => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('experience', data.experience)
        formData.append('about', data.about)

        fetch('https://bd-kebab-bangla.herokuapp.com/api/career', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {

            })
    }

    return (
        <Career className="container">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control {...register("name", { required: true })} onBlur={handleBlur} type="text" defaultValue={loggedInUser.displayName} />
                    {errors.name && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control {...register("email", { required: true })} onBlur={handleBlur} type="email" defaultValue={loggedInUser.email} />
                    {errors.email && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Work experience</Form.Label>
                    <Form.Control {...register("experience", { required: true })} onBlur={handleBlur} type="text" />
                    {errors.experience && <span>This field is required</span>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>About</Form.Label>
                    <Form.Control {...register("about", { required: true })} onBlur={handleBlur} as="textarea" rows={3} />
                    {errors.about && <span>This field is required</span>}
                </Form.Group>
                <Button type="submit" variant="primary">Submit</Button>
            </Form>
            <div className="text-center">
                <h4>Or</h4>
                <p>Call us at <br />+48 739 654 345</p>
            </div>
        </Career>
    );
};

export default CareerForm;

const Career = styled.div`
    margin-top: 80px;
`