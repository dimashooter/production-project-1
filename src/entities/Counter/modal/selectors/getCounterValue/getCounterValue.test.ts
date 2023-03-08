import { StateSchema } from 'app/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    test('return current value', () => {
        const state:DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
            user: { authData: undefined },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
