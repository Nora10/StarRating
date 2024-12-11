import React from 'react';
import './App.css';
import StarRating from './StarRating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <StarRating />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Star rating
        </a>
      </header>
    </div>
  );
}

export default App;
