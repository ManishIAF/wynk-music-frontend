import React from 'react'
import CategoryContainer from '../components/CategoryContainer'
import Card from '../components/Card'
import songs from '../fakeData/fakeData'

function K_PopEssentials() {
  return (
    <CategoryContainer Title="K-Pop Essentials" navLink="list" interval={6} upperLimit={24}>
                            
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

export default K_PopEssentials