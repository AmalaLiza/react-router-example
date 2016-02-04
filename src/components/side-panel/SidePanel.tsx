import * as React from 'react';
import SideItem from './SideItem.tsx';

export default class SidePanel extends React.Component<any, any> {
    render() {
        let userListElements = this.props.usersList.map((user, index) => <SideItem
            key={index}
            userName={user.get('login')}/>);

        return <ul>
            {userListElements}
        </ul>
    }
}