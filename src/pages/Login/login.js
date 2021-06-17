import React, { Component } from 'react'
import {Button} from "../../components/Button"
import "./login.css"
import { Redirect } from 'react-router-dom';
import {connect} from "react-redux"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChangeUsername(event){
        this.setState({ username: event.target.value })
    }

    handleChangePassword(event){
        this.setState({ password: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();

        this.submitFunction(
            this.state.username,
            this.state.password
        );
    }

    submitFunction(inputUser, inputPassword){
        const loginData = {
            username:inputUser,
            password:inputPassword
        }

        console.log("Login User : ", loginData)
        // this.props.loginRespond(loginData)
        // this.props.setLoginStatus()
        this.fetchDataLogin("/login", "post", loginData)
        // this.props.setLoginStatus(loginData)
    }

    fetchDataLogin = (url, inputMethod, dataToObj) => {
        try{
            const option = {
                method: inputMethod,
                mode: "cors",
                headers:{ 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true 
                },
                body: JSON.stringify(dataToObj)
            }
    
            fetch("http://localhost:8887/web/hotel" + url, option)
                .then(response => response.json())
                .then(async json => {
                    console.log("Login Response : ", json);
                    this.props.setLoginStatus(json)
                })
                .catch(err => {this.props.setLoginStatus(err)})
        } catch (error) {
            if (error instanceof fetch.AbortError) {
                console.log("Request Was Aborted")
            }
        }
    }

    render(){
        if(this.props.loginStat){
            return <Redirect to="/home" />
        }
        return(
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
                }}
            >
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        <li><h1>WELCOME</h1></li>
                        <li><h2>Input Username</h2></li>
                        <li>
                            <input 
                            style={{
                                width:"300px", 
                                height:"40px",
                                borderRadius:"45px",
                                border:"1px solid"
                            }}
                            type="text"
                            placeholder="   Input Username   "
                            value={this.state.username}
                            onChange={this.handleChangeUsername}
                            />
                        </li>
                        <li><h2>Input Password</h2></li>
                        <li>
                            <input 
                            style={{
                                width:"300px", 
                                height:"40px",
                                borderRadius:"45px",
                                border:"1px solid"
                            }}
                            type="password"
                            placeholder="    Input Password   "
                            value={this.state.password}
                            onChange={this.handleChangePassword}
                            />
                        </li>
                        <li><Button>Login</Button></li>
                        <li>Don't have an account ? <a href="/signup">Register Now</a></li>
                    </ul>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    loginStat: state.AuthStat.login_status
})

const mapDispatchToProps=dispatch=>({
    setLoginStatus: (user) => dispatch({
            type:"LOGIN_OK",
            userData: user
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);