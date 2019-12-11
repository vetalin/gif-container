import React from 'react'
import { UiInput } from 'components/ui/Input'
import { dispatchChangeSearchQuery } from 'store/actions'
import { useSelector } from 'react-redux'
import { IRootState } from 'store/state'

export const GifSearch: React.FC = () => {
  const query = useSelector((state: IRootState) => state.query)
  return (
    <div className="gif-search">
      <div className="gif-search__input">
        <UiInput modifyer="shadow" change={dispatchChangeSearchQuery} value={query}/>
      </div>
    </div>
  )
}