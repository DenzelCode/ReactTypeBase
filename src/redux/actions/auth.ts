import { Events } from './events';
import { IActionUnion, makeAction } from '../types';

export const setLogged = makeAction<Events.SET_LOGGED, boolean>(
    Events.SET_LOGGED
);

export const setData = makeAction<Events.SET_DATA, Object>(
    Events.SET_DATA
);

const actions = {
    setLogged,
    setData
};

export type IActions = IActionUnion<typeof actions>;
