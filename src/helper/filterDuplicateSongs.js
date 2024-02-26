const filterDuplicateSongs = (songs) => {
    const Songs = songs.filter(
        (artist, index, self) => index === self.findIndex((a) => a._id === artist._id)
      )
    return Songs
}

export default filterDuplicateSongs;