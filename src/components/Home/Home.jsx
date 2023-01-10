import React, { useState, useEffect } from 'react'
import movieApi from '../../api/MovieApi'
import { APIKey } from '../../api/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovie } from '../../store/Reducer'
import './Home.scss'

// Components
import MovieListing from '../MovieListing/MovieListing'

function Home() {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchMovies = async () => {
            const searchKey = search ? search : "Thor";
            const resp = await movieApi.get(`?apikey=${APIKey}&s=${searchKey}&type=movie`)
                                       .catch((error) => {
                                            console.log(error)
                                       })
            setTimeout(() => {
                dispatch(addMovie(resp.data.Search))
            }, 500)
        }   
        
        fetchMovies();
    }, [search])

  return (
    <>
        <div>
            <h3 style={{ margin: "1rem 0"}}>Movies</h3>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <MovieListing />
    </>
  )
}

export default Home