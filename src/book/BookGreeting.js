import React from 'react';
import ShowBook from "./showBook";
import {connect} from "react-redux";
//import greetingStore from "../store/greetingStore";
//import bookStore from "../store/greetingStore";
import myStore from "../store/greetingStore";
import bookCreator from "../action/bookActionCreator";

class BookGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
/*            payload:{
                bookNo: 101,
                bookName: 'HeadFirstJava'
            }
        };*/}
    }


    showJavaBook=()=>{
        var req=bookCreator('BESTJAVABOOK',{bookNo: 102,bookName: 'HeadFirstJava'});
        myStore.dispatch(req);
        //bookStore.dispatch({type:'BESTJAVABOOK',payload:{bookNo: 102,bookName: 'HeadFirstJava'}});
    }

    showSpringBook=()=> {
        var req = bookCreator('BESTSPRINGBOOK', {bookNo: 103,bookName: 'HeadFirstSpring'});
        myStore.dispatch(req);
        //bookStore.dispatch({type:'BESTSPRINGBOOK',payload:{bookNo: 103,bookName: 'HeadFirstSpring'}});
    }
    render() {
        return (
            <div>
                <p>{this.props.message.bookName}</p>
                <p>{this.props.message.bookNo}</p>
                <ShowBook text={'javaBook'} action={this.showJavaBook}/>
                <ShowBook text={'springBook'} action={this.showSpringBook}/>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    return{
        message:state.book.payload
    }
}
export default connect(mapStateToProps)(BookGreeting);