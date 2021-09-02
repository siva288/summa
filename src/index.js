import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Createexercise from './Createexercise';
import Createuser from './Createuser'; 
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Edit from "./Edit";
ReactDOM.render(
    <Router>
      <Route exact path="/" component={App}/>
      <Route exact path="/createExercise" component={Createexercise}/>
      <Route exact path="/createuser" component={Createuser}/>
      <Route exact path="/edit/:id" component={Edit}></Route>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
