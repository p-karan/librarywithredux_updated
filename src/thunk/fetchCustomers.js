import React from 'react';
import axios from 'axios';
import LoanActionCreator from "../action/LoanActionCreator";

const url="http://localhost:9876/customer";

function getAllCustomers(){
    return function(dispatch){
        return axios.get(url).then(resp=>{
            const data=resp.data;
            console.log(data);
            dispatch(LoanActionCreator(data,true))
        });
    }

}

export default getAllCustomers;