import {useState} from 'react'
import { useLocation } from 'react-router-dom';

import Image from './Image'
import { SongDataContext } from '../DataContext/SongDataContext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const PlayAnimation = "https://wynk.in/_next/static/media/animation.43a00529.svg"

const PlayBox = ({imageWidth,imageHeight,imageBorderRadius,song,img})=>{

    const {pathname} = useLocation()
    const [isHovered, setIsHovered] = useState(false);
    const {Song} = SongDataContext()

    return (
        <div style={{ position: 'relative', display: 'inline-block',cursor:'pointer'}}
            onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={()=>setIsHovered(false)}
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
            {Song?.id===song?.id&&<div
                style={{
                    position: 'absolute',
                    width:'100%',
                    height:'100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%,-50%)',
                    background: 'rgba(0, 0, 0, 0.6)',
                    color: 'white',
                    padding: pathname==='/'?'35% 35%':'25% 25%',
                    borderRadius: imageBorderRadius,
                }}
            >
                {(Song?.status === true)&&<Image imageData={PlayAnimation} imageWidth='30px'/>}
                {(Song?.status === false)&&<PlayArrowIcon style={{fontSize:'25px'}}/>}
            </div>}
            {(isHovered&&Song?.id!==song?.id)&&<div
                style={{
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
                }}
            >
                <PlayArrowIcon style={{fontSize:'25px'}} />
            </div>}
        </div>
    )
}

export default PlayBox;