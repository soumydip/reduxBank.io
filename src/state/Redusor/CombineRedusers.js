import { combineReducers } from "redux";
import cartReducer from "./CartActionReduse";
const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;