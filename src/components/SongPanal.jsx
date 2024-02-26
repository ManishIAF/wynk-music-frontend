import { useRef,useState,useEffect,useCallback} from 'react'
import PlayArrow from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import Slider from "@mui/material/Slider";

import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import { SongDataContext } from '../DataContext/SongDataContext';
import { IndicatorData } from '../DataContext/IndicatorContext';
import { QueueData } from '../DataContext/QueueDataContext';

import SoundQuality from './SoundQuality';

const SongPanal = () => {

    const audioRef = useRef()
    const dotPositionRef = useRef()

    const {Song,setSong} = SongDataContext()
    const {songStatus,setSongStatus,Suffle,playnext,playprevious} = QueueData()
    const {indicator,setIndicator} = IndicatorData()
    const [Play,setPlay] = useState(true)
    const [newSong,setNewSong] = useState(true)
    const [duration,setDuration] = useState({currentTime:null,totalDuration:0,SongTime:'00:00'})
    const [volume, setVolume] = useState(50);
    const [showVolume, setShowVolume] = useState(false);
    
    const playAudio = useCallback(() => {
        if (audioRef?.current) {
            setSong((prev)=>{return{...prev,status:true}})
            setPlay(true)
            audioRef?.current?.play();
        }
    },[]);


    const pauseAudio = useCallback(() => {
        if (audioRef?.current) {
            setSong((prev)=>{return{...prev,status:false}})
            setPlay(false)
            audioRef?.current?.pause();
        }
    },[]);
    
    useEffect(() => {
        
        if (audioRef.current) {
            if(songStatus?.repeatOne){
                audioRef.current.loop = true;
            }
            if(!songStatus?.repeatOne){
                audioRef.current.loop = false;
            }
            audioRef.current.addEventListener('loadedmetadata', () => {
                setNewSong(true)
                setPlay(true)
                setSong((prev)=>{return{...prev,playAudio:playAudio,pauseAudio:pauseAudio,status:true}})
                setDuration({currentTime:audioRef?.current?.currentTime,totalDuration:audioRef?.current?.duration})
            });
        }

    }, [Song?.id,songStatus?.repeatOne,setSong,playAudio,pauseAudio]);

    const updateCurrentTime = () => {
        if (audioRef.current) {

            if(audioRef?.current?.currentTime === audioRef?.current?.duration){
                setPlay(false);
                setSongStatus((prev)=>{return{...prev,completed:true}})
                audioRef?.current?.pause();
                audioRef.current.currentTime = 0;
            }

            
            const minutes = Math.floor(audioRef?.current?.currentTime / 60);
            const Minutes = minutes < 10 ? minutes : `${minutes}`;
            const seconds = Math.floor(audioRef?.current?.currentTime % 60);
            const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
            
            if(seconds === 1 ){
                setNewSong(false)
            }

            setDuration((prevDuration)=>{

                const max = audioRef?.current?.duration;
                const dotPosition = ((audioRef?.current?.currentTime / max) * 100);
                dotPositionRef.current.style.setProperty('--dot-position', `${100 - dotPosition}%`);
                return {...prevDuration,currentTime:audioRef?.current?.currentTime,SongTime:`${Minutes}:${returnedSeconds}`}
             
            })
        }
      };
      
    const handleVolumeChange = (event, newValue) => {
        setVolume(newValue);
        audioRef.current.volume = newValue*(1/100);
    };

    return (
        <div>
            
            <div className="bottompage" key={Song?.id}>
                   
                <progress
                    ref={dotPositionRef} 
                    value={audioRef?.current?.currentTime} 
                    max={audioRef?.current?.duration}  
                />

                <div style={{display:'flex',width:'100%', justifyContent:'space-between'}}>
                    <div style={{display:'flex',marginLeft:'15px',alignItems:'center'}}>
                        <div>
                            <img src={Song?.img} alt='' style={{width:'45px',height:'45px',borderRadius:'7px'}} />
                        </div>
                        <div style={{width:'300px'}}>
                            <div style={{lineHeight:'22px',marginLeft:'8px'}}>
                                <p style={{fontSize:'14px',width:'270px',color:'#eee',whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                    {Song?.title}
                                </p>
                                <div style={{display: 'flex',color:'gray', whiteSpace: 'nowrap', width: '230px',overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                    <div style={{display: 'flex',fontSize:'12px'}}>
                                        {Song?.artist?.map((art , index)=>
                                            <p key={index}>
                                                {art}
                                                {index !== Song?.artist?.length - 1 && ', '}
                                            </p>
                                        )}
                                    </div>
                                    {Song?.artist?.length >=1 &&'-'}
                                    <div style={{display: 'flex',fontSize:'11px',whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                        {Song?.album} 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',gap:'38px',marginRight:'50px',justifyContent:'center',alignItems:'center'}}>
                        <ShuffleIcon onClick={Suffle} style={{fontSize:'20px',cursor:'pointer',color:'gray'}} />
                        <div style={{display:'flex',gap:'10px'}}>
                            <SkipPreviousIcon onClick={playprevious} style={{fontSize:'25px',cursor:'pointer',color:'gray'}} />
                            {!newSong?<div style={{cursor:'pointer',width:'26px',padding:'3px',height:'26px',borderRadius:'50%',backgroundImage:'linear-gradient(180deg,#ff8d76 0,#ff0c55)',color:'#eee'}}>
                                {!Play&&<PlayArrow onClick={playAudio} style={{fontSize:'20px'}}/>}
                                {Play&&<PauseIcon onClick={pauseAudio} style={{fontSize:'20px'}}/>}
                            </div>:<img src="https://wynk.in/_next/static/media/playerLoader.6c670f98.png" alt='' className='rotating-image' style={{width:'26px',height:'26px',borderRadius:'50%'}} />}
                            <SkipNextIcon onClick={playnext} style={{fontSize:'25px',cursor:'pointer',color:'gray'}} />
                        </div>
                        {(!songStatus?.repeatAll&&!songStatus?.repeatOne)&&<RepeatIcon onClick={()=>setSongStatus((prev)=>{return{...prev,repeatAll:true,repeatOne:false}})} style={{fontSize:'18px',color:'gray',cursor:'pointer'}} />}
                        {songStatus?.repeatAll&&<RepeatIcon onClick={()=>setSongStatus((prev)=>{return{...prev,repeatAll:false,repeatOne:!prev.repeatOne}})} style={{fontSize:'18px',color:'#ff0c55',cursor:'pointer'}} />}
                        {songStatus?.repeatOne&&<RepeatOneIcon onClick={()=>setSongStatus((prev)=>{return{...prev,repeatAll:false,repeatOne:false}})} style={{fontSize:'18px',color:'#ff0c55',cursor:'pointer'}} />}
                    </div>
                    
                    <div style={{display:'flex',width:'295px',justifyContent:'space-between',alignItems:'center',marginRight:'15px'}}>
                        <div onClick={()=>setIndicator((prev)=>{return{...prev,linkIndicator:true}})} style={{cursor:'pointer',marginTop:'5px'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M24.9084 13.9998C24.9084 20.0242 20.0246 24.908 14 24.908C7.97553 24.908 3.09171 20.0242 3.09171 13.9998C3.09171 7.97536 7.97553 3.09159 14 3.09159C20.0246 3.09159 24.9084 7.97536 24.9084 13.9998Z" stroke="white" stroke-opacity="0.7" stroke-width="1.51667"></path><path d="M10.1454 14.7117L13.8787 18.445L17.6121 14.7117" stroke="white" stroke-opacity="0.7" stroke-width="1.51667" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9921 10.1733L13.9921 17.8667" stroke="white" stroke-opacity="0.7" stroke-width="1.51667" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </div>
                        <div><p style={{color:'gray',fontSize:'12px'}}>
                            {duration?.SongTime < 0 ? '00:00' : duration?.SongTime} / {Math.floor(duration?.totalDuration / 60)<10 ? `0${Math.floor(duration?.totalDuration / 60)}`:Math.floor(duration?.totalDuration / 60)} : {Math.floor(duration?.totalDuration % 60)}</p>
                        </div>
                        <div>
                            <SoundQuality />
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div className='volumeslider' onMouseEnter={()=>setShowVolume(true)} onMouseLeave={()=>setShowVolume(false)}>

                                {showVolume&&<div className="slider" style={{display:'flex',padding:'2px',justifyContent:'center',backgroundColor:' #282c34',borderRadius:'15px',width:'16px'}}>
                                    <Slider
                                        size="small"
                                        sx={{
                                            color:'#ff0c55',
                                            height:'100px',
                                            width:'4px',
                                            '& .MuiSlider-thumb': {
                                                width: 16,
                                                height: 16,
                                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                                    boxShadow: 'none',
                                                },
                                            }
                                        }}
                                        value={volume}
                                        orientation="vertical"
                                        onChange={handleVolumeChange}
                                        aria-labelledby="input-slider"
                                    />
                                </div>}

                                <div style={{marginRight:'20px'}}>
                                    <VolumeDownIcon style={{fontSize:'25px',color:'#ff0c55'}} />
                                </div>

                            </div>

                        </div>
                        <div style={{color:'gray',cursor:'pointer'}}>
                            {!indicator?.QueueIndicator&&
                                <div onClick={()=>setIndicator({QueueIndicator:true})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M3.5 7C3.5 6.76794 3.59219 6.54538 3.75628 6.38128C3.92038 6.21719 4.14294 6.125 4.375 6.125H23.625C23.8571 6.125 24.0796 6.21719 24.2437 6.38128C24.4078 6.54538 24.5 6.76794 24.5 7C24.5 7.23206 24.4078 7.45462 24.2437 7.61872C24.0796 7.78281 23.8571 7.875 23.625 7.875H4.375C4.14294 7.875 3.92038 7.78281 3.75628 7.61872C3.59219 7.45462 3.5 7.23206 3.5 7ZM14.875 13.125H4.375C4.14294 13.125 3.92038 13.2172 3.75628 13.3813C3.59219 13.5454 3.5 13.7679 3.5 14C3.5 14.2321 3.59219 14.4546 3.75628 14.6187C3.92038 14.7828 4.14294 14.875 4.375 14.875H14.875C15.1071 14.875 15.3296 14.7828 15.4937 14.6187C15.6578 14.4546 15.75 14.2321 15.75 14C15.75 13.7679 15.6578 13.5454 15.4937 13.3813C15.3296 13.2172 15.1071 13.125 14.875 13.125ZM14.875 20.125H4.375C4.14294 20.125 3.92038 20.2172 3.75628 20.3813C3.59219 20.5454 3.5 20.7679 3.5 21C3.5 21.2321 3.59219 21.4546 3.75628 21.6187C3.92038 21.7828 4.14294 21.875 4.375 21.875H14.875C15.1071 21.875 15.3296 21.7828 15.4937 21.6187C15.6578 21.4546 15.75 21.2321 15.75 21C15.75 20.7679 15.6578 20.5454 15.4937 20.3813C15.3296 20.2172 15.1071 20.125 14.875 20.125ZM26.7138 16.7584L19.7138 12.3834C19.5813 12.3007 19.4292 12.2549 19.2731 12.2507C19.117 12.2466 18.9626 12.2844 18.826 12.36C18.6894 12.4357 18.5756 12.5465 18.4963 12.681C18.4169 12.8156 18.3751 12.9688 18.375 13.125V21.875C18.3751 22.0312 18.4169 22.1844 18.4963 22.319C18.5756 22.4535 18.6894 22.5643 18.826 22.64C18.9626 22.7156 19.117 22.7534 19.2731 22.7493C19.4292 22.7451 19.5813 22.6993 19.7138 22.6166L26.7138 18.2416C26.8394 18.1629 26.943 18.0535 27.0148 17.9238C27.0866 17.7941 27.1243 17.6483 27.1243 17.5C27.1243 17.3517 27.0866 17.2059 27.0148 17.0762C26.943 16.9465 26.8394 16.8371 26.7138 16.7584Z" fill="whitesmoke"></path></svg>
                                </div>}
                            {indicator?.QueueIndicator&&
                                <div onClick={()=>setIndicator({QueueIndicator:false})}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><g clip-path="url(#clip0_101_184)"><path d="M3.5 7C3.5 6.76794 3.59219 6.54538 3.75628 6.38128C3.92038 6.21719 4.14294 6.125 4.375 6.125H23.625C23.8571 6.125 24.0796 6.21719 24.2437 6.38128C24.4078 6.54538 24.5 6.76794 24.5 7C24.5 7.23206 24.4078 7.45462 24.2437 7.61872C24.0796 7.78281 23.8571 7.875 23.625 7.875H4.375C4.14294 7.875 3.92038 7.78281 3.75628 7.61872C3.59219 7.45462 3.5 7.23206 3.5 7ZM14.875 13.125H4.375C4.14294 13.125 3.92038 13.2172 3.75628 13.3813C3.59219 13.5454 3.5 13.7679 3.5 14C3.5 14.2321 3.59219 14.4546 3.75628 14.6187C3.92038 14.7828 4.14294 14.875 4.375 14.875H14.875C15.1071 14.875 15.3296 14.7828 15.4937 14.6187C15.6578 14.4546 15.75 14.2321 15.75 14C15.75 13.7679 15.6578 13.5454 15.4937 13.3813C15.3296 13.2172 15.1071 13.125 14.875 13.125ZM14.875 20.125H4.375C4.14294 20.125 3.92038 20.2172 3.75628 20.3813C3.59219 20.5454 3.5 20.7679 3.5 21C3.5 21.2321 3.59219 21.4546 3.75628 21.6187C3.92038 21.7828 4.14294 21.875 4.375 21.875H14.875C15.1071 21.875 15.3296 21.7828 15.4937 21.6187C15.6578 21.4546 15.75 21.2321 15.75 21C15.75 20.7679 15.6578 20.5454 15.4937 20.3813C15.3296 20.2172 15.1071 20.125 14.875 20.125Z" fill="white"></path><g filter="url(#filter0_d_101_184)"><path d="M25.7325 21.3575C25.6486 21.4414 25.5348 21.4885 25.4162 21.4885C25.2976 21.4885 25.1838 21.4414 25.0999 21.3575L21.9371 18.1947L18.7743 21.3575C18.6905 21.4414 18.5767 21.4885 18.4581 21.4885C18.3394 21.4885 18.2257 21.4414 18.1418 21.3575C18.0579 21.2736 18.0108 21.1599 18.0108 21.0412C18.0108 20.9226 18.0579 20.8088 18.1418 20.725L21.3046 17.5622L18.1418 14.3994C18.0579 14.3155 18.0108 14.2017 18.0108 14.0831C18.0108 13.9644 18.0579 13.8507 18.1418 13.7668C18.2257 13.6829 18.3394 13.6358 18.4581 13.6358C18.5767 13.6358 18.6905 13.6829 18.7743 13.7668L21.9371 16.9296L25.0999 13.7668C25.1838 13.6829 25.2976 13.6358 25.4162 13.6358C25.5348 13.6358 25.6486 13.6829 25.7325 13.7668C25.8164 13.8507 25.8635 13.9644 25.8635 14.0831C25.8635 14.2017 25.8164 14.3155 25.7325 14.3994L22.5697 17.5622L25.7325 20.725C25.8164 20.8088 25.8635 20.9226 25.8635 21.0412C25.8635 21.1599 25.8164 21.2736 25.7325 21.3575Z" fill="white"></path><path d="M25.4162 21.6537C25.5786 21.6537 25.7344 21.5892 25.8493 21.4743C25.9641 21.3594 26.0287 21.2037 26.0287 21.0412C26.0287 20.8788 25.9641 20.723 25.8493 20.6082L22.8033 17.5622L25.8493 14.5161C25.9641 14.4013 26.0287 14.2455 26.0287 14.0831C26.0287 13.9206 25.9641 13.7649 25.8493 13.65C25.7344 13.5352 25.5786 13.4706 25.4162 13.4706C25.2538 13.4706 25.098 13.5352 24.9832 13.65L21.9371 16.696L18.8911 13.65C18.7763 13.5352 18.6205 13.4706 18.4581 13.4706C18.2956 13.4706 18.1398 13.5352 18.025 13.65C17.9101 13.7649 17.8456 13.9206 17.8456 14.0831C17.8456 14.2455 17.9101 14.4013 18.025 14.5161L21.071 17.5622L18.025 20.6082C17.9101 20.723 17.8456 20.8788 17.8456 21.0412C17.8456 21.2037 17.9101 21.3594 18.025 21.4743C18.1398 21.5892 18.2956 21.6537 18.4581 21.6537C18.6205 21.6537 18.7763 21.5892 18.8911 21.4743L21.9371 18.4283L24.9832 21.4743C25.098 21.5892 25.2538 21.6537 25.4162 21.6537Z" stroke="white" stroke-width="0.330305"></path></g></g><defs><filter id="filter0_d_101_184" x="14.3774" y="13.3054" width="15.1195" height="15.1195" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="3.30305"></feOffset><feGaussianBlur stdDeviation="1.65152"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_101_184"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_101_184" result="shape"></feBlend></filter><clipPath id="clip0_101_184"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>
                                </div>}
                        </div>
                    </div>
                
                </div>
                <audio key={Song?.id} ref={audioRef} onTimeUpdate={updateCurrentTime} controls autoPlay>
                    <source src={`https://musicapi.x007.workers.dev/fetch?id=${Song?.id}`} type="audio/ogg" />
                    Your browser does not support the audio element.
                </audio>
            </div>
        </div>
    )
}

export default SongPanal