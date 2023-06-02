import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <button className="header-btn">
          Random <span class="material-icons">autorenew</span>
        </button>
      </header>
      <main>
        <div className="quotes">
          <p className="single-quote">
            "You're braver than you believe, and stronger than you seem, and
            smarter than you think. "
          </p>
          <div className="author-btn">
            <div id="author">
              Author <br />
              <small>leads</small>
            </div>

            <span class="material-icons btn">arrow_right_alt</span>
          </div>
        </div>
      </main>
      <footer>
        <p>C</p>
      </footer>
    </div>
  );
}

export default App;
