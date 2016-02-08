import * as React from 'react';
import * as Actions from '../../actions.ts';
import {connect} from "react-redux";
import {Link} from 'react-router';

export class SideItem extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.context.history.pushState(null, `/${this.getInputValue()}`);
    }

    showUserDetails(){
        this.props.dispatch(Actions.getUserDetails(this.props.userName))
    }

    render() {
        return <Link to={`/${this.props.userName}`}>
            <li onClick={() => {this.showUserDetails(this.props.userName)}}>
                <span>
                    {this.props.userName}
                </span>
            </li>
        </Link>
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
)(SideItem)