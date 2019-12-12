export const fetchGif = async (query: string) => {
  const fetchResults = await fetch(`https://api.tenor.com/v1/search?key=KLX8GF4NS3VO&q=${query}&limit=50`);
  const gifJson = await fetchResults?.json()
  return gifJson?.results
}
