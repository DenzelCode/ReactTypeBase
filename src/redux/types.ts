import { Events } from "./actions/events";

export interface IStringMap<T> {
    [key: string]: T;
}

export type AnyFunction = (...args: any[]) => any;

export type IActionUnion<T extends IStringMap<AnyFunction>> = ReturnType<T[keyof T]>;

export interface IAction {
    type: string;
    payload: any;
}

export const makeAction = <T extends Events, P>(type: T) => (payload: P) => {
    return {
        type,
        payload,
    };
};