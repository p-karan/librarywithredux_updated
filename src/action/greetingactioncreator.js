import React from 'react';

const greetingCreator = (actionType,reqtext) => {
    return {
        type: actionType,
        text: reqtext
    }
}

export default greetingCreator;