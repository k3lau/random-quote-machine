import React, { Component } from 'react';
import './App.css';
import QuoteMachine from "./components/QuoteMachine";
import { random } from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    };
    this.selectQuoteIndex = this.selectQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
      .then(data => data.json())
      .then(quotes => this.setState({
        quotes
      }, this.assignNewQuoteIndex)
      );
  }

  assignNewQuoteIndex() {
    this.setState({
      selectedQuoteIndex: this.selectQuoteIndex() 
    });
    console.log(this.state.selectedQuoteIndex);
  }

  get selectedQuote() {
    if (!this.state.quotes.length || !Number.isInteger(this.state.selectedQuoteIndex)) {
      return 'Error';
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  selectQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    return (
      <div className="App" id="quote-box">
        <QuoteMachine selectedQuote={this.selectedQuote} assignNewQuoteIndex={this.assignNewQuoteIndex}/>
      </div>
    );
  };
}

export default App;
