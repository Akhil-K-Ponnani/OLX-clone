import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import './App.css';
import Home from './Pages/Home';
import Create from './Pages/Create';
import ViewPost from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './context/Context';
import Post from './context/PostContext' 

/**
 * ?  =====Import Components=====
 */

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user)=> {
      setUser(user)
    })
  }, [])
  return (
    <div>
      <Post>
      <Router>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
        <Route path='/view'>
          <ViewPost />
        </Route>
      </Router>
      </Post>
    </div>
  );
}

export default App;
