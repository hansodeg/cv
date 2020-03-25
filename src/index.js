import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Card from "./components/Card";
import CardTwo from "./components/CardTwo";


const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Card/>
      <CardTwo/>
      
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

