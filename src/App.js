import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./greeter/Greeting";
import BookGreeting from "./book/BookGreeting";
import Blogs from "./book/Blogs";
import LoanDetails from "./loan/LoanDetails";
import LoginForm from "./login/loginForm";
import LoginWithValidation from "./login/LoginWithValidation";
import axios from 'axios';
import AddLoanDetails from "./loan/AddLoanDetails";

/*const showDetails = (values)=>{
    console.log(values);
}*/

const showDetails = (values)=>{
    axios.post("http://localhost:9876/customer",values).then(resp=>{
    console.log(resp);
    console.log(resp.data);
    });
}

function App() {
  return (
    <div className="App">
      <header>
        <h2>React with redux example</h2>
      </header>
      <section>
        <Greeting></Greeting>
          <div>
            <BookGreeting></BookGreeting>
            <Blogs/>
            <LoanDetails></LoanDetails>
            {/*<LoginForm onSubmit={showDetails}/>*/}
            <LoginWithValidation onSubmit={showDetails}/>
            <AddLoanDetails onSubmit={showDetails}/>
          </div>
      </section>
    </div>
  );
}

export default App;
