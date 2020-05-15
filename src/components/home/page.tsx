import React from 'react';
import { IUser } from '../../redux/reducers/auth';
import { Link } from 'react-router-dom';

type Props = {
	user: IUser;
};

export const Page: React.FC<Props> = ({ user }) => {
	return (
		<div>
			<h1>Logged in as {user.username}</h1>
			<Link to="/logout">Logout</Link>
			<br />
			<Link to="/">Test logged in</Link>
		</div>
	);
};
