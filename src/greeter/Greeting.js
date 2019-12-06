import React from 'react';
import ShowGreeting from "./showGreeting";

import {connect} from "react-redux";
//import greetingStore from "../store/greetingStore";
//import bookStore from "../store/greetingStore";
import myStore from "../store/greetingStore";
import Greetingactioncreator from "../action/greetingactioncreator";
class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}


    }

    showBirthday=()=>{
        var req=Greetingactioncreator('BIRTHDAY','Happy Birthday');
        myStore.dispatch(req);
        //greetingStore.dispatch({type:'BIRTHDAY',text:'Happy Birthday'});
    }

    showWeddingDay=()=>{
        //greetingStore.dispatch({type:'WEDDINGDAY',text:'Happy Wedding Day'});
        var req=Greetingactioncreator('WEDDINGDAY','Happy Wedding Day');
        myStore.dispatch(req);
    }

    render() {
        return (
            <div>
                <p>{this.props.message}</p>
                <ShowGreeting text={'Birthday'} action={this.showBirthday}/>
                <ShowGreeting text={'Weddingday'} action={this.showWeddingDay}/>
            </div>
        );
    }




}

const mapStateToProps=(state)=>{
    return{
      message:state.greet.text
      //message:state.payload
    }
}
export default connect(mapStateToProps)(Greeting);