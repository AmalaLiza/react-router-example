import * as React from 'react';
import {Link} from 'react-router';

export default class Content extends React.Component<any, any> {
  render() {
    return <div className="content-section fright">
        <div className="content">
            <img src={this.props.contents.get('avatar_url')} width='102' height='102' />
            <h3>
                {this.props.contents.get('login')} {this.props.contents.get('name') && <span>({this.props.contents.get('name')})</span>}
            </h3>
            <Link to={`/blog`}>
                <div>Blog url: {this.props.contents.get('blog')}</div>
            </Link>
            <div>Company Name: {this.props.contents.get('company')}</div>
            <div> Email id: {this.props.contents.get('email')}</div>
        </div>
    </div>
  }
}