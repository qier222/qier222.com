const SpotifyWebApi = require("spotify-web-api-node")

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})
spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN)

spotifyApi.refreshAccessToken().then(data => {
  spotifyApi.setAccessToken(data.body.access_token)
  return spotifyApi.getPlaylist(process.env.SPOTIFY_PLAYLIST_ID).then(data => {
    const playlist = data.body
    console.log(playlist)
  })
})
