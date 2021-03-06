import { combineReducers, compose, createStore } from 'redux';
import { popupReducer } from 'react-redux-popup';
import modalReducer from 'app/reducer';

const reducers = combineReducers({
    modal: modalReducer,
    popup: popupReducer
});
const createStoreWithMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
export default createStoreWithMiddleware(reducers);
