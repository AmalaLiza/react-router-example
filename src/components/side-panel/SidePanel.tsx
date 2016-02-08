import * as React from 'react';
import SideItem from './SideItem.tsx';
import * as Actions from '../../actions.ts'
import {connect} from "react-redux";

export class SidePanel extends React.Component<any, any> {

    componentDidMount() {
        this.props.dispatch(Actions.loadUsers())
    }

    render() {
        let userListElements = this.props.usersList.map((user, index) => <SideItem
            key={index}
            userName={user.get('login')}
        />);

        return <ul>
            {userListElements}
        </ul>
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
)(SidePanel)