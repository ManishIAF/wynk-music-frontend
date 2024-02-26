import {useState} from 'react'
import Image from './Image'
import { IndicatorData } from '../DataContext/IndicatorContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { SongDataContext } from '../DataContext/SongDataContext';
import { useLocation } from 'react-router-dom';

import SomeMoreOptions from '../fakeData/SongMoreOptions'
import SongMoreOptionMenu from "./SongMoreOPtionMenu";

import ReplyIcon from '@mui/icons-material/Reply';

const CardBox = ({imageWidth,imageHeight,imageBorderRadius,img,play,other,song})=>{
    
    const {pathname} = useLocation()
    const {setIndicator} = IndicatorData()
    const [Id,setId] = useState(null)
    const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block',cursor:'pointer'}}
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>{setIsHovered(false);setId(null);}}
    >
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>

            <Image imageData={img} imageWidth={imageWidth} imageHeight={imageHeight} imageBorderRadius={imageBorderRadius} />

        </div>
        {isHovered&&<div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            width:'100%',
            height:'100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            background: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            padding: pathname==='/'?'35% 35%':'25% 25%',
            borderRadius: imageBorderRadius,
        }}>
            {(play===true)&&<div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'40px',height:'40px',borderRadius:'50%',backgroundColor:'white'}}>
                    <PlayArrowIcon style={{fontSize:'25px',color:'red'}} />
                </div>
            </div>}

            {(other === true)&&<div>
                <div className='tranparentBg' onClick={(e)=>{e.stopPropagation(); setIndicator((prev)=>({...prev,shareIndicator:true}))}} style={{display:'flex',position:'absolute',justifyContent:'center',alignItems:'center',bottom:5,left:10,width:'35px',height:'35px',borderRadius:'50%'}}>
                    <ReplyIcon style={{fontSize:'20px',transform: 'scaleX(-1)'}} />
                </div>
                <div className='tranparentBg' onClick={(e)=>{e.stopPropagation();setId(song?.id)}} style={{display:'flex',position:'absolute',justifyContent:'center',alignItems:'center',bottom:5,right:10,width:'35px',height:'35px',borderRadius:'50%'}}>
                    {song?.id === Id &&
                        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                            <SongMoreOptionMenu queueData={[song]} MarginRight='25' Width='190px' Height='262px' fun={setId} Data={SomeMoreOptions()} />
                        </div>}
                    <MoreVertIcon style={{cursor:'pointer',fontSize:'23px',fontWeight:'bold'}} />
                </div>
            </div>}
  
        </div>}
    </div>
  )
}

export default CardBox