import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './Redusor/CombineRedusers';
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
