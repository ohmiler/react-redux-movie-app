import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./Reducer";

export default configureStore({
    reducer: {
        movies: movieSlice
    }
})