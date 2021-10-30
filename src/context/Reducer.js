import { Action } from "./Action"


export const Reducer = (state, action) =>{
switch (action.type) {
    case Action.LoaderOn:
        return {
            ...state,
            Loader:true
        }
        case Action.LoaderOff:
            return {
                ...state,
                Loader:false
            }
            case Action.loggedIn:
                return {
                    ...state,
                   user:action.payload
                }
                case Action.loggedOut:
                return {
                    ...state,
                   user:action.payload
                }
                case Action.loadingITems:
                    return {
                        ...state,
                       loader:true
                    }
                case Action.getItems:
                    return {
                        ...state,
                       location:action.payload,
                       loader:false
                    }
                
    default:
       return state
}
}