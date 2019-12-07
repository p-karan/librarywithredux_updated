import React from 'react';
const Validate = (values) => {
    var errors={};

    /*    if(!values.userName){ errors.userName='Required'}
    else if(values.userName.length<3|| values.userName.length>10){
        errors.userName="Username should be more than 2 chars and less than 11";
    }*/


    if(!values.loanId){errors.loanId = 'Required'}
    else if(!values.loanType){errors.loanType = 'Required'}
    else if(!values.loanAmount){errors.loanAmount = 'Required'}
    else if(!values.openDate){errors.openDate = 'Required'}
    else if(!values.closingDate){errors.closingDate = 'Required'}
    else if(values.openDate < Date){errors.openDate ='Open Date should not be less than todays date.'}
    else if(values.closingDate === values.openDate){errors.closingDate = 'Close Date should be greater than Open Date'}

    return errors;
}

export default Validate;