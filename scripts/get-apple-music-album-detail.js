const axios = require("axios")

const artist = "Diplo"
const album = "Diplo Presents Thomas Wesley, Chapter 1: Snake Oil"

axios({
  method: "GET",
  url: "https://amp-api.music.apple.com/v1/catalog/us/search",
  params: {
    term: `${artist} ${album}`,
    types: "albums",
  },
  headers: {
    authorization:
      "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IldlYlBsYXlLaWQifQ.eyJpc3MiOiJBTVBXZWJQbGF5IiwiaWF0IjoxNjI0NjQwODcyLCJleHAiOjE2NDAxOTI4NzJ9.yT3syIsyvTJDVG-3tFfZU0BDC-3uw-mGhHvBzhfNW1Qyyq2z5YHVVpbBfWTyVHHXznIM3efAAwvnD5L365exUw",
  },
}).then(result => {
  const album = result.data.results.albums.data[0]
  return {
    id: album.id,
    artworkUrl: album.attributes.artwork.url,
    artist: album.attributes.artistName,
    genre: album.attributes.genreNames[0],
    name: album.attributes.name,
    releaseDate: album.attributes.releaseDate,
  }
})
