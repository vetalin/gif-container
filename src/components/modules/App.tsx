import React from 'react'
import { RandomGif } from 'components/modules/RandomGif'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <RandomGif />
      </header>
    </div>
  );
}

export default App
