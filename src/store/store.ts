import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { PostsSlice } from './Posts';
import { RootSlice } from './Root';
import { UserSlice } from './User';

const rootReducer = combineReducers({
    root: RootSlice.reducer,
    user: UserSlice.reducer,
    posts: PostsSlice.reducer,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    whiteList: ["root"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;