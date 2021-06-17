import React, { Component } from 'react'
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import SignUp from './pages/Signup/Signup';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from "./pages/Login/login"
import Profile from "./pages/Profile/profile"
import Order from "./pages/Order/order"
import { connect } from "react-redux"

/**
 * Permisi Mas, maaf mas tidak mengumpulkan via github,
 * penjelasannya ada di README.md mas
 */

class App extends Component {
  constructor(props){
    super(props);
    this.state ={}
  }

  render(){
    // console.log(this.props.loginStat)
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/contact-us' component={ContactUs} />
          <Route exact path='/' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/profile' component={Profile} />
          <Route path='/order' component={Order} />
          <Route exact path="/*">
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps=state=>({
  loginStat: state.AuthStat.login_status
})

export default connect(mapStateToProps)(App);
