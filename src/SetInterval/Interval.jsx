import React, { Component } from 'react'
import "./Interval.css";
import image1 from "../img/penseur.jpg";



export default class Interval extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: null };
  }

  render() {
    if (this.state.counter) {
      return (
        <div
         
        >
          <Counter
            counter={this.state.counter}
            onExit={() => this.setState({ counter: null })}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h4>how number like for this Job</h4>
          <button onClick={() => this.setState({ counter: "simplest" })}>
            Simplest
          </button>
          <br />
          <button onClick={() => this.setState({ counter: "double" })}>
            Double
          </button>
          <br />
        </div>
      );
    }
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.number, this.props.counter);
      if (this.props.counter === "double") {
        this.setState({ number: this.state.number + this.state.number });
      } else {
        this.setState({ number: this.state.number + 1 });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.props.onExit}>Exit</button>
      </div>
    );
  }
}
