import React, { Dispatch } from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../../redux/store';
import { Component } from 'react';
import { PropBase } from '../../types';

type Props = PropBase<{

}, ReturnType<typeof mapStateToProps>, ReturnType<typeof mapDispatchToProps>>;

export class Login extends Component<Props, {}> {

    render() {
        return <div>
            {this.props.logged}
        </div>;
    }
}

const mapStateToProps = (state: IAppState) => ({
    logged: state.auth.logged,
    userData: state.auth.data
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Login);