import { StateSchema } from 'app/StoreProvider';
import { validateProfileErrors } from '../../types/ProfileSchema';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidate errors', () => {
    test('should return validate error', () => {
        const state : DeepPartial<StateSchema> = {
            profile: {
                validateError: [validateProfileErrors.INCORRECT_AGE],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([validateProfileErrors.INCORRECT_AGE]);
    });
});
