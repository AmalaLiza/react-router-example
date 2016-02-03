"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
/// <reference path="../typings/immutable/immutable.d.ts" />

import * as React from "react";
import * as Immutable from "immutable";
import {connect} from "react-redux";
import Actions from "./actions.ts";
import {bindActionCreators} from "redux";
import SideItem from "./components/side-item/SideItem.tsx";
import Content from "./components/content/content.tsx";
import Tab from "./components/tab/tab.tsx";

export class App extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {
       return <div>
            <div className="header-section">
                <ul className="clearfix">
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                    <Tab/>
                </ul>
            </div>
            <div className="clearfix content-wrapper">
                <div className="left-section fleft">
                    <ul>
                        <SideItem/>
                        <SideItem/>
                        <SideItem/>
                        <SideItem/>
                    </ul>
                </div>

                <div className="content-section fright">
                    <Content/>
                </div>
            </div>
       </div>
    }
}

function mapStateToProps(state) {
    return {
        data: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)