import React from 'react';
import { Component } from 'react';
import { IUser } from '../../redux/reducers/auth';
import { Link } from 'react-router-dom';

type Props = {
	user: IUser;
};

export class Page extends Component<Props, {}> {
	render() {
		return (
			<div>
				<h1>Logged in as {this.props.user.username}</h1>
				<Link to="/logout">Logout</Link>
				<br />
				<Link to="/">Test logged in</Link>
			</div>
		);
	}
}
