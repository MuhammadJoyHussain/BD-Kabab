import { combineReducers } from "redux";
import homeReducer from './homeReducer';
import productReducer from './productReducer';
import orderReducer from './orderReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
    home: homeReducer,
    product: productReducer,
    order: orderReducer,
    review: reviewReducer,
})