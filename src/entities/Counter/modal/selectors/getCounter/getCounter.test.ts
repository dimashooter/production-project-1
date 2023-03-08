import { StateSchema } from 'app/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter value', () => {
        const state : DeepPartial<StateSchema> = {
            counter: { value: 10 },
            user: { authData: undefined },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
