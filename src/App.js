import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [quote, setQuote] = useState({
    author: "",
    text: ""
  });
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setQuote(response.data[79]);
        // console.log(response.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1 className="heading">Quot.ly</h1>
      <div className="container">
        <div className="quote-container">
          <h2>{quote.text}</h2>
          <span className="author">-{quote.author} </span>
        </div>
        <button className="btn"> Next </button>
      </div>
      <footer>
        <h6>Made with ❤ By Kunal</h6>
      </footer>
    </div>
  );
}
