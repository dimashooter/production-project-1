import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('return current value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
