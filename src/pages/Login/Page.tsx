import React, { ChangeEvent, FormEvent, Fragment } from 'react';
import { defaultUser } from '../../redux/reducers/auth';
import './style.scss';

type Props = {
	username: string;
	password: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export const Page: React.FC<Props> = ({ username, password, onChange, onSubmit }) => {
	return (
		<Fragment>
			<h1>Welcome {username && username.length > 0 ? username : defaultUser.username}</h1>
			<form onSubmit={onSubmit}>
				<label htmlFor="username">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					onChange={onChange}
					value={username}
				/>
				<label htmlFor="password">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={onChange}
					value={password}
				/>
				<button type="submit">Login</button>
			</form>
		</Fragment>
	);
};
