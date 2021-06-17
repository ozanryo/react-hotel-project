import React, { Component } from 'react'
import {connect} from "react-redux"
import {Button} from "../../components/Button"
import {Redirect} from "react-router-dom"

class Order extends Component{
    constructor(props){
        super(props);
        this.state={
            username: "",
            phone: "",
            hotel: "",
            date: "",
            duration:""
        }   

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePhone = this.handleChangePhone.bind(this)
        this.handleChangeHotel = this.handleChangeHotel.bind(this)
        this.handleChangeDate = this.handleChangeDate.bind(this)
        this.handleChangeBooking = this.handleChangeBooking.bind(this)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Handle Change
    handleChangeUsername = event => {
        this.setState({username:event.target.value})
    }
    handleChangePhone = event => {
        this.setState({phone:event.target.value})
    }
    handleChangeHotel = event => {
        this.setState({hotel:event.target.value})
    }
    handleChangeDate = event => {
        this.setState({date:event.target.value})
    }
    handleChangeBooking = event => {
        this.setState({duration:event.target.value})
    }

    // Handle Submit
    handleSubmit = event => {
        event.preventDefault();
        this.submitOrder(
            this.state.username,
            this.state.phone,
            this.state.hotel,
            this.state.date,
            this.state.duration
        )
    }

    submitOrder(inputUser, inputPhone, inputHotel, inputDate, inputBooking){
        console.log("Date : ", inputDate)
        
        const date = new Date(inputDate);
        console.log("tanggal : ", date)
        const bookDate = date.getDate();
        // console.log("tanggal 2 : ", date.getDate())
        // console.log("Book : ", bookDate)

        const registerOrder = {
            username: inputUser,
            phone: inputPhone,
            hotel: inputHotel,
            durasi: inputBooking,
            tanggalpesan: bookDate
        }

        console.log("Registered Order : ", registerOrder)
        this.fetchDataRegisterOrder("/order","post", registerOrder)
        this.props.doneOrderStat();

    }

    fetchDataRegisterOrder = (url, inputMethod, dataToObj) => {
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
    
                    // console.log("Message : ", json.message)
                    alert("Selamat Anda Sudah memesan, silahkan lunasi pembayaran")
                })
        } catch (error) {
            if (error instanceof fetch.AbortError) {
                console.log("Request Hotel Data Was Aborted")
            }
        }
    }


    getData(){
        this.setState(
            {
                username: this.props.orderan.username,
                phone: this.props.loginUser.phone,
                hotel: this.props.orderan.hotel,
            }
        )
    }

    componentDidMount(){
        this.getData();
    }
    

    render(){
        console.log("Data Order : ", this.props.orderStat)
        if(this.props.orderStat==false){
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
                    <div className="row-input">
                        <h1 style={{textAlign:"center"}}>BOOK HOTEL NOW</h1>
                    </div>

                    <div className="row-input">
                        <span className="label">Username : </span>
                        <input type="text" 
                        name="nameValue" 
                        placeholder="Nama Lengkap"
                        onChange={this.handleChangeUsername}
                        value={this.props.orderan.username}
                        />
                    </div>

                    <div className="row-input">
                        <span className="label">Nomor Telepon : </span>
                        <input type="text" 
                        name="phoneValue" 
                        placeholder="Nomor Telepon"
                        onChange={this.handleChangePhone}
                        value={this.props.loginUser.phone}
                        />
                    </div>

                    <div className="row-input">
                        <span className="label">Nama Hotel : </span>
                        <input type="text" 
                        name="hotelValue" 
                        placeholder="Alamat Pengguna" 
                        onChange={this.handleChangeHotel}
                        value={this.props.orderan.hotel}
                        />
                    </div>

                    <div className="row-input">
                        <span className="label">Masukkan Tanggal Booking : </span>
                        <input type="date" 
                        name="dateValue" 
                        onChange={this.handleChangeDate}
                        value={this.state.date}
                        />
                    </div>

                    <div className="row-input">
                        <span className="label">Durasi Booking (per malam) : </span>
                        <input type="numbers" 
                        name="bookValue" 
                        placeholder="Input lama booking"
                        onChange={this.handleChangeBooking}
                        value={this.state.duration}
                        />
                    </div>

                    <div className="row-input">
                        <Button>Order</Button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loginUser: state.AuthStat.userData,
    orderStat: state.StatusOrder.orderStatus,
    orderan: state.StatusOrder.orderData
})

const mapDispatchToProps = dispatch => ({
    doneOrderStat: ()=> dispatch({
        type: "ORDER_DONE"
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(Order);