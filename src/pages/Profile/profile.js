import React, { Component } from 'react'
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom';
import "./profile.css"
import {Button} from "../../components/Button"

class Profile extends Component {

    logoutUser(){
        this.props.setLogoutStatus()
        this.fetchDataLogout("/login", "post", this.props.userProfile)
    }

    fetchDataLogout = (url, inputMethod, dataToObj) => {
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
                    // this.props.setLoginStatus(json)
                })
                .catch(err => {this.props.setLoginStatus(err)})
        } catch (error) {
            if (error instanceof fetch.AbortError) {
                console.log("Request Was Aborted")
            }
        }
    }

    render(){
        if(!this.props.loginStat){
            return <Redirect to="/" />
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
                <ul>
                    <li><h1>Profile Page</h1></li>
                    <li>
                        <table>
                            <thead>
                                <tr>
                                    <th><h2>Avatar</h2></th>
                                    <th><h2>Your Profile</h2></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img 
                                        src={this.props.userProfile.avatar} 
                                        width={"200px"}
                                        height={"200px"}
                                        />
                                    </td>
                                    <td>
                                        <ul>
                                            <li>Name : {this.props.userProfile.name}</li>
                                            <li>Username : {this.props.userProfile.username}</li>
                                            <li>Email : {this.props.userProfile.email}</li>
                                            <li>Phone : {this.props.userProfile.phone}</li>
                                            <li>Address : {this.props.userProfile.address}</li>
                                            <li><Button onClick={()=>this.logoutUser()}>Logout</Button></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginStat: state.AuthStat.login_status,
    userProfile: state.AuthStat.userData
})

const mapDispatchToProps=dispatch=>({
    setLogoutStatus: () => dispatch({
            type:"LOGOUT_OK"
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);