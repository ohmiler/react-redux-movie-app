import { createSlice, current } from "@reduxjs/toolkit"

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movieListing",
    initialState,
    reducers: {
        addMovie: (state, action) => {
            state.movies = action.payload
            console.log(current(state))
        }
    }
})

export const { addMovie } = movieSlice.actions
export default movieSlice.reducer