const SpotifyWebApi = require("spotify-web-api-node")

const scopes = ["user-read-currently-playing", "playlist-read-private"]
const redirectUri = "https://example.com/callback"
const clientId = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

const spotifyApi = new SpotifyWebApi({
  redirectUri,
  clientId,
  clientSecret,
})

const authorizeURL = spotifyApi.createAuthorizeURL(scopes)

console.log(`authorizeURL: ${authorizeURL}`)
const open = require("open")
open(authorizeURL)

const prompt = require("prompt")
prompt.start()
prompt.get(["callback"]).then(result => {
  const regex = /code=([a-zA-Z0-9_-]+)/
  const code = regex.exec(result.callback)[1]
  console.log(`code: ${code}`)

  spotifyApi.authorizationCodeGrant(code).then(data => {
    console.log("The token expires in " + data.body["expires_in"])
    console.log("The access token is " + data.body["access_token"])
    console.log("The refresh token is " + data.body["refresh_token"])
  })
})
