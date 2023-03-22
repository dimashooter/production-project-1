import { Profile, validateProfileErrors } from 'entities/Profile/modal/types/ProfileSchema';

export const validateProfileData = (profile?:Profile) => {
    if (!profile) {
        return [validateProfileErrors.NO_DATA];
    }
    const {
        age, first, lastname, country, username,
    } = profile;
    const errors: validateProfileErrors[] = [];
    if (!first || !lastname) {
        errors.push(validateProfileErrors.INCORRECT_USER_DATA);
    }
    if (!username) {
        errors.push(validateProfileErrors.INCORRECT_USERNAME);
    }
    if (!age || !Number.isInteger(age)) {
        errors.push(validateProfileErrors.INCORRECT_AGE);
    }
    if (age) {
        if (age > 100 || age < 10) {
            errors.push(validateProfileErrors.VALID_AGE);
        }
    }

    if (!country) {
        errors.push(validateProfileErrors.INCORRECT_COUNTRY);
    }
    return errors;
};
