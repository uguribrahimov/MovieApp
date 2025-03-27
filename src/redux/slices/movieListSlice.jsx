import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { API_MOVIE_LIST, API_KEY, API_MOVIE_SEARCH } from '../../constants/api'

const initialState = {
    movieList: [],
    status: 'idle',
    searchList: [],
    error: null,
}

export const getMovieList = createAsyncThunk('getMovieList', async () => {
    const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}`)
    return res.data.results;
})

export const getMovieListByGenre = createAsyncThunk('getMovieListByGenre', async (id) => {
    const res = await axios.get(`${API_MOVIE_LIST}?api_key=${API_KEY}&with_genres=${id}`)
    return res.data.results;
})


export const getMovieListBySearch = createAsyncThunk('getMovieListBySearch', async (inputValue) => {
    const res = await axios.get(`${API_MOVIE_SEARCH}?api_key=${API_KEY}&query=${inputValue}`)
    return res.data.results;
})


export const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {  
        builder.addCase(getMovieList.pending, (state, action) => {
            state.status = action.meta.requestStatus
        })
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.status = action.meta.requestStatus
            state.movieList = action.payload
        })
        builder.addCase(getMovieList.rejected, (state, action) => {
            state.status = action.meta.requestStatus
            state.error = action.error.message
        })
        builder.addCase(getMovieListByGenre.pending, (state, action) => {
            state.status = action.meta.requestStatus
        })
        builder.addCase(getMovieListByGenre.fulfilled, (state, action) => {
            state.status = action.meta.requestStatus
            state.movieList = action.payload
        })
        builder.addCase(getMovieListByGenre.rejected, (state, action) => {
            state.status = action.meta.requestStatus
            state.error = action.error.message
        })
        builder.addCase(getMovieListBySearch.pending, (state, action) => {
            state.status = action.meta.requestStatus
        })
        builder.addCase(getMovieListBySearch.fulfilled, (state, action) => {
            state.status = action.meta.requestStatus
            state.searchList= action.payload
        })
        builder.addCase(getMovieListBySearch.rejected, (state, action) => {
            state.status = action.meta.requestStatus
            state.error = action.error.message
        })
        
    }
})

export const { } = movieListSlice.actions

export default movieListSlice.reducer