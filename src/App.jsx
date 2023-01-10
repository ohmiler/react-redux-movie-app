import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from './store/Store'
import { Provider } from 'react-redux'
import reactLogo from './assets/react.svg'
import './App.css'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie/:id' element={<MovieDetail />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App
