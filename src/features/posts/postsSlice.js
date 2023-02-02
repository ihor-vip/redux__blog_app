import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1',
        title: 'Life is awesome',
        content: "There's more to life than stupid boys, you know"
    },
    {
        id: '2',
        title: 'Winter is coming...',
        content: "Don't call me Lord Snow"
    }
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }

})

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer