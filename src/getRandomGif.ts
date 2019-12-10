export const fetchGif = async (query: string) => {
  const fetchResults = await fetch(`https://api.tenor.com/v1/search?key=KLX8GF4NS3VO&q=${query}&limit=1`);
  const gifJson = await fetchResults?.json()
  return gifJson?.results[0]?.media[0]?.gif?.url
}

export const getRandomWord = async () => {
  const fetchResults = await fetch(`https://random-word-api.herokuapp.com/word?key=13AW7B7W&number=1`)
  const word: [string] = await fetchResults.json()
  return word[0]
}


