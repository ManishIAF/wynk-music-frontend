import React from 'react'
import CategoryContainer from '../components/CategoryContainer'
import Card from '../components/Card'
import songs from '../fakeData/fakeData'

function TopRegionalPlaylists() {
  return (
    <CategoryContainer navLink="package" Title="Top Bengali Playlists" interval={8} upperLimit={24}>
                            
        {songs?.map((song) => {
            return (
                <Card 
                    key={song?.id}
                    song={song}
                    imageWidth = "137px"
                    imageHeight="135px"
                    imageBorderRadius='10px'
                    infoOne={song?.songName}
                    infoTwo={song?.Artists}
                />
            )
        })}
    </CategoryContainer>
  )
}

export default TopRegionalPlaylists