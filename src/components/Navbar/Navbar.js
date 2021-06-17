import React, { Component } from 'react';
import { MenuItems } from "./MenuItems"
import { Button } from "../Button"
import { Link } from 'react-router-dom';
import './Navbar.css'
import {connect} from "react-redux"

class Navbar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><img src={require('../../assets/images/logo 1.png')} alt='logo' /></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        if(!this.props.loginStat){
                            if( item.title === "Login" || item.title === "Sign-Up"){
                                return (
                                        <li key={index}>
                                            <Link className={item.cName} to={item.url}>
                                                {item.title}
                                            </Link>
                                        </li>
                                )
                            }
                        } else {
                            if(item.title === "Home" || item.title === "Contact Us" || item.title === "Services" || item.title === "Profile")
                            return (
                                <li key={index}>
                                    <Link className={item.cName} to={item.url}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
        )
    }
}

const mapStateToProps=state=>({
    loginStat : state.AuthStat.login_status
})

export default connect(mapStateToProps)(Navbar)