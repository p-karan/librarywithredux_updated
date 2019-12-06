import React from 'react';
import {connect} from "react-redux";
import getAllCustomers from "../thunk/fetchCustomers";
import ShowLoanDetails from "./ShowLoanDetails";

class LoanDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }


/*    render(){
        return(
            <div>
                <p>currentStatus: {this.props.status}</p>
                <button onClick={this.props.getAll}>{"Get All"}</button>
                {this.props.list[0].loanId}
                {this.props.list[0].loanType}
                {this.props.list[0].openDate}
                {this.props.list[0].closingDate}
                {this.props.list[0].loanAmount}


            </div>
        )


    }*/
   render() {
                if (!this.props.status) {
                    return(
                        <div>
                            <button onClick={this.props.getAll}>Show Loan Details</button>
                        </div>
                    )
                }else{
                    return(
                        this.props.list.map(eachValue=>{
                            return (
                                    <div key={eachValue.loanId}>
                                            <span>
                                                <p>Id: {eachValue.loanId}</p>
                                                <p>Type: {eachValue.loanType}</p>
                                                <p>OpenDate: {eachValue.openDate}</p>
                                                <p>CloseDate: {eachValue.closingDate}</p>
                                                <p>LoanAmount: {eachValue.loanAmount}</p>
                                            </span>
                                    </div>
                            )
                        }
                        )
                    )
                }
   }


}


const mapStateToProps=(state)=>{
    console.log(state);
    return{
        list:state.loan.custList,
        status:state.loan.isLoaded
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        getAll:()=>{dispatch(getAllCustomers())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoanDetails);