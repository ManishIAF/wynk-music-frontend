import React from 'react'
// import CategoryContainer from '../components/CategoryContainer'
import LybraryCardData from '../utils/LybraryCardData'
import convertString from '../helper/convertString'
import Card from '../components/Card'
// import Loader from '../components/Loader'
import { useNavigate } from 'react-router-dom'

function YourLibrary() {
  const navigate = useNavigate();

  const cardWidth = 170 + 23.5

  return (

       <div style={{display:'flex'}}>
            <div style={{position: 'relative',width: `${cardWidth * 6}px`,overflow:'hidden'}}>
                <div style={{display:'flex',position: 'relative',marginTop:'15px',gap:'1.5rem'}}>
                    {LybraryCardData?.map((tempalate,index)=>{
                        return (
                            <div key={index} onClick={()=>{
                                if(tempalate?.type === 'package'){
                                  navigate(`/${tempalate?.type}/${convertString(tempalate?.title)}/${tempalate?._id}`)
                                }else {
                                  navigate(`/${tempalate?.type}/${convertString(tempalate?.title)}`)
                                }}}>
                                <Card 
                                    key={tempalate?.id}
                                    img={tempalate?.img}
                                    imageWidth = "170px"
                                    imageHeight="170px"
                                    imageBorderRadius='10px'
                                    infoOne={tempalate?.title}
                                />
                            </div>
                        )
                    })}   
                </div>
         
            </div>
        </div>

    // <CategoryContainer 
    //   apiData={LybraryCardData}
    //   Title="Your Library"
    //   interval={6}  
    //   upperLimit={24}
    // />

  )
}

export default YourLibrary