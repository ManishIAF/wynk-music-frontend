import { useState } from "react";
import { SongDataContext } from "../DataContext/SongDataContext";
import { Button } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import QueueTable from "../components/QueueTable";
import SongMoreOPtionMenu from "../components/SongMoreOPtionMenu";
import { IndicatorData } from "../DataContext/IndicatorContext";
import { QueueData } from "../DataContext/QueueDataContext";
import useFetch from "../customComponent/fetch"

import '../styles/table.css'
import QueueSidePanalMoreOptionsData from "../fakeData/QueueSidePanalMoreOptions";

const Queue = () => {

    const {Song} = SongDataContext();
    const {setIndicator} = IndicatorData();
    const {queueData,RemoveAllFromQueue} = QueueData();
    const [open,setOpen] = useState(false)

    const [{apiData:RecommendedSongs}] = useFetch('package/byName/Trending in Hindi')

    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                zIndex: 850,
                overflow: 'hidden',
            }}
        >
            <div
                style={{
                width: '100%',
                height: '100%',
                backgroundImage: `url('${Song?.img}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 850,
                filter: 'blur(10px)',
                }}
            />
                <div
                    style={{
                    position: 'relative',
                    zIndex: 855,
                    width: '100%',
                    height: '100%',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            padding:'30px 112px'
                        }}
                    >
                        <div>
                            <div>
                                <h1 style={{fontSize:'35px'}}>Now Playing</h1>
                                <p style={{color:'gray',marginTop:'8px',fontSize:'13px'}}>Playing From</p>
                            </div>
                            <div>
                                <img src={Song?.img} alt='' style={{width:'220px',height:'220px',borderRadius:'16px',marginTop:'20px'}} />
                            </div>
                            <div>
                                <h2 style={{fontSize:'23px',width:'225px',marginTop:'10px',lineHeight:'33px'}}>{Song?.title}</h2>
                                <div style={{ display: 'flex', color: 'gray', width: '255px', marginTop: '5px', overflow: 'hidden' }}>
                                    <div style={{ fontSize: '.875rem', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                                        {Song?.artist?.map((eachArtist, index) => (
                                        <span key={index}>
                                            {eachArtist}
                                            {index !== Song?.artist?.length - 1 && ', '}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div style={{display:'flex'}}>
                                <Button onClick={()=>setIndicator((prev)=>{return{...prev,linkIndicator:true}})} style={{fontFamily:'inherit',textTransform: 'none',height:'40px',width:'110px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',marginTop:'20px',borderRadius:'20px',border:'1px solid white' , color:'white'}} variant="outlined">
                                    <p style={{fontSize:'12px',gap:'5px',display: 'flex', alignItems: 'center'}}>
                                        <span style={{width:'24px',height:'24px',flexShrink: 0}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="h-6 w-6 mr-1 inline-flex"><path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                                        </span>
                                        <span style={{fontWeight:'bold',fontFamily:'inherit'}}>Download</span>
                                    </p>
                                </Button>
                                <button onClick={()=>setIndicator((prev)=>{return{...prev,shareIndicator:true}})} style={{cursor:'pointer',marginLeft:'30px',fontFamily:'inherit',textTransform: 'none',height:'40px',width:'40px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',marginTop:'20px',borderRadius:'20px',border:'1px solid white' , color:'white'}} variant='outlined'>
                                    <span style={{flexShrink: 0,padding:'2px'}}>
                                        <ShareIcon style={{fontSize:'20px',fontWeight:'bold'}} />
                                    </span>
                                </button>
                                <button style={{marginLeft:'20px',fontFamily:'inherit',textTransform: 'none',height:'39px',width:'39px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',marginTop:'20px',borderRadius:'20px',border:'1px solid white' , color:'white'}} variant='outlined'>
                                    <span style={{flexShrink: 0}}>
                                        <div style={{position:'relative',bottom:'295px',left:'175px'}}>
                                            {open&&<SongMoreOPtionMenu fun={setOpen} ZIndex={15000} Width='190px' Height="265px" Data={QueueSidePanalMoreOptionsData()}/>}
                                        </div>
                                        <MoreVertIcon onClick={()=>setOpen(true)} style={{cursor:'pointer',fontSize:'25px',fontWeight:'bold',marginTop:'5px'}} />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div style={{marginLeft:'30px',width:'100%'}}>
                            <div style={{display:'flex',width:'100%',justifyContent:'space-between'}}>
                                <div>
                                    <p style={{fontSize:'2.25rem',fontWeight:500}}> 
                                        Queue
                                    </p>
                                </div>
                                <div>
                                    <button onClick={()=>setIndicator({QueueIndicator:false})} style={{cursor:'pointer',fontFamily:'inherit',textTransform: 'none',height:'42px',width:'42px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',borderRadius:'50%',border:'1px solid GRAY' , color:'gray'}} variant='outlined'>
                                        <span style={{flexShrink: 0}}>
                                            <CloseIcon style={{fontSize:'23px',marginTop:'5px'}} />
                                        </span>
                                    </button>
                                </div>

                            </div>
                            <div style={{marginTop:'25px',fontSize:'13px','--tw-text-opacity': 1,color:'rgba(157,160,163,var(--tw-text-opacity))'}}>
                                <p>{queueData?.length} Songs</p>
                            </div>
                            <div style={{display:'flex',marginBottom:'17px',marginTop:'15px'}}>
                                <Button style={{fontFamily:'inherit',textTransform: 'none',height:'43px',width:'120px','--tw-bg-opacity':1,borderRadius:'25px',color:'white',backgroundImage: 'linear-gradient(180deg,#ff8d76 0,#ff0c55)'}}>
                                    <p style={{fontWeight:'bolder'}}>
                                        <span style={{flexShrink: 0,fontSize:'13px'}}>
                                            Save as Playlist
                                        </span>
                                    </p>
                                </Button>
                                <Button onClick={()=>{RemoveAllFromQueue();setIndicator({QueueIndicator:false})}} style={{marginLeft:'20px',textTransform: 'none',height:'43px',width:'65px','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',borderRadius:'25px',border:'1px solid white','--tw-text-opacity': 1,color:'rgba(157,160,163,var(--tw-text-opacity))'}}>
                                    <p style={{fontWeight:'bold'}}>
                                        <span style={{flexShrink: 0}}>
                                            Clear
                                        </span>
                                    </p>
                                </Button>
                            </div>
                            <div className="hideScrollBar" style={{width:'100%',height:'390px',overflowY:'auto',scrollbarWidth: 'none','-ms-overflow-style': 'none'}}>
                                <QueueTable Data={queueData} />
                                <div style={{marginTop:'23px'}}>
                                    <div style={{lineHeight:'25px'}}>
                                        <div style={{display:'flex' , width:'100%',justifyContent:'space-between'}}>
                                            <h2>Recommended songs</h2>
                                        </div>
                                        <p style={{color:'gray',fontSize:'12px'}}>Music based on what’s playing</p>
                                    </div>
                                    <div style={{marginTop:'20px'}}>
                                        <QueueTable Data={RecommendedSongs?[...RecommendedSongs?.Data]:[]} />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>
        </div>

    )
}


export default Queue;