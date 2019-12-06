import React from 'react';

const ShowLoanDetails = (props) => {
    return (
            props.data.map((eachElement,idx)=>{
                return(
                    <div key={idx}>
                        <p>{eachElement.loanId}</p>
                        <p>{eachElement.loanType}</p>
                        <p>{eachElement.openDate}</p>
                        <p>{eachElement.closingDate}</p>
                        <p>{eachElement.loanAmount}</p>
                    </div>
                )
            })
    )
}

export default ShowLoanDetails;