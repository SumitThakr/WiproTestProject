import { createStore, applyMiddleware } from 'redux';
//import thunk for doing asynchronous operations in redux
import thunk from 'redux-thunk';
//import reducer from our reducer file
import {Reducer} from './'

export const Store=createStore(Reducer,applyMiddleware(thunk));