import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Component/Home'
import Cart from './Component/Cart'
import store from './Redux/store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
    <Router>
    
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/shoppingportal' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>
    </Router>
    </Provider>
  )
}

export default App