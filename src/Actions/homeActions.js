import axios from 'axios';
import { GET, ADD, UPDATE, DELETE, LOADING } from "../Actions/types";

export const getHome = () => dispatch => {
    dispatch(setHomeLoadings());
    axios
        .get('https://bd-kebab-bangla.herokuapp.com/api/home')
        .then(res =>
            dispatch({
                type: GET,
                payload: res.data
            })
        )
};

export const addHome = home => dispatch => {
    axios
        .post('https://bd-kebab-bangla.herokuapp.com/api/home', home)
        .then(res =>
            dispatch({
                type: ADD,
                payload: res.data
            })
        )
};

export const updateHome = id => dispatch => {
    axios
        .post('https://bd-kebab-bangla.herokuapp.com/api/home', id)
        .then(res =>
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        )
};

export const deleteHome = id => dispatch => {
    axios
    .delete(`https://bd-kebab-bangla.herokuapp.com/api/home/${id}`)
    .then(res => 
        dispatch({
            type: DELETE,
            payload: id
        })
        )
};

export const setHomeLoadings = () => {
    return {
        type: LOADING
    }
}