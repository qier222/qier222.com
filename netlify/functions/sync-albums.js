const main = require("../../scripts/sync-spotify-albums-in-playlist-to-supabase")

exports.handler = async function (event, context) {
  await main()
  return {
    statusCode: 200,
    body: "Cool",
  }
}
