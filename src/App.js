import React, { useState } from "react";
import Navbar from "./Navbar";
import old_paper from "./assets/old_paper.png";
import bhagawadGita from "./assets/bhagawadGita.png";
import "./App.css";
import axios from "axios";

const App = () => {
  const [quote, setQuote] = useState(
    "Click on GENERATE RANDOM QUOTE button to get a quote"
  );

  const handleClick = async () => {
    await axios
      .get("https://bhagavad-gita-quote-api.herokuapp.com/quotes/random")
      .then((response) => setQuote(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main_div">
      <Navbar />
      <div className="paper_container">
        <img src={old_paper} alt="Old Paper" className="old_paper" />
        <img
          src={bhagawadGita}
          alt="Bhagawad Gita Logo "
          className="bhagawadGita"
        />
        <p>{quote}</p>
        <button onClick={handleClick}>GENERATE RANDOM QUOTE</button>
      </div>
      <div className="generateQuote"></div>
    </div>
  );
};

export default App;
