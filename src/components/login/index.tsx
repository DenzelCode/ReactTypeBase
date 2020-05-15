import React, { FormEvent, ChangeEvent, Component } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/store';
import { PropBase } from '../../types';
import { Page } from './page';
import { setData, setLogged } from '../../redux/actions/auth';

type Test = typeof mapStateToProps;

interface CustomProps {
	// Your props here.
}

type Props = PropBase<CustomProps, ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps>;

type State = {
	username: string;
	password: string;
};

class Login extends Component<Props, State> {
	constructor(props: any) {
		super(props);

		this.state = {
			username: '',
			password: '',
		};
	}

	componentDidMount() {
		if (this.props.auth.logged) {
			this.props.history.replace('/home');

			return;
		}
	}

	onChange = (e: ChangeEvent<HTMLInputElement>) => {
		this.setState({ [e.target.name]: e.target.value } as Pick<State, keyof State>);
	};

	onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		this.props.setLogged(true);

		this.props.setData({ username: this.state.username });

		this.props.history.push('/home');
	};

	render() {
		return (
			<Page
				username={this.state.username}
				password={this.state.password}
				onChange={this.onChange}
				onSubmit={this.onSubmit}
			/>
		);
	}
}

const mapStateToProps = (state: IAppState) => ({
	auth: state.auth,
});

const mapDispatchToProps = {
	setData,
	setLogged,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
