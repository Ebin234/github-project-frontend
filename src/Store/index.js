import {configureStore,createAsyncThunk,createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../Utils/Constants"

const initialState = {
    userData: {},
    dataLoaded: false,
    userRepositories: []
};

export const getUserData = createAsyncThunk("github/userData",async(username)=>{
    try{
    const {data} = await axios.get(`${BASE_URL}/${username}`)
    return data
    }catch(error){
        const data = error.response.data;
        return data
    }
})

export const getUserRepositories = createAsyncThunk("github/userRepositories",async({page,username})=>{
    try{
    const {data} = await axios.get(`${BASE_URL}/repositories/${username}/${page}`)
    return data
}catch(error){
        const data = error.response.data;
        return data
}
})


const GithubSlice = createSlice({
    name: "Github",
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(getUserData.fulfilled,(state,action)=>{
            state.userData = action.payload;
            state.dataLoaded = true;
        })
        builder.addCase(getUserRepositories.fulfilled,(state,action)=>{
            state.userRepositories = action.payload;
        })
    }
});

export const store = configureStore({
    reducer:{
        github: GithubSlice.reducer,
    }
});