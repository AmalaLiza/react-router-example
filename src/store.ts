/// <reference path="../typings/redux/redux.d.ts" />
/// <reference path="../typings/redux-thunk/redux-thunk.d.ts"/>

import {createStore, applyMiddleware, compose} from 'redux';
import createLogger from 'redux-logger';
import * as Immutable from "immutable";
import thunkMiddleware from 'redux-thunk';
import Actions from './actions.ts';
import {rootReducer} from "./reducers/rootReducer.ts";

const logger = createLogger();

const createStoreWithMiddleware = compose(applyMiddleware(thunkMiddleware, logger))(createStore);

export function configureStore() {
    const store = createStoreWithMiddleware(rootReducer);
    return store;
}

const store = configureStore();

let storeState = store.getState();

export default store;
export {storeState};