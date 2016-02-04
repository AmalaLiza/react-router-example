"use strict";

///<reference path='../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';


const initialState = Immutable.fromJS({
    usersList : [
        {
        "login": "mojombo",
        "id": 1,
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
    },
        {
            "login": "defunkt",
            "id": 2,
            "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
            "gravatar_id": "",
            "url": "https://api.github.com/users/defunkt",
            "html_url": "https://github.com/defunkt",
            "followers_url": "https://api.github.com/users/defunkt/followers",
            "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
            "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
            "organizations_url": "https://api.github.com/users/defunkt/orgs",
            "repos_url": "https://api.github.com/users/defunkt/repos",
            "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
            "received_events_url": "https://api.github.com/users/defunkt/received_events",
            "type": "User",
            "site_admin": true
        }]
});

export function rootReducer(state = initialState, action) {

    switch (action.type) {

        case 'LOAD_USERS':
            return state;

        default:
            return state;
    }
}