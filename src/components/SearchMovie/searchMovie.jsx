import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieListBySearch } from '../../redux/slices/movieListSlice';
import './SearchMovie.css';
import { useNavigate } from 'react-router-dom';
import { API_KEY, API_MOVIE_DETAIL } from '../../constants/api';

const SearchMovie = () => {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const { searchList } = useSelector((store) => store.movieList);
    const navigate = useNavigate()
    

    useEffect(() => {
        if (inputValue.trim() === "") return;
        dispatch(getMovieListBySearch(inputValue));
    }, [inputValue, dispatch]);
    

    
    return (
        <div className="search-container">
            <input 
                className="search-input"
                onChange={(e) => setInputValue(e.target.value)} 
                value={inputValue} 
                type="text" 
                placeholder="Film search..." 
            />
            <div className={`search-dropdown ${inputValue.length > 0 ? "show" : ""}`}>
                {searchList.map(movie => (
                    <div onClick={() => { navigate(`/${movie.id}`), setInputValue("")}} key={movie.id} className="search-item">
                        {movie.title}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchMovie;
