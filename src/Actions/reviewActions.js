import axios from 'axios';
import { GET, ADD, DELETE, LOADING } from "../Actions/types";

export const getReviews = () => dispatch => {
    dispatch(setReviewsLoadings());
    axios
        .get('https://bd-kebab-bangla.herokuapp.com/api/reviews')
        .then(res =>
            dispatch({
                type: GET,
                payload: res.data
            })
        )
};

export const addReview = review => dispatch => {
    axios
        .post('https://bd-kebab-bangla.herokuapp.com/api/reviews', review)
        .then(res =>
            dispatch({
                type: ADD,
                payload: res.data
            })
        )
};

export const deleteReview = id => dispatch => {
    axios
    .delete(`https://bd-kebab-bangla.herokuapp.com/api/reviews/${id}`)
    .then(res => 
        dispatch({
            type: DELETE,
            payload: id
        })
        )
};

export const setReviewsLoadings = () => {
    return {
        type: LOADING
    }
}