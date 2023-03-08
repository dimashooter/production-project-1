import { LoginSchema } from '../types/LoginSchema';
import { LoginActions, LoginReducer } from './loginSlice';

describe('LoginSlice.test.ts', () => {
    test('', () => {
        const state:DeepPartial<LoginSchema> = {
            userName: '123',
        };
        expect(LoginReducer(state as LoginSchema, LoginActions.setUsername('123123'))).toStrictEqual({ userName: '123123' });
    });
    test('', () => {
        const state:DeepPartial<LoginSchema> = {
            password: '123',
        };
        expect(LoginReducer(state as LoginSchema, LoginActions.setPassword('123123'))).toStrictEqual({ password: '123123' });
    });
});
