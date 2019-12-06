import React from 'react';

const ShowBook = (props) => {
    return (
        <div>
            <button onClick={props.action}>{props.text}</button>
        </div>
    )
}


export default ShowBook;