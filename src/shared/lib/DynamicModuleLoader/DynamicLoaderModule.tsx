import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/StoreProvider/config/StateSchema';
import React, { useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
    [name in StateSchemaKey]?:Reducer
}
type ReducerListEntry = [StateSchemaKey, Reducer]

interface DynamicLoaderModuleProps {
  children : React.ReactNode
  reducers:ReducersList
  removeAfterUnmounte?:boolean
}

const DynamicLoaderModule = ({
    children, reducers, removeAfterUnmounte,
}: DynamicLoaderModuleProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });
        return () => {
            if (removeAfterUnmounte) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            { children }
        </>
    );
};

export default DynamicLoaderModule;
