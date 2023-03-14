import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isSearch: false,
    value: "",
};

const searchSlice = createSlice({
    name: "searchSlice",
    initialState,
    reducers: {
        search: (state, action) => {
            state.isSearch = true;
        },
        unSearch: (state, action) => {
            state.isSearch = true;
        },

        changeValueSearch: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { search, unSearch, changeValueSearch } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;