import axios from 'axios';
import { GET, ADD, DELETE, LOADING } from "../Actions/types";

export const getProducts = () => dispatch => {
    dispatch(setProductsLoadings());
    axios
        .get('https://bd-kebab-bangla.herokuapp.com/api/products')
        .then(res =>
            dispatch({
                type: GET,
                payload: res.data
            })
        )
};

export const addProduct = product => dispatch => {
    axios
        .post('https://bd-kebab-bangla.herokuapp.com/api/products', product)
        .then(res =>
            dispatch({
                type: ADD,
                payload: res.data
            })
        )
};

export const deleteProduct = id => dispatch => {
    axios
    .delete(`https://bd-kebab-bangla.herokuapp.com/api/products/${id}`)
    .then(res => 
        dispatch({
            type: DELETE,
            payload: id
        })
        )
};

export const setProductsLoadings = () => {
    return {
        type: LOADING
    }
}