import { StateSchema } from 'app/StoreProvider';
import { getProfileData } from '../getProfileError/getProfileError';

describe('getCounter', () => {
    test('should return profile data', () => {
        const data = {
            username: 'dima',
            lastname: 'Kranin',
        };
        const state : DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
});
