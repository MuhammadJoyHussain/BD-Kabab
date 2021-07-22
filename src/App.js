import axios from 'axios';
import firebase from "firebase/app";
import "firebase/auth";
import { initializeLoginFramework } from './Components/Login/LoginManager';
import './App.css';
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Booking from './Components/Booking/Booking/Booking';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AddReview from './Components/Dashboard/Review/AddReview/AddReview';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Menu from './Components/Menu/Menu/Menu';
import ManageHome from './Components/Admin/HomeComponents/ManageHome/ManageHome';
import ManageProducts from './Components/Admin/ManageProduct/ManageProducts/ManageProducts';
import OrderList from './Components/Admin/Orders/OrderList';
import ReviewList from './Components/Admin/Reviews/ReviewList/ReviewList';
import Admin from './Components/Admin/Admin/Admin';
import Career from './Components/Career/Career/Career';
import PrivateRoute from './Components/Shared/PrivateRoute/PrivateRoute';
import Forbidden from './Components/Shared/Forbidden/Forbidden';
import Orders from './Components/Dashboard/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  initializeLoginFramework();
  
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLoggedInUser(user)
      } else {
        setLoggedInUser({})
      }
      return () => {
        unsubscribe();
      }
    })
  }, [])

  useEffect(() => {
    axios.post(`https://bd-kebab-bangla.herokuapp.com/api/admins`, { email: loggedInUser.email })
      .then(res => setIsAdmin(res.data))
  }, [loggedInUser?.email]);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser, isAdmin]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/menu">
            <Menu />
          </Route>

          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path="/review">
            <AddReview />
          </PrivateRoute>

          <PrivateRoute path="/booking/:id">
            {isAdmin ? <Booking /> : <Forbidden />}
          </PrivateRoute>

          <PrivateRoute path="/admin">
            {isAdmin ? <Admin /> : <Forbidden />}
          </PrivateRoute>

          <PrivateRoute path="/updateHome">
            {isAdmin ? <ManageHome /> : <Forbidden />}
          </PrivateRoute>

          <PrivateRoute path="/manageProducts">
            {isAdmin ? <ManageProducts /> : <Forbidden />}
          </PrivateRoute>

          <PrivateRoute path="/reviews">
            {isAdmin ? <ReviewList /> : <Forbidden />}
          </PrivateRoute>

          <PrivateRoute path="/orderList">
            {isAdmin ? <OrderList /> : <Forbidden />}
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>

          <Route path="/career">
            <Career />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
