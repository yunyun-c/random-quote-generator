import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [bio, setBio] = useState("");
  const [quotesByAuthor, setQuotesByAuthor] = useState([]);

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const { content, author: quoteAuthor } = data;
      setQuote(content);
      setAuthor(quoteAuthor);
      setQuotesByAuthor([]);
      getAuthorBio(quoteAuthor);
    } catch (error) {
      console.log("Error fetching quote:", error);
    }
  };

  const getAuthorBio = async (slug) => {
    try {
      const queryParams = new URLSearchParams({
        slug: slug,
        limit: "1",
      });
      const url = `https://api.quotable.io/authors?${queryParams.toString()}`;
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        if (data.count > 0) {
          const author = data.results[0];
          const bio = author.bio;
          setBio(bio);
        } else {
          setBio("Author not found.");
        }
      } else {
        throw new Error("Request failed with status: " + response.status);
      }
    } catch (error) {
      console.error("Error retrieving author bio:", error.message);
      setBio("Error retrieving author bio.");
    }
  };

  const fetchQuotesByAuthor = async () => {
    try {
      const response = await fetch(
        `https://api.quotable.io/quotes?author=${author}`
      );
      const data = await response.json();
      const quotes = data.results.map((quote) => quote.content);
      setQuotesByAuthor(quotes);
    } catch (error) {
      console.log("Error fetching quotes by author:", error);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const handleRandomQuote = () => {
    fetchRandomQuote();
  };

  const handleAuthorQuotes = () => {
    fetchQuotesByAuthor();
  };

  return (
    <div>
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <button className="header-btn" onClick={handleRandomQuote}>
          Random <span className="material-icons">autorenew</span>
        </button>
      </header>
      <main>
        <div className="quotes">
          <p className="single-quote">{quote}</p>
          <div className="author-btn" onClick={handleAuthorQuotes}>
            <div id="author">
              {author} <br />
            </div>
            <span className="material-icons btn">arrow_right_alt</span>
          </div>
        </div>
        {quotesByAuthor.length > 0 && (
          <div className="author-quotes">
            <h2>More quotes by {author}</h2>
            <span>{bio}</span>
            <div className="other-quotes">
              {quotesByAuthor.map((quote, index) => (
                <div className="quotes">
                  <p className="single-quote" key={index}>
                    {quote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <footer>
        <p>created by yunyun-c - devChallenges.io</p>
      </footer>
    </div>
  );
}

export default App;
