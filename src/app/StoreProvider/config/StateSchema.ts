import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { counterSchema } from 'entities/Counter';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/authByUserName';
import { NavigateOptions, To } from 'react-router-dom';
import { AxiosInstance } from 'axios';
import { articleDetailsSchema } from 'entities/Article';

export interface StateSchema {
  counter: counterSchema,
  user:UserSchema,
  // async
  profile?:ProfileSchema
  loginForm?:LoginSchema
  articleDetails?:articleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap : () => ReducersMapObject<StateSchema>;
  reduce: (state:StateSchema, action:AnyAction) => CombinedState<StateSchema>;
  add:(key:StateSchemaKey, reducer:Reducer) => void
  remove: (key:StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager : ReducerManager
}

export interface thunkExtraArg {
    api: AxiosInstance,
    navigate?:(to: To, options?: NavigateOptions) => void,
}
export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state:StateSchema
}
