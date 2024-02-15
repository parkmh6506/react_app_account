// import { useState } from 'react';
import { Component } from "react";
import "./App.css";
import ExForm from "./ExForm";
import ExList from "./ExList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expenses: [
        { id: 1, charge: "스파게티 면", amount: 5500 },
        { id: 2, charge: "토마토 소스", amount: 8300 },
        { id: 3, charge: "양파 1망", amount: 3500 },
      ],
    };
  }
  handleDelete = (id) => {
    const newExpenses = this.state.expenses.filter(
      (expense) => expense.id !== id
    );
    console.log(newExpenses);
    this.setState({expenses: newExpenses});
  };
  render() {
    return (
      <div className="App">
        <h1>스파게티 장보기</h1>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "10px",
            marginBottom: "10px",
          }}
        >
          <ExForm />
        </div>
        <div
          style={{
            width: "100%",
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "10px",
          }}
        >
          <ExList
            initialExpenses={this.state.expenses}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default App;
