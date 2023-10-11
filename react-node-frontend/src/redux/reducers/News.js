const initialState = "health";
const initialState2 = null;

const newsFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "HANDLE_CATEGORY": return action.val;
        default: return state;
    }
}

const newsSourceReducer = (state = initialState2, action) => {
    switch (action.type) {

    case "HANDLE_SOURCE": return action.val;
    default: return state;
    }
}

export {newsSourceReducer}
export default newsFilterReducer;
