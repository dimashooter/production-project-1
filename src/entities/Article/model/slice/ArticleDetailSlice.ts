import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { articleDetailsSchema } from '../types/articleDetailSchema';

const initialState: articleDetailsSchema = {
    isLoading: false,
    data: undefined,
    error: undefined,
};
export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<Article>) => {
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action:PayloadAction<Article>) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchArticleById.rejected, (state, action:any) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },

});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailReducer } = articleDetailsSlice;
