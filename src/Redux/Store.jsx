import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger"
import { Reducer } from "./Reducer";


const rootreducer=combineReducers({user:Reducer});
const Store = configureStore({
    reducer:rootreducer,middleware:[thunk,logger]
})
export default Store;