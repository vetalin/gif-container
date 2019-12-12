export const getGifsFromRemoveResults = (results: any[]) => {
  return results.map((result: any) => {
    const [media] = result?.media
    const {gif} = media
    return gif?.url
  })
}

export const copyGifToClipboard = (gifUrl: string) => {
  navigator.clipboard.writeText(gifUrl)
}