import{
    OPEN_SIDEBAR,
    CLOSE_SIDEBAR
}from "../action.js"

const sidebar_reducer = (state, action) =>{
    if(action.type === OPEN_SIDEBAR){
        return {
            ...state,
            isSidebarOpen: true
        }
    }
    if(action.type === CLOSE_SIDEBAR){
        return{
            ...state,
            isSidebarOpen: false
        }
    }

    throw new Error(`No matching "${action.type}" - action type`);
}

export default sidebar_reducer;