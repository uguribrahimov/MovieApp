import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import MyList from './Pages/MyList/MyList'
import MovieDetail from './Pages/MovieDetail/MovieDetail'

import { HOME, MY_LIST, MOVIE_DETAIL } from './constants/path'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={MY_LIST} element={<MyList />} />
        <Route path={MOVIE_DETAIL} element={<MovieDetail />}/>
      </Routes>
    </div>
  )
}

export default App
