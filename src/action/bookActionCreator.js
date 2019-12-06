import React from 'react';

const bookCreator = (actionType,reqObj) => {
    return {
        type: actionType,
        payload: reqObj
    }
}

export default bookCreator;