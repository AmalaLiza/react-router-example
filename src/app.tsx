"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
/// <reference path="../typings/immutable/immutable.d.ts" />

import * as React from "react";
import * as Immutable from "immutable";
import {connect} from "react-redux";
import * as Actions from "./actions.ts";
import {bindActionCreators} from "redux";
import SidePanel from "./components/side-panel/SidePanel.tsx"
import Content from "./components/content/content.tsx";
import Tab from "./components/tab/tab.tsx";

export class App extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    render() {

        let {data, dispatch} = this.props;
        let usersList = data.get('usersList')
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
                    <SidePanel usersList={usersList}/>
                </div>
                {data.get('contents').size ? <Content contents={data.get('contents')}/> : null}
            </div>
       </div>
    }
}

function mapStateToProps(state) {
    return { data: state }
}

function mapDispatchToProps(dispatch) {
    return { dispatch : dispatch }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)