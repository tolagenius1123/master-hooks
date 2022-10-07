import axios from 'axios'
import React from 'react'
import { useEffect, useState, useRef } from 'react'

const UseState = () => {
    const [quote, setQuote] = useState("")
    const [author, setAuthor] = useState("")
    const effectRan = useRef(false)

    const API_URL = "https://api.quotable.io/random"
    // const API_PRODUCTS = "https://fakestoreapi.com/products"

    // const handleQuote = () => {
    //     axios.get(API_URL)
    //     .then(res => {
    //         console.log(res);
    //         setQuote(res.data.content)
    //         setAuthor(res.data.author)
    //     })
    //     .then(err => {
    //         console.log(err);
    //     })
    // }

    useEffect(() => {
        // handleQuote()
        if (effectRan.current === false) {
            console.log('mounted');
            async function fetchData () {
                const response = await axios.get(API_URL)
                console.log(response);
                setQuote(response.data.content)
                setAuthor(response.data.author)
            }
            fetchData()
            return () => {
                effectRan.current = true
                console.log('unmounted');
            }
        } 
    }, [])

    return (
    <div>
        <h1>Quote: "{quote}"</h1>
        <h2>Author: {author}</h2>
        <button >Get Quote</button>
    </div>
    )
}

export default UseState;

// onClick={handleQuote}