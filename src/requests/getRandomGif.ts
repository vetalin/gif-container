export const fetchGif = async (query: string) => {
  const fetchResults = await fetch(`https://api.tenor.com/v1/random?key=KLX8GF4NS3VO&q=${query}&limit=1`);
  const gifJson = await fetchResults?.json()
  return gifJson?.results
}
