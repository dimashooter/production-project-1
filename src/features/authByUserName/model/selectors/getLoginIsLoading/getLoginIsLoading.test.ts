import { StateSchema } from 'app/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoadingIsLoading.test.ts', () => {
    test('check is error true', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
    test('check is error false', () => {
        const state:DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });
});
