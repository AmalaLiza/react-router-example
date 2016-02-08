"use strict";

///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';


const initialState = Immutable.fromJS({
    usersList : [],
    contents:{}
});

export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case 'LOAD_USERSLIST_SUCCESS':
            state = state.update('usersList', usersList => Immutable.fromJS(action.usersList));
            return state;

        case 'LOAD_USER_SUCCESS':
            state = state.update('contents', contents => Immutable.fromJS(action.user));
            return state;

        default:
            return state;
    }
}