import axios from 'axios';
import { GET, DELETE, LOADING } from "./types";

export const getOrder = () => dispatch => {
    dispatch(setOrdersLoadings());
    axios
        .get('https://bd-kebab-bangla.herokuapp.com/api/orders')
        .then(res =>
            dispatch({
                type: GET,
                payload: res.data
            })
        )
};

export const deleteOrder = id => dispatch => {
    axios
    .delete(`https://bd-kebab-bangla.herokuapp.com/api/orders/${id}`)
    .then(res => 
        dispatch({
            type: DELETE,
            payload: id
        })
        )
};

export const setOrdersLoadings = () => {
    return {
        type: LOADING
    }
}