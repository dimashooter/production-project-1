import { ReducersMapObject } from '@reduxjs/toolkit';
import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/StoreProvider';
import { LoginReducer } from 'features/authByUserName';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicLoaderModule';

const defaultAsyncReducers: ReducersList = {
    loginForm: LoginReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?:DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComponent : Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
