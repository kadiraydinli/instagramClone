import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    videoVolumeLevel: number;
    viewablePostID: string;
}

const initialState: UIState = {
    videoVolumeLevel: 0,
    viewablePostID: ""
};

export const UISlice = createSlice({
    name: 'UISlice',
    initialState,
    reducers: {
        setVideoVolumeLevel: (state, action: PayloadAction<number>) => {
            state.videoVolumeLevel = action.payload;
        },
        setViewablePostID: (state, action: PayloadAction<string>) => {
            state.viewablePostID = action.payload;
        }
    },
});

export const { setVideoVolumeLevel, setViewablePostID } = UISlice.actions;