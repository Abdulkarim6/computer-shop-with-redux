import {createStore} from "redux";
import { productReducer } from "./Reducers/productReducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(productReducer,composeWithDevTools());

export default store;