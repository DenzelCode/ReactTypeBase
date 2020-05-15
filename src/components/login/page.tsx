import React, { ChangeEvent, FormEvent, Fragment } from 'react';
import { Component } from 'react';
import './style.scss';
import { defaultUser } from '../../redux/reducers/auth';

type Props = {
	username: string;
	password: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export class Page extends Component<Props, {}> {
	render() {
		return (
			<Fragment>
				<h1>
					Welcome{' '}
					{this.props.username.length > 0 ? this.props.username : defaultUser.username}
				</h1>
				<form onSubmit={this.props.onSubmit}>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="username"
						id="username"
						onChange={this.props.onChange}
						value={this.props.username}
					/>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						onChange={this.props.onChange}
						value={this.props.password}
					/>
					<button type="submit">Login</button>
				</form>
			</Fragment>
		);
	}
}
