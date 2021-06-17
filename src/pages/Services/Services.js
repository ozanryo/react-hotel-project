import React, { Component } from 'react'
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom';

class Services extends Component {
  render(){
    if(!this.props.loginStat){
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
        <h1>Services</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loginStat: state.AuthStat.login_status
})

export default connect(mapStateToProps)(Services);
