
const initialState = {
    saved:[] , 
    data:[] ,
    show:false
}
export const rootReducer = (state = initialState , action)=>{
    switch(action.type){
        case "ADD_VIDEO":
            return Object.assign({} , state ,{saved:[...state.saved ,action.payload.video]});

        case "LOADED_VIDEOS" :
            return Object.assign({} , state ,{data:[...action.payload]});

        case "LOADED_FROM_STORAGE":
            return Object.assign({} , state ,{data:[...state.saved ,...action.payload]});
            
        case "CHECKED_STORAGE":
            return Object.assign({} , state ,{saved:[...state.saved ,...action.payload]});

        case "HIDE_MESSAGE":
            return Object.assign({} , state ,{show:false});

        case "SHOW_MESSAGE":
            return Object.assign({} , state ,{show:true , ...action.payload});

        default : return state
    }
}

export default rootReducer