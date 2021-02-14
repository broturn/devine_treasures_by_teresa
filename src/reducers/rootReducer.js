// import productReducer from './productReducer';
import reducer from './reducer';
import { combineReducers } from 'redux';
 
const rootReducer = combineReducers({
    // product: productReducer,
    cart: reducer
});
 
export default rootReducer;