export const formatArtworkUrl = (artworkUrl, format = "jpeg") => {
  const name = `512x512bb.${format}`
  let artwork = artworkUrl
    .replace("{w}x{h}bb.jpeg", `${name}`)
    .replace("{w}x{h}bb.jpg", `${name}`)
  return artwork
}
