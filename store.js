import {combineReducers, createStore} from "redux";

const initialState = {
    isSignedIn: false,
    username: "",
    password: "",
}

const rootReducer = combineReducers(
    userData = () => initialState
)

export const store = createStore(rootReducer)