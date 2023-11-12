import { createSlice } from "@reduxjs/toolkit"

const initialState={
    posts: {},
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        getposts(state, action){
           state.posts = action.payload;
        },
    },
});

export default postSlice.reducer;

export function SetPosts(posts){
    return(dispatch, getState) => {
        dispatch(postSlice.actions.getposts(posts));
    };
}