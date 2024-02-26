import { useState } from "react"
// import CardBox from "./cardBox"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import SongMoreOptionMenu from "./SongMoreOPtionMenu";
import QueueMoreOptions from "../fakeData/QueueMoreOption";

import { IndicatorData } from "../DataContext/IndicatorContext";
import { SongDataContext } from "../DataContext/SongDataContext";
import { QueueData } from "../DataContext/QueueDataContext";
import PlayBox from "./PlayBox";

const QueueTable = ({Data}) =>{

    const {setIndicator} = IndicatorData()
    const {setQueueData,AddToQueue} = QueueData()
    const {setSong,Song} = SongDataContext()
    const [Id,setId] = useState(null)

    const [draggedItemIndex, setDraggedItemIndex] = useState(null);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('index', index);
        setDraggedItemIndex(index);
    };      

    const handleDragOver = (e, index) => {
        e.preventDefault();
        if (index !== draggedItemIndex) {
            const newList = [...Data];
            const draggedOverItem = newList[index];
            newList[draggedItemIndex] = draggedOverItem;
            newList[index] = Data[draggedItemIndex];
            setQueueData(newList);
            setDraggedItemIndex(index);
        }
    };

    const handleDragEnd = () => {
        setDraggedItemIndex(null);
    };

    return(

        <div style={{width:'100%'}}>
            <ul>
                {Data?.map((song,index)=>(
                    <li 
                        className={`QueueTableBorder`}
                        onClick={()=>{
                            if(Song?.id===song?.id&&Song?.status===true){
                                Song.pauseAudio()
                            }
                            if(Song?.id === song?.id&&Song?.status===false){
                                Song.playAudio()
                            }
                            if(Song?.id !== song?.id){
                                setSong(song);
                                AddToQueue([song]) 
                            } 
                        }}
                        draggable
                        onDragStart={(e)=>{handleDragStart(e,index)}}
                        onDragOver={(e)=>{handleDragOver(e,index)}}
                        onDragEnd={handleDragEnd}
                        style={{display:'flex',paddingTop:'5px',paddingBottom:'5px',position:'relative',cursor:'pointer',paddingRight:'25px',justifyContent:'space-between',alignItems:'center'}}
                    >
                        <div key={index}>
                            <div style={{display: 'flex',width:'100%',alignItems:'center'}}>
                                <span style={{display:'flex',paddingRight:'15px'}}>
                                    <svg style={{cursor:'row-resize',fontSize:'15px',fontWeight:'bolder'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                </span>
                                <PlayBox song={song} img={song?.img} want={true} imageWidth='55px' imageHeight='55px' imageBorderRadius='7px' />
                                <div>
                                    <div style={{lineHeight:'22px',marginLeft:'15px',cursor:'pointer'}}>
                                        <p style={{fontSize:'14px',width:'auto',color:'#eee',whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                            {song?.title}
                                        </p>
                                        <div className="arthover" style={{display: 'flex', whiteSpace: 'nowrap', width: 'auto',overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                            <div style={{display: 'flex',fontSize:'12px',cursor:'pointer'}}>
                                                {song?.artist?.map((art , index)=>
                                                    <p key={index}>
                                                        {art}
                                                        {index !== song?.artist?.length - 1 && ', '}
                                                    </p>
                                                )}
                                            </div>
                                            {song?.artist?.length >=1 &&'-'}
                                            <div style={{display: 'flex',fontSize:'11px',whiteSpace: 'nowrap',overflow: 'hidden', textOverflow: 'ellipsis'}}>
                                                {song?.album} 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{display:'flex'}}>
                            <div onClick={()=>setIndicator((prev)=>{return{...prev,linkIndicator:true}})} className="download" style={{marginRight:'15px'}}>
                                <FileDownloadOutlinedIcon style={{cursor:'pointer'}}/>
                            </div>
                            <div className="more" style={{ display:'flex'}}>
                                {song?.id === Id && <SongMoreOptionMenu queueData={[song]} ZIndex={15000} Width='190px' Height={Song?.id === song?.id?'262px':'302px'} fun={setId} Data={QueueMoreOptions(song?.id)} />}
                                <MoreVertIcon onClick={(e)=>{e.stopPropagation();setId(song?.id)}} style={{color:'white',cursor:'pointer',position:'absolute'}} />
                            </div>
                        </div>  
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default QueueTable