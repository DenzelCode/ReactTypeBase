import { Events } from './events';

const makeAction = <T extends Events, P>(type: T) => (payload: P) => {
    return {
        type,
        payload,
    };
};

export const setLogged = makeAction<Events.SET_LOGGED, number>(
    Events.SET_LOGGED
);

interface IStringMap<T> {
    [key: string]: T;
}

type AnyFunction = (...args: any[]) => any;

type IActionUnion<T extends IStringMap<AnyFunction>> = ReturnType<T[keyof T]>;

const actions = {
    setLogged,
};

export type IActions = IActionUnion<typeof actions>;
