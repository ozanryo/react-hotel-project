import React, { Component } from 'react'
import "./Signup.css"
import {Button} from "../../components/Button"
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux"


class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
        name: "",
        phone: "",
        address: "",
        email: "",
        username: "",
        password: ""
    }

    // Handle Change
    this.handleChangeName = this.handleChangeName.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleChangeAlamat = this.handleChangeAlamat.bind(this)
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)

    // Handle Submit
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Handle Change
  handleChangeName = event => {
      this.setState({name:event.target.value})
  }
  handleChangePhone = event => {
      this.setState({phone:event.target.value})
  }
  handleChangeAlamat = event => {
      this.setState({address:event.target.value})
  }
  handleChangeEmail = event => {
    this.setState({email:event.target.value})
}
  handleChangeUsername = event => {
      this.setState({username:event.target.value})
  }
  handleChangePassword = event => {
      this.setState({password:event.target.value})
  }

  // Handle Submit
  handleSubmit = event => {
      event.preventDefault();

      this.SubmitRegisterFunction(
          this.state.name,
          this.state.phone,
          this.state.address,
          this.state.email,
          this.state.username,
          this.state.password
      )
  }

  // Submit Function
  SubmitRegisterFunction(inputName, inputPhone, 
    inputAddress, inputEmail, inputUsername, inputPassword){
    const newUser = {
        name: inputName,
        phone: inputPhone,
        address: inputAddress,
        email: inputEmail,
        username: inputUsername,
        password:inputPassword
    }

    console.log("New User : ", newUser);

    this.fetchDataRegister("/register", "post", newUser);

    this.props.changeRegStat();
    
  }

  fetchDataRegister = (url, inputMethod, dataToObj) => {
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
                console.log("Json : ", json);
                // this.props.fetchDataLogin(json)
                // const message = json;

                console.log("Message : ", json.message)
                alert("Selamat Anda " + json.message)
            })
    } catch (error) {
        if (error instanceof fetch.AbortError) {
            console.log("Request Hotel Data Was Aborted")
        }
    }
}

  render(){
    if(this.props.registerStat){
        return <Redirect to="/" />
    }
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '90vh'
        }}
      >
            <form className="userInput" 
            onSubmit={this.handleSubmit}
            >
                <div className="row-input">
                    <h1 style={{textAlign:"center"}}>SIGN TODAY FOR BETTER TRAVELLING EXPERIENCE</h1>
                </div>
                <div className="row-input">
                    <span className="label">Masukan Nama Lengkap: </span>
                    <input type="text" 
                    name="nameValue" 
                    placeholder="Nama Lengkap"
                    onChange={this.handleChangeName}
                    value={this.state.name}
                    />
                </div>

                <div className="row-input">
                    <span className="label">Masukkan Nomor Telepon : </span>
                    <input type="text" 
                    name="phoneValue" 
                    placeholder="Nomor Telepon"
                    onChange={this.handleChangePhone}
                    value={this.state.phone}
                    />
                </div>

                <div className="row-input">
                    <span className="label">Masukkan Alamat : </span>
                    <input type="text" 
                    name="addressValue" 
                    placeholder="Alamat Pengguna" 
                    onChange={this.handleChangeAlamat}
                    value={this.state.address}
                    />
                </div>

                <div className="row-input">
                    <span className="label">Masukkan Email : </span>
                    <input type="text" 
                    name="emailValue" 
                    placeholder="Email Pengguna" 
                    onChange={this.handleChangeEmail}
                    value={this.state.email}
                    />
                </div>

                <div className="row-input">
                    <span className="label">Masukkan Username : </span>
                    <input type="text" 
                    name="usernameValue" 
                    placeholder="Input Username"
                    onChange={this.handleChangeUsername}
                    value={this.state.username}
                    />
                </div>

                <div className="row-input">
                    <span className="label">Masukkan Password : </span>
                    <input type="password" 
                    name="passwordValue" 
                    placeholder="Input Password"
                    onChange={this.handleChangePassword}
                    value={this.state.password}
                    />
                </div>

                <div className="row-input">
                    <Button>Register</Button>
                </div>
            </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
    registerStat: state.SignupStat.signupState
})

const mapDispatchToProps = dispatch =>({
    changeRegStat: ()=>dispatch({
        type: "SIGNUP_OK"
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
