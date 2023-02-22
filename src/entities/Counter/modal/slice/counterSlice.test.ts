import { counterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from './counterSlice';

describe('getCounter', () => {
    test('decrement', () => {
        const state : counterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state : counterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
});
