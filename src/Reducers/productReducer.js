import { GET, ADD, DELETE, LOADING } from "../Actions/types";

const initialState = {
    products: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET:
            return {
                ...state,
                products: action.payload,
                loading: false
            };
        case DELETE:
            return {
                ...state,
                products: state.products.filter(product => product._id !== action.payload)
            };
            case ADD:
                return {
                    ...state,
                    products: [action.payload, ...state.products]
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