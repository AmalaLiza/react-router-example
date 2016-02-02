"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store.ts";
import App from "./app.tsx";

render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById("root")
);