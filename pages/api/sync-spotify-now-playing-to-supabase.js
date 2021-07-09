const SpotifyWebApi = require("spotify-web-api-node")
const { createClient } = require("@supabase/supabase-js")
const Vibrant = require("node-vibrant")
const Color = require("color")

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})
spotifyApi.setRefreshToken(process.env.SPOTIFY_REFRESH_TOKEN)

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVER_ROLE_SECRET
)

const getNowPlaying = async () => {
  return spotifyApi.getMyCurrentPlayingTrack().then(async response => {
    if (response.body.item === undefined) return
    const track = response.body.item
    await Vibrant.from(track.album.images[2].url)
      .getPalette()
      .then(palette => {
        const color = Color.rgb(palette?.DarkVibrant?.getRgb()).string()
        return supabase
          .from("spotify_now_playing")
          .update({
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            artwork_url: track.album.images[1].url,
            spotify_id: track.id,
            timestamp: new Date().getTime(),
            color,
          })
          .eq("id", "1")
      })
    console.log(`Now playing 👉 ${track.name} by ${track.artists[0].name}`)
  })
}

module.exports = async (req, res) => {
  await spotifyApi.refreshAccessToken().then(async data => {
    spotifyApi.setAccessToken(data.body.access_token)
    await getNowPlaying()
  })
  res.status(200).send(`OK`)
}
