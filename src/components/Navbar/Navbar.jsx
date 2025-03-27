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
            <div className="navbar__left">
                <Link to={"/"}>
                    <h1 className="navbar__logo">MovieApp</h1>
                </Link>
            </div>
            
            <div className="navbar__center">
                <PiFilmReelFill className="navbar__reel-icon" />
            </div>
            
            <div className="navbar__search">
                <SearchMovie/>
            </div>
            
            <div className="navbar__right">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">
                            <TiHome className="navbar__icon"/>
                        </Link>
                    </li>
                    <li className="navbar__item navbar__favorites">
                        <Link to="/my-list" className="navbar__link">
                            <FaHeart className="navbar__icon"/>
                            <span className='navbar__favorite-count'>{favoriteCounter}</span>
                        </Link>    
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar