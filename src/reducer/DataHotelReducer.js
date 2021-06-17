const initialState = {
    hotel: null,
    error: ""
}

const DataHotelReducer =(state=initialState, action)=>{
    // console.log("Render Hotel State :", state)
    // console.log("Render Hotel Action :", action)
    switch(action.type){
        case "FETCH_DATA_HOTEL":
            return{
                ...state,
                hotel: action.hotel
            }
        case "ERROR_FETCH_HOTEL":
            return{
                ...state,
                err: action.message
            }
        default:
            return state
    }
}

export default DataHotelReducer;