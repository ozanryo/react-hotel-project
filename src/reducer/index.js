import { combineReducers } from "redux";
import DataHotelReducer from "./DataHotelReducer";
import AuthReducer from "./AuthReducer"
import OrderReducer from "./OrderHotelReducer"
import SignUpReducer from "./SignupReducer";


const CompileReducer = combineReducers(
    {
        HotelData: DataHotelReducer,
        AuthStat: AuthReducer,
        StatusOrder: OrderReducer,
        SignupStat: SignUpReducer
    }
)

export default CompileReducer;