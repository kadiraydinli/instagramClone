import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { PostsSlice } from './Posts';
import { UserSlice } from './User';

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,
        posts: PostsSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;