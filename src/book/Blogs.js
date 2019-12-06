import React from 'react';
import {connect} from "react-redux";

const Blogs = (props) => {
    return (
        <div>
            <h2>{"Blogs"}</h2>
            <h3>{props.message}</h3>
        </div>
    );
}
const mapStateToProps=(state)=>{
    return{
        message:state.greet.text
    }
}
export default connect(mapStateToProps)(Blogs);