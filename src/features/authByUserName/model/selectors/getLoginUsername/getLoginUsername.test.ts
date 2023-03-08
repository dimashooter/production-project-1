import { StateSchema } from 'app/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('check username', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                userName: 'admin',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('admin');
    });
});
