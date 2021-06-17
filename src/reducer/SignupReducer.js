const initialState = {
    signupState: false
}

const SignUpReducer =(state=initialState, action)=>{
    // console.log("Render Hotel State :", state)
    // console.log("Render Hotel Action :", action)
    switch(action.type){
        case "SIGNUP_OK":
            return{
                signupState: true
            }
        case "SIGNUP_ERROR":
            return initialState
        default:
            return state
    }
}

export default SignUpReducer;