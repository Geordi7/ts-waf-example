
import * as waf from 'ts-waf';

export type State = {
    name: string,
    cool: boolean,
    birthday: Date,
}

export const init = (): State => ({
    name: 'John',
    cool: false,
    birthday: new Date(1990,1,1),
});

export type View = waf.View<State>;
export type Content = waf.Content<State>;
export type StateEventTransition = waf.StateEventTransition<State>;
export const tag = waf.getTagFactory<State>();
export const tools = waf.getTools<State>();
