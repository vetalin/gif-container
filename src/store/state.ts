export interface IRootState {
  query: string
  foundGifs: []
}

export const defaultState = {
  query: '',
  foundGifs: []
}