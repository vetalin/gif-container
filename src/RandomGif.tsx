import React, { Dispatch, useEffect, useState } from 'react'
import { fetchGif } from './getRandomGif'

const getGif = async (setRandomGif: Dispatch<any>) => {
  const gif = await fetchGif('duck')
  setRandomGif(gif)
}

export const RandomGif: React.FC = () => {
  const [randomGif, setRandomGif] = useState()
  useEffect(() => {
    getGif(setRandomGif)
  }, [])
  return (
    <div className="RandomGif" onClick={() => getGif(setRandomGif)}>
      <img src={randomGif} alt="" style={{width: '100vw', height: '100vh'}}/>
    </div>
  )
}
