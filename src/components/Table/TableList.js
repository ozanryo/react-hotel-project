import React, {Component} from 'react';
import "./Table.css"
import {Button} from "../Button"
import {connect} from "react-redux"

class BuildTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

    fetchDataHotel = (url, inputMethod) => {
        try{
            const option = {
                method: inputMethod,
                mode: "cors",
                headers:{ 
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin" : "*", 
                    "Access-Control-Allow-Credentials" : true 
                }
            }
    
            fetch("http://localhost:8887/web/hotel" + url, option)
                .then(response => response.json())
                .then(async json => {
                    console.log("Json : ", json);
                    
                    const listUser = await json.map(hotel => {
                        return {
                            id: hotel.id,
                            hotelName: hotel.name,
                            kota: hotel.kota,
                            jumlahKamar: hotel.kamar,
                            terpakai: hotel.terpakai,
                            tersedia: hotel.tersedia,
                            harga: hotel.harga,
                            imgurl: hotel.imglink
                        }
                    })
                    console.log("Data Hotel : ", listUser)
                    // this.props.HotelFetchData(json);
                    this.setState({ data: listUser })
                })
        } catch (error) {
            if (error instanceof fetch.AbortError) {
                console.log("Request Hotel Data Was Aborted")
            }
        }
      }
    
    componentDidMount(){
        this.fetchDataHotel("/list", "get")
    }

    // shouldComponentUpdate(NextProps, NextState){
    //     console.log("Next Props : ", NextProps)
    //     console.log("Next State : ", NextState)
    //     if (NextProps.value !== this.props.value) {
    //         return true;
    //     }
    //     return false;
    // }

    ambilData(){
        return this.state.data.map((user, index) => {
            return(
                <tr key={index}>
                    <td>
                        {user.id}
                    </td>
                    <td style={{padding: "30px"}}>
                        <ul>
                            <li>
                                <img src={user.imgurl} 
                                width={"550px"}
                                height={"250px"}
                                />
                            </li>
                        </ul>
                    </td>
                    <td style={{paddingLeft:"40px"}}>
                        <ul>
                            <li><h2>{user.hotelName}</h2></li>
                            <li><a>Kota : {user.kota}</a></li>
                            <li><a>Jumlah Kamar : {user.jumlahKamar}</a></li>
                            <li><a>Kamar Terpakai : {user.terpakai}</a></li>
                            <li><a>Kamar Tersedia : {user.tersedia}</a></li>
                            <li><a>Harga : {user.harga}</a></li>
                            <li>
                                <Button onClick={() => this.orderHotel(index)}>
                                    Order
                                </Button>
                                {/* <button onClick={() => this.orderHotel(user.id)}>Order</button> */}
                            </li>
                        </ul>
                    </td>
                </tr>
            )
        })
    }

    orderHotel(index){
        console.log("Order Hotel : ", index)
        console.log("Hotel Choosen : ", this.state.data[index])
        console.log("Name Hotel Choosen : ", this.state.data[index].hotelName)
        console.log("Nama Username : ", this.props.userDataStat)
        
        const orderData = {
            username: this.props.userDataStat.username,
            hotel: this.state.data[index].hotelName
        }

        this.props.setOrder(orderData)

        console.log("Data Orderan : ", this.props.orderStat)
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th width={"50px"}>No. </th>
                        <th width={"500px"}>NAMA HOTEL</th>
                        <th width={"400px"}>KETERANGAN</th>
                    </tr>
                </thead>
                <tbody>
                    {this.ambilData()}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps=state=>({
    userDataStat: state.AuthStat.userData,
    orderStat: state.StatusOrder.orderStatus
})

const mapDispatchToProps=dispatch=>({
    setOrder: (dataOrder)=>dispatch({
                type: "ORDER_OK",
                orderData: dataOrder
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(BuildTable);