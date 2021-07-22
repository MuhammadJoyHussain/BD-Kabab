import { GET, DELETE, LOADING } from "../Actions/types";

const initialState = {
    orders: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET:
            return {
                ...state,
                orders: action.payload,
                loading: false
            };
        case DELETE:
            return {
                ...state,
                orders: state.orders.filter(order => order._id !== action.payload)
            };
                case LOADING:
                    return {
                        ...state,
                        loading: true
                    }
            default:
                return state;
    }
}