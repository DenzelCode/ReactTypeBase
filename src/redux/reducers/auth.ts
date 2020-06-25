import { IAction } from '../types';
import { Events } from '../actions/events';

export const defaultUser: IUser = {
    username: 'Guest',
};

const initialState: IState = {
    logged: false,

    data: defaultUser,
};

export interface IUser {
    username: string;
    [key: string]: any;
}

export interface IState {
    logged: boolean;

    data: IUser;
}

export default (state: any = initialState, action: IAction): IState => {
    switch (action.type) {
        case Events.SET_LOGGED:
            return { ...state, logged: action.payload };

        case Events.SET_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload
                }
            };

        default:
            return state;
    }
};
