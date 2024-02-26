import React from 'react'

function Image({imageData,imageWidth,imageHeight,imageBorderRadius}) {
  return (
        <img src={imageData} alt='' style={{width:imageWidth,height:imageHeight,borderRadius:imageBorderRadius}}/>
  )
}

export default Image