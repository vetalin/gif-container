import React from 'react';
import './App.css';
import { RandomGif } from './RandomGif'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RandomGif />
      </header>
    </div>
  );
}

export default App;
