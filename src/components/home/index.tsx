import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/store';
import { Component } from 'react';
import { PropBase } from '../../types';
import { Page } from './page';

type Props = PropBase<{

}, ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps>>;

export class Home extends Component<Props, {}> {

    componentDidMount() {
        console.log(this.props.logged);
    }

    render() {
        return <Page />;
    }
}

const mapStateToProps = (state: IAppState) => ({
    logged: state.auth.logged,
    auth: state.auth
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Home);