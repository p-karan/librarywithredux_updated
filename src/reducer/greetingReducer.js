
var currentState={
    text:'Hello'
}

const greetingReducer = (currentState1=currentState,action) => {
   switch(action.type){

       case 'BIRTHDAY':
           return {...action}

       case 'WEDDINGDAY':
           return Object.assign({},action);

       default:
           return currentState1;
   }
}

export default greetingReducer;