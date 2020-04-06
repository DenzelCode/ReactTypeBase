import { IAction } from '../types';
import { Events } from '../actions/events';

const initialState: IState = {
    logged: false,

    data: {
        username: 'Guest',
    },
};

export interface IState {
    logged: boolean;

    data: {};
}

export default (state: any = initialState, action: IAction): IState => {
    switch (action.type) {
        case Events.SET_LOGGED:
            return { ...state, logged: state.payload };

        default:
            return state;
    }
};
