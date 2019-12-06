import React from 'react';

var defaultBook={
    payload:{
        bookNo: 101,
        bookName: 'HeadFirstJava'
    }
}

const BookReducer = (currentState=defaultBook,action) => {
        switch(action.type){
            case 'BESTJAVABOOK':
                return {...action};

            case 'BESTSPRINGBOOK':
                return {...action};

            default:
                return currentState;
        }
}

export default BookReducer;