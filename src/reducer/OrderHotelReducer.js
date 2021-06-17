const initialState = {
    orderData: null,
    orderStatus: false
}

const OrderReducer = (state = initialState, action)=>{
    // console.log("Login State :", state)
    // console.log("Login Action :", action)
    switch(action.type){
        case "ORDER_OK":
            return{
                orderData: action.orderData,
                orderStatus: true
            }
        case "ORDER_DONE":
            return initialState;
        default:
            return state;
    }
}

export default OrderReducer;