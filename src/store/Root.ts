import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as Keychain from 'react-native-keychain';
import { ThemeType } from './types';

const storeCredentials = async (email: string, password: string) => {
    await Keychain.setGenericPassword(email, password);
};

const resetStoreCredentials = async () => {
    await Keychain.resetGenericPassword();
};

export const checkStoreCredentials = async (): Promise<boolean> => {
    try {
        const credentials = await Keychain.getGenericPassword();
        return typeof credentials !== "undefined";
    } catch (error) {
        return false;
    }
};

export interface RootState {
    isLogin: boolean;
    theme: ThemeType;
}

const initialState: RootState = {
    isLogin: false,
    theme: "light"
};

export const RootSlice = createSlice({
    name: 'RootSlice',
    initialState,
    reducers: {
        setLoginWithEmailPassword: (state, action: PayloadAction<{ email: string, password: string }>) => {
            storeCredentials(action.payload.email, action.payload.password);
            state.isLogin = true;
        },
        setLogout: (state) => {
            resetStoreCredentials();
            state.isLogin = false;
        },
        setTheme: (state, action: PayloadAction<ThemeType>) => {
            state.theme = action.payload;
        }
    },
});

export const { setLoginWithEmailPassword, setLogout, setTheme } = RootSlice.actions;