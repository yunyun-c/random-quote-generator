import "./App.css";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <button>
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
            <a>
              <i>Author</i> <br /> leads
            </a>

            <span class="material-icons btn">arrow_right_alt</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
