import React from 'react'
import { UiInput } from 'components/ui/Input'

export const GifSearch: React.FC = () => {
  return (
    <div className="gif-search">
      <div className="gif-search__input">
        <UiInput modifyer="shadow"/>
      </div>
    </div>
  )
}