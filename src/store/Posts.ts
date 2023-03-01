import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from 'api/api';
import { User } from './User';
import { Media, StatusType } from './types';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
});

export interface PostState {
    id: string;
    user: User;
    likeCount: number;
    commentCount: number;
    description: string;
    media: Media[];
    createdAt: string;
}

export interface PostsState {
    status: StatusType;
    items: PostState[];
    error: string | null;
}

const initialState: PostsState = {
    status: "idle",
    items: [],
    error: null
};

export const PostsSlice = createSlice({
    name: 'PostsSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'idle';
                state.items = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || '';
            });
    },
});