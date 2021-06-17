import React, { Component } from 'react'
import './Home.css'
import logo from '../../assets/images/home.png'
import BuildTable from "../../components/Table/TableList";
import {connect} from "react-redux"
import { Redirect } from 'react-router-dom';

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={}
  }

  render(){
    // console.log("Condition: ", this.props.loginStat)
    if(this.props.orderStat != false){
      return <Redirect to="/order" />
    }
    return (
      <div className="hero-content">
          <BuildTable />
      </div>
    )
  }
}


const mapStateToProps = state => ({
  loginStat: state.AuthStat.login_status,
  orderStat: state.StatusOrder.orderStatus
})

export default connect(mapStateToProps)(Home);
