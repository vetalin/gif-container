import React from 'react'
import { GifSearch } from 'components/modules/GifSearch'
import { GifViewer } from 'components/modules/GifViewer'

const App: React.FC = () => {
  return (
    <div className="App">
      <GifSearch />
      <GifViewer />
    </div>
  );
}

export default App
