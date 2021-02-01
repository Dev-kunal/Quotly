import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [quote, setQuote] = useState({
    author: "Quot.ly",
    text: "Nothing fancy you'll get a quote after each 9 seconds"
  });
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        handleResponse(response);
      })
      .catch((err) => console.log(err));
  }, []);
  function handleResponse(response) {
    setInterval(() => {
      setQuote(response.data[Math.floor(Math.random() * 1600)]);
    }, 9000);
  }
  return (
    <div className="App">
      <h1 className="heading">Quot.ly</h1>
      <div className="container">
        <div className="quote-container">
          <h2>{quote.text}</h2>
          <span className="author">-{quote.author} </span>
        </div>
        {/* <button className="btn"> Next </button> */}
      </div>
      <footer>
        <h6>Made with ❤ By Kunal</h6>
      </footer>
    </div>
  );
}
