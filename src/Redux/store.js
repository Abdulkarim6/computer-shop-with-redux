import {createStore} from "redux";
import { productReducer } from "./Reducers/productReducers";

const store = createStore(productReducer);

export default store;