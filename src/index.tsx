"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
/// <reference path="../typings/react-router/react-router.d.ts" />
/// <reference path="../typings/react-router-redux/react-router-redux.d.ts" />


import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store.ts";
import { Router, Route, browserHistory } from 'react-router';
import App from "./app.tsx";
import SidePanel from "./components/side-panel/SidePanel.tsx";

render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}>
                <Route path="/:user" component={SidePanel}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);