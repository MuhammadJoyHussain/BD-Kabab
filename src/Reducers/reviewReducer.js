import { GET, ADD, DELETE, LOADING } from "../Actions/types";

const initialState = {
    reviews: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET:
            return {
                ...state,
                reviews: action.payload,
                loading: false
            };
        case DELETE:
            return {
                ...state,
                reviews: state.reviews.filter(review => review._id !== action.payload)
            };
            case ADD:
                return {
                    ...state,
                    reviews: [action.payload, ...state.reviews]
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