import React from 'react'
import { RandomGif } from 'components/modules/RandomGif'
import { UiInput } from 'components/ui/Input'

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <UiInput />
        <RandomGif />
      </header>
    </div>
  );
}

export default App
