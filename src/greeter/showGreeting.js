import React from 'react';

const ShowGreeting = (props) => {
    return (
        <div>
            <button onClick={props.action}>{props.text}</button>
        </div>
    )
}


export default ShowGreeting;