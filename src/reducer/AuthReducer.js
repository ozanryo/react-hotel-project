const initialState = {
    userData: null,
    login_status: false
}

const AuthReducer = (state = initialState, action)=>{
    // console.log("Login State :", state)
    // console.log("Login Action :", action)
    switch(action.type){
        case "LOGIN_OK":
            return{
                userData: action.userData,
                login_status: true
            }
        case "LOGOUT_OK":
            return initialState;
        default:
            return state;
    }
}

export default AuthReducer;