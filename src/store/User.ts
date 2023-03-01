import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'api/api';
import { StatusType } from './types';

export const fetchUserById = createAsyncThunk('users/fetchById', async (userId: string) => {
    const response = await axios.get(`${API_URL}/users/${userId}`);
    return response.data;
});

export interface User {
    id: string;
    username: string;
    name: string;
    avatar: string;
    createdAt: string | null;
}

export interface UserState {
    status: StatusType;
    user: User | null;
    error: string | null;
}

const initialState: UserState = {
    status: "idle",
    user: null,
    error: "",
};

export const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserById.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.status = 'idle';
                state.user = action.payload;
            })
            .addCase(fetchUserById.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || '';
            });
    },
});