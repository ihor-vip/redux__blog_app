import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Max Payne'},
    {id: '1', name: 'John Snow'},
    {id: '2', name: 'Sarah Connor'}
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer