import React from 'react';

const LoanActionCreator = (list,status) => {
    return {

        type:"GET_ALL_CUSTOMERS",
        custList:list,
        isLoaded:status
    }

}

export default LoanActionCreator;