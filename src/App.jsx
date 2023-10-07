import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './Components/Home';
// import UserListiing from './Components/UserListing';
import Updateuser from './Components/UpdateUser';
import Header from './Components/Header';
import { ToastContainer } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import UserListing from './Components/UserListing';
import AddUser from './Components/UserAdd';
import UpdateUser from './Components/UpdateUser';




const App = () => {
  return (
    <Provider store={Store}>
        <div className='App'>
      <Router>
        <Header/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/user' element={<UserListing/>}/>
           <Route path='/useradd' element={<AddUser/>}/>
           <Route path='/userupdate/:code' element={<UpdateUser/>}/>
        </Routes>
    </Router>
    <ToastContainer 
    className='toast-postion' position='bottom-right'></ToastContainer>

    </div>
    </Provider>
    
      )
}

export default App