import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import convertString from '../helper/convertString';
import Card from './Card';
import Loader from './Loader';
import { SongDataContext } from '../DataContext/SongDataContext';
import { QueueData } from '../DataContext/QueueDataContext';
import { IndicatorData } from '../DataContext/IndicatorContext';

const CategoryContainer = ({interval,Title,apiData,condition,isLoading,path,imageWidth,imageHeight,borderradiue,play,other,Id}) => {
    
    const {setIndicator} = IndicatorData()
    const {Song} = SongDataContext()
    const {AddOnlyOneToQueue} = QueueData()
    const navigate = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);

    const cardWidth = 170 + 23.5
    
    const scroll = (scrollOffset) => {
        const newPosition = (path === 'package'||path === condition) ? scrollPosition + scrollOffset - interval : scrollPosition + scrollOffset;

        const maxScrollPosition = (apiData?.length - interval) * cardWidth; 
    
        const newPositionClamped = Math.max(0, Math.min(maxScrollPosition, newPosition));
        setScrollPosition(newPositionClamped);

    };

    return (
        <div style={{display:'flex'}}>
            {!isLoading?<div style={{position: 'relative',width: `${cardWidth * 6}px`,overflow:'hidden'}}>
                <div style={{display:'flex',justifyContent:'space-between',width:`${cardWidth * interval}`}}>
                        <h2 onClick={()=>{
                            if(path === 'my-music'){
                                navigate(`/${path}/${convertString(Title)}`)
                            }else{
                                navigate(`/${path}/${convertString(Title)}/${Id}`)
                            }
                        }} style={{fontSize:'23px',cursor:'pointer'}}>
                            {Title}
                        </h2>
                        {interval<=apiData?.length&&Title&&
                        <p  
                            className='hoverEffect'
                            style={{fontSize:'15px'}}
                            onClick={()=>{
                                if(path === 'my-music'){
                                    navigate(`/${path}/${convertString(Title)}`)
                                }else{
                                    navigate(`/${path}/${convertString(Title)}/${Id}`)
                                }
                            }}
                        >
                            <span>
                                More
                            </span>
                        </p>
                    }
                </div>
                <div style={{display:'flex',position: 'relative',marginTop:'15px'}}>
                    <div style={{display:'flex',position: 'relative',gap:'1.5rem',transform: `translateX(-${scrollPosition*interval}px)`,transition: 'transform 0.5s ease-in-out'}}>
                        {apiData?.map((tempalate,index)=>{
                            return (
                                <div key={index} onClick={()=>{
                                    setIndicator((prev)=>{return{...prev,searchIndicator:false}})
                                    if(tempalate?.type === 'artist'){
                                        navigate(`/${tempalate?.type}/${convertString(tempalate?.Name)}`)
                                    }else {
                                        if(path === 'package'||path ==='my-music'||!tempalate?.type){
                                            if(Song?.id !== tempalate?.id){
                                                AddOnlyOneToQueue([tempalate]);
                                            }
                                        }else{
                                            navigate(`/${tempalate?.type}/${convertString(tempalate?.title)}/${tempalate?._id}`)
                                        }
                                    }}}>
                                    <Card 
                                        key={tempalate?.id}
                                        img={tempalate?.img}
                                        play={play}
                                        other={other||!tempalate?.type}
                                        imageWidth = {imageWidth ? imageWidth : path === 'package' ? '137px' : "170px"}
                                        imageHeight={imageHeight ? imageHeight : path === 'package' ? '135px' : "170px"}
                                        imageBorderRadius={borderradiue?borderradiue:'10px'}
                                        infoOne={(path === 'package'||!tempalate?.type) ? tempalate?.title : tempalate?.Name}
                                        infoTwo={(path === 'package' || !tempalate?.type) && tempalate?.album}
                                    />
                                </div>
                            )
                        })}  
                    </div> 
                </div>
                {scrollPosition > 0 && <NavigateBeforeIcon
                    onClick={() => scroll(-cardWidth)}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        fontSize:'40px',
                        borderRadius:'50%',  
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: '#fff',
                        border: 'none',
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                />}
                {(cardWidth * apiData?.length) - scrollPosition >= cardWidth * apiData?.length && apiData?.length > interval && <NavigateNextIcon 
                    onClick={() => scroll(cardWidth)}
                    style={{
                        position: 'absolute',
                        fontSize:'40px',
                        borderRadius:'50%',
                        top: '50%',
                        left: '96.5%',
                        right: '0',
                        transform: 'translateY(-50%)',
                        background: 'rgba(0, 0, 0, 0.5)',
                        color: '#fff',
                        border: 'none',
                        padding: '10px',
                        cursor: 'pointer',
                    }}
                />}
            </div>:<Loader />}
        </div>
    );
};

export default CategoryContainer;
