import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import User from "./components/dashboard/User";
import Det from './components/detilal/Det';
import Create from './components/dashboard/Create'
import "./App.css";
import Adddata  from './components/Schedule/Adddata'
import Home from "./components/layout/Home";
import { Wrapper} from './components/style/Navbar'
import GlobalFonts from './components/style/Navbar';
import Profile from './components/profile/profile';
import Search from './components/profile/Search'
import profile from "./components/profile/profile";
import Loction from "./components/profile/Loction";
import About from "./components/profile/About";
import NoMatch from "./components/profile/NoMatch";
import Sidebar from './components/profile/Sidebar'
import Storee from './components/profile/storee'
import Rest from './components/profile/Rest.js'
import grocery from './components/profile/grocery-stores'
import Merchenat from './components/auth/MercentLogin';
import Address from "./components/profile/Address";
import Checkout from "./components/checkout/Checkout";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <Wrapper>
     <GlobalFonts />
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Merchenat-login" component={Merchenat} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
            <PrivateRoute exact path="/loction" component={Loction} />
          </Switch>
            <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute exact path="/det" component={Det} />
          </Switch>
          <Switch>
          <PrivateRoute exact path="/create-profile" component={Create} />
        </Switch>
        <Switch>
        <PrivateRoute exact path="/:id/:id" component={Storee} />
      </Switch>
      <Switch>
      <PrivateRoute exact path="/:id/:id/:id" component={Rest} />
    </Switch>
        <Switch>
        <PrivateRoute exact path="/AddSchedule" component={Adddata} />
      </Switch>
      <Switch>
      <PrivateRoute exact path="/Home" component={Home} />
    </Switch>
    <Switch>
    <PrivateRoute exact path="/resturant/:id" component={User}/>
  </Switch>
  <Switch>
    <PrivateRoute exact path="/checkout" component={Checkout}/>
  </Switch>
 
  <Switch>
  <PrivateRoute exact path="/search" component={Search}/>
</Switch>
<Switch>
<PrivateRoute exact path="/profile" component={Profile}/>
</Switch>
<Switch>
          <PrivateRoute exact path="/grocery-stores" component={grocery} />
     
        </Switch>
          </div>
        </Router>
        </Wrapper>
      </Provider>
    );
  }
}
export default App;
