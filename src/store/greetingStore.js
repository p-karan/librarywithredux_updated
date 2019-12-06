import greetingReducer from "../reducer/greetingReducer";
import {combineReducers, createStore} from "redux";
import BookReducer from "../reducer/BookReducer";
import thunk from "redux-thunk";
import {connect,applyMiddleware} from "redux";
import LoanReducer from "../reducer/LoanReducer";

var rootReducer=combineReducers({greet:greetingReducer,book:BookReducer,loan:LoanReducer})
/*var greetingStore=createStore(greetingReducer);*/
//var bookStore=createStore(BookReducer);
const myStore=createStore(rootReducer,applyMiddleware(thunk));

//export default greetingStore;
export default myStore;