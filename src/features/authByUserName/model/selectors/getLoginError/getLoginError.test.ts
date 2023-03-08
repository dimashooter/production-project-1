import { StateSchema } from 'app/StoreProvider';
import { getLoginError } from './getLoginError';

describe('getLoginUsername.test', () => {
    test('check is error', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
            user: { authData: undefined },

        };
        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
    test('no error', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                error: '',
            },
        };
        expect(getLoginError(state as StateSchema)).toEqual('');
    });
});
