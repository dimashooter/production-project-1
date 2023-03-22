import { StateSchema } from 'app/StoreProvider';
import { Country } from 'entities/Country';
import { getProfileForm } from '../getProfileForm';

describe('getProfileForm', () => {
    test('should return Form data', () => {
        const data = {
            age: 26,
            country: Country.Ukraine,
            city: 'Mariupol',
        };
        const state : DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
});
