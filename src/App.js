import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from "./greeter/Greeting";
import BookGreeting from "./book/BookGreeting";
import Blogs from "./book/Blogs";
import LoanDetails from "./loan/LoanDetails";

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
          </div>
      </section>
    </div>
  );
}

export default App;
