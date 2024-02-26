import React from 'react'
import CategoryContainer from '../components/CategoryContainer'
import Card from '../components/Card'
import songs from '../fakeData/fakeData'

function TopPodcastsonWynk() {
  return (
    <CategoryContainer Title="Top Podcasts on Wynk" navLink="podcasts" interval={6} upperLimit={24}>
                            
        {songs?.map((song) => {
            return (
                <Card 
                    key={song?.id}
                    song={song}
                    imageWidth = "170px"
                    imageHeight="170px"
                    imageBorderRadius='10px'
                    infoOne={song?.songName}
                />
            )
        })}
    </CategoryContainer>
  )
}

export default TopPodcastsonWynk