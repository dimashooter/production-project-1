import { StateSchema } from 'app/StoreProvider';
import { getProfileError } from '../getProfileLoading/getProfileLoading';

describe('getCounter', () => {
    test('should return error', () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                error: 'error message',
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual('error message');
    });
});
