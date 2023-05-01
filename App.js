import React, { Component } from 'react'
import QuoteAndAuthor from './components/QuoteAndAuthor';
import quotes from './QuoteDB';
import './index.css'

export default class App extends Component {

  
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author
  }

 
  generateRandomQuote = (arr) => {
    
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    this.setState({
      quote: newQuote.quote,
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)

  }


  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
        <h1 className="text-center">Random Quote</h1>
        <QuoteAndAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state}
        />
      </div>
    )
  }
}
