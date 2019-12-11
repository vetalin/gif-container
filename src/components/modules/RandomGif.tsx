import React, { Dispatch, useEffect, useState } from 'react'
import { fetchGif } from 'getRandomGif'

const getGif = async (setRandomGif: Dispatch<any>) => {
  setRandomGif('')
  const gif = await fetchGif('pikachu')
  setRandomGif(gif)
}

export const RandomGif: React.FC = () => {
  const [randomGif, setRandomGif] = useState()
  useEffect(() => {
    getGif(setRandomGif)
  }, [])
  return (
    <div className="RandomGif" onClick={() => getGif(setRandomGif)}>
      <img src={randomGif} alt="" style={{width: '50vw', height: '50vh'}}/>
    </div>
  )
}
