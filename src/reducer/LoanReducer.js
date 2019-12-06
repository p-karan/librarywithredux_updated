import React from 'react';

const initialState={
    isLoaded:false,
    custList:[{}]
}
const LoanReducer = (state=initialState,action) => {
    switch(action.type){
        case "GET_ALL_CUSTOMERS":
            return {...action}
        default:
            return state;
    }
}
export default LoanReducer;