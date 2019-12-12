import React, { useEffect } from 'react'
import { IRootState } from 'store/state'
import { useSelector } from 'react-redux'
import { registerSubscribes } from 'store/subscribes'

export const GifViewer: React.FC = () => {
  const foundGifs = useSelector((state: IRootState) => {
    return (async () => {
      const {foundGifs} = await state
      return foundGifs
    })()
  })
  useEffect(registerSubscribes, [])
  return (
    <div className="gif-viewer">
      {foundGifs.map((gif: string) => (
        <img src={gif} alt="gif" className="gif-viewer__item" />
      ))}
    </div>
  )
}