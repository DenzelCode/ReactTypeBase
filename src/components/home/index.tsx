import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/store';
import { PropBase } from '../../types';
import { Page } from './page';

interface CustomProps {
	// Your props here.
}

interface State {
	// Your state here.
}

type Props = PropBase<CustomProps, ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps>;

class Home extends Component<Props, State> {
	componentDidMount() {
		if (!this.props.auth.logged) {
			this.props.history.replace('/');

			return;
		}
	}

	render() {
		return <Page user={this.props.auth.data} />;
	}
}

const mapStateToProps = (state: IAppState) => ({
	auth: state.auth,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
