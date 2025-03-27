import React from 'react'
import { PiFilmReelFill } from "react-icons/pi";
import { TiHome } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchMovie from '../SearchMovie/searchMovie';
const Navbar = () => {

    const favoriteCounter = useSelector(store => store.favorites.favoriteMovies.length)

  return (
    <nav className="navbar">
        <div className="left">
            <Link to={"/"}>
                <h1>MovieApp</h1>
            </Link>
        </div>
        <div className="center">
            <PiFilmReelFill />
        </div>
        <div>
            <SearchMovie/>
        </div>
        <div className="right">
            <ul>
                <li>
                    <Link to="/">
                        <TiHome/>
                    </Link>
                </li>
                <li>
                    <Link to="/my-list">
                        <FaHeart/>
                        <div className='favorite-count'>{favoriteCounter}</div>
                    </Link>    
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar