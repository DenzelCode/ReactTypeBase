import { createStore, combineReducers } from 'redux';
import auth from './reducers/auth';

const reducer = combineReducers({
    auth,
});

export type IAppState = ReturnType<typeof reducer>;

export const store = createStore(reducer);
