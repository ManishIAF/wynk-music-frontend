import React from 'react'
import CardBox from './cardBox'

function Card({song,imageWidth,imageHeight,imageBorderRadius,infoOne,infoTwo,img,play,other}) {
  
  return (
    <div style={{cursor:'pointer'}}>
        <div>
            <div>
                <CardBox play={play} other={other} song={song} img={img} imageWidth={imageWidth} imageHeight={imageHeight} imageBorderRadius={imageBorderRadius?imageBorderRadius:'7px'}/>
            </div>
            <div style={{ width: imageWidth, overflow: 'hidden', paddingTop: '10px' }} title={infoOne}>
              {infoOne&&<span style={{ display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {infoOne}
              </span>}
              {infoTwo&&<span style={{ color: 'gray', paddingTop: '5px', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {infoTwo}
              </span>}
            </div>
        </div>
    </div>
  )
}

export default Card