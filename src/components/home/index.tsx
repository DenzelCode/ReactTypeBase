import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/store';
import { PropBase } from '../../types';
import { Page } from './page';

type Props = PropBase<{

}, ReturnType<typeof mapStateToProps>, typeof mapDispatchToProps>;

class Home extends Component<Props, {}> {

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
    auth: state.auth
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Home);