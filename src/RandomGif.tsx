import React, { useEffect, useState } from 'react'
import { fetchGif, getRandomWord } from './getRandomGif'

export const RandomGif: React.FC = () => {
  const [randomGif, setRandomGif] = useState()
  useEffect(() => {
    (async () => {
      const randomWord = await getRandomWord()
      const gif = await fetchGif(randomWord)
      setRandomGif(gif)
    })()
  }, [])
  return (
    <div className="RandomGif">
      <img src={randomGif} alt=""/>
    </div>
  )
}
