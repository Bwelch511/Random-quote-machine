import React from 'react'
import quotes from '../QuoteDB'
import '../index.css'

export default function QuoteAndAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="background" >

            <div className="quote-box">
                <p className="text">{quote.quote}</p>
                <h5 className="author">- {quote.author}</h5>
                <button
                    onClick={() => { generateRandomQuote(quotes) }}
                    type="submit">
                     Generate Quote</button>
                <button
                    className="btn-action"
                    onClick={() => {
                        generateRandomQuote(quotes);
                        window.open('https://twitter.com/intent/tweet/?text=' + encodeURIComponent(quote.quote + '--' + quote.author))
                    }}
                    type="submit"> Share Quote</button>
            </div>
        </div>
    )
}