import React, { useState, useEffect } from 'react'
import '../App.css';

function Quotes() {
    const [Quote, setQuote] = useState(false);

    useEffect(() => {
        getQoute()
    }, [])

    function getQoute() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                setQuote(data)
            }
        )
    }
    return (
        <div className='qoutes'>
            {/* <h3>Get Motivated</h3> */}
            <p>
                {
                    Quote ? Quote.content + " - " + Quote.author : "Loading..."
                }
            </p>
        </div>
    )
}

export default Quotes