import {useState,useEffect} from "react";
import PlayBox from "./PlayBox"
import '../styles/table.css'
import { SongDataContext } from "../DataContext/SongDataContext"
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import convertString from "../helper/convertString";
import {useLocation,useNavigate} from "react-router-dom";
import TableDataSceleton from "./TableDataSceleton";
import SongMoreOptionMenu from "./SongMoreOPtionMenu";

import { IndicatorData } from "../DataContext/IndicatorContext";

import MoreVertIcon from '@mui/icons-material/MoreVert';
import SomeMoreOptions from '../fakeData/SongMoreOptions'
import { QueueData } from "../DataContext/QueueDataContext";

function TableBody({Data,isLoading}) {

    const {setIndicator} = IndicatorData()
    const {Song} = SongDataContext()
    const {AddOnlyOneToQueue} = QueueData()
    const {pathname} = useLocation()
    const [Id,setId] = useState(null)
    const [count,setCount] = useState(20)
    const navigate = useNavigate()


    const album = pathname?.split('/')?.includes('album')||pathname?.split('/')?.includes('Album')

    useEffect(()=>{setCount(20)},[Data])

    return (

        <tbody>
            {(isLoading ? Array.from(new Array(10)) : Data ).slice(0,count)?.map( (datum,index)=>(
                    datum?<tr key={datum?.id} onClick={()=>{
                            if(Song?.id===datum?.id&&Song?.status===true){
                                Song?.pauseAudio()
                            }
                            if(Song?.id === datum?.id&&Song?.status===false){
                                Song?.playAudio()
                            }
                            if(Song?.id !== datum?.id){
                                AddOnlyOneToQueue([datum]);
                            }}
                        }>
                        <td>
                            <div style={{display: 'flex',width:'310px'}}>
                                <span style={{fontSize:'10px',paddingRight:'15px',paddingTop:'15px'}}>{index+1}</span>
                                <PlayBox song={datum} img={datum?.img} want={true} imageWidth='50px' imageHeight='50px' imageBorderRadius='7px' />
                                <p style={{marginLeft:'10px',marginTop:'15px'}}><span className="underline">{datum?.title}</span></p>
                            </div>
                        </td>
                        <td>
                            <div  style={{display: '-webkit-box',maxWidth: '150px', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                                {datum?.artist?.map((Artist, index) => (
                                <p
                                    key={index}
                                    onClick={()=>{navigate(`/artist/${convertString(Artist)}`,{ state:{ Artist:Artist}})}}
                                    className="underline"
                                    style={{ display: 'inline' }}
                                >
                                    {Artist}
                                    {index !== datum?.artist?.length - 1 && ', '}
                                </p>
                                ))}
                            </div>
                        </td>
                        {!album&&<td>
                            <div style={{
                                maxWidth: '150px',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                whiteSpace: 'normal',
                            }}>
                                <p className="underline" onClick={()=>{if(datum?.album_id){navigate(`/album/${convertString(datum?.album)}/${datum?.album_id}`)} }}>
                                    <span>
                                        {datum?.album}
                                    </span>
                                </p>
                            </div>
                        </td>}
                        <td>
                            {datum?.duration?<span>{datum?.duration}</span>:<span>3:00</span>}
                        </td>
                        <td className="download">
                            <div><FileDownloadOutlinedIcon onClick={(e)=>{e.stopPropagation();setIndicator({linkIndicator:true})}} style={{cursor:'pointer',float:'right'}}/></div>
                        </td>
                        <td className="more" style={{ position: 'relative' }}>
                            <div style={{ display: 'flex', alignItems: 'center'}}>
                            
                                {datum?.id === Id && <SongMoreOptionMenu queueData={[datum]} MarginRight={album?'45px':'25'} Width='190px' Height='262px' fun={setId} Data={SomeMoreOptions()} />}
                                <MoreVertIcon onClick={(e)=>{e.stopPropagation();setId(datum?.id)}} style={{color:'white',cursor:'pointer',position:'absolute'}} />

                            </div>
                            
                        </td>
                    </tr>:<TableDataSceleton />
                ) 
            )}
            {!isLoading&&count<Data?.length&&
                <div style={{display:'flex',width:'250%',justifyContent:'center',marginTop:'30px',marginBottom:'50px'}}>
                    <Button 
                        variant="outlined" 
                        style={{marginLeft:'10px',width:'100px',height:'40px',textTransform: 'none',borderRadius:'20px',borderColor:'#eee' , color:'#eee'}} 
                        onClick={()=>setCount((prev)=>prev+20)}
                    >
                        <p style={{fontSize:'13px',flexShrink: 0}}>Show More</p>
                    </Button>
                </div>
            }
        </tbody>

    )
}

export default TableBody;

