import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import { UserContext } from '../../../../App';
import Dashboard from '../../Dashboard/Dashboard';
import axios from 'axios';

const AddReview = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [imageURL, setImage] = useState();

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'be0bfdc7d486400a9b4e199989aafa26');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImage(res.data.data.display_url);
            })
            .then(err => {
                console.log(err);
            })
    }

    const onSubmit = data => {
        const reviewData = {
            image: imageURL,
            name: data.name,
            review: data.review,
        };
        console.log(reviewData);
        axios.post(`https://bd-kebab-bangla.herokuapp.com/api/reviews`, reviewData)
            .then(data => {
                if (data == true) {
                    console.log(data);
                    window.location.reload()
                }
            })
    };


    return (
        <div>
            <Dashboard />
            <Form className="container mt-5">
                <div className="row">
                    <div className="col-md-8 mb-3 text-center">
                        <h2>Review</h2>
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <label className="form-label">Upload Image</label>
                                    <input {...register("imageURL")} onChange={handleImageUpload} type="file" className="form-control" />
                                </div>
                                <div className="col-md-6 form-group">
                                    <label className="form-label">Name</label>
                                    <input {...register("name", { required: true })} type="name" className="form-control" defaultValue={loggedInUser.name} />
                                    {errors.name && <span>This field is required</span>}
                                </div>
                            </div>
                            <div className="mt-3 mb-3 form-group">
                                <textarea className="form-control" {...register("review")} type="text" cols="30" rows="20"></textarea>
                            </div>
                            <Button type="submit" variant="primary">Submit</Button>
                        </form>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default AddReview;

const Form = styled.div`
    textarea {
        height: 300px;
    }
    
    @media(max-width: 992px) {
        margin-left: 15%;
    }
`