import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../redux/store';
import { PropBase } from '../types';
import { setLogged, setData } from '../redux/actions/auth';
import { defaultUser } from '../redux/reducers/auth';

type Props = PropBase<{}, ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps>;

class Logout extends Component<Props, {}> {
	componentDidMount() {
		if (this.props.auth.logged) {
			this.props.setLogged(false);
			this.props.setData(defaultUser);

			this.props.history.push('/');

			return;
		}

		this.props.history.replace('/');
	}

	render() {
		return <div>Logging out!</div>;
	}
}

const mapStateToProps = (state: IAppState) => ({
	auth: state.auth,
});

const mapDispatchToProps = {
	setLogged,
	setData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
