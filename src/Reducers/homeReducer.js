import { GET, ADD, UPDATE, DELETE, LOADING } from "../Actions/types";

const initialState = {
    homes: [],
    loading: false
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET:
            return {
                ...state,
                homes: action.payload,
                loading: false
            };
        case DELETE:
            return {
                ...state,
                homes: state.homes.filter(home => home._id !== action.payload)
            };
        case UPDATE:
            return {
                ...state,
                homes: state.homes.filter(home => home._id !== action.payload)
            };
            case ADD:
                return {
                    ...state,
                    homes: [action.payload, ...state.homes]
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