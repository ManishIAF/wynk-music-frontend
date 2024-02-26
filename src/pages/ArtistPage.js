import {useState,useRef} from 'react'
import Image from '../components/Image'
import convertToTitleCase from '../helper/convertToTitleCase'
import { Button } from "@mui/material"
import PlayArrow from "@mui/icons-material/PlayArrow"
import Avatar from '@mui/material/Avatar';
import {green} from '@mui/material/colors';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddIcon from '@mui/icons-material/Add';

import TableBody from "../components/TableBody"
import TableAdditionalHeader from "../components/TableAdditionalHeader"
import TableMainHeader from "../components/TableMainHeader"

import { IndicatorData } from '../DataContext/IndicatorContext';
import SongMoreOPtionMenu from '../components/SongMoreOPtionMenu';
import HeaderMoreOptions from '../fakeData/HeaderMoreOptions';
import useFetch from '../customComponent/fetch';

import {useParams} from "react-router-dom";
import RecommendedSongs from '../components/RecomendedSongs'
import MiniAbout from '../components/MiniAbout'

function ArtistPage() {

  const {name} = useParams()
  const miniAboutRef = useRef(null);
  const modifiedArtistName = convertToTitleCase(name);

  const {setIndicator} = IndicatorData()

  const [Open,setOpen] = useState(false)
  
  const [{apiData:artistInfo}] = useFetch(`artists/artistsinfo/${modifiedArtistName}`,{skip:!modifiedArtistName})
  const [{apiData:songs,isLoading}] = useFetch(`artists/artistssongs/${modifiedArtistName}`,{skip:!modifiedArtistName})

  const handleShowMoreClick = () => {
    if (miniAboutRef.current) {
      miniAboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const Action =  <div style={{display:'flex',width:'300px'}}>
                    <Button style={{borderRadius:'20px',height:'42px',backgroundImage: 'linear-gradient(180deg,#ff8d76 0,#ff0c55)'}} variant="contained">
                        <PlayArrow/><p style={{fontSize:'12px'}}>Play Songs</p>
                    </Button>
                    <Button style={{marginLeft:'10px',borderRadius:'20px',borderColor:'#eee' , color:'#eee'}} variant="outlined">
                        <AddIcon /> <p style={{fontSize:'12px'}}>Follow</p>
                    </Button>
                  </div>


  const Download = <div style={{float:'right'}}>
                      <div style={{display:'flex',justifyContent:'center',border:'1px solid #eee',borderRadius:'50%',width:'40px',height:'40px'}}>
                          <FileDownloadOutlinedIcon onClick={()=>setIndicator({linkIndicator:true})} style={{cursor:'pointer',width:'30px',height:'30px',paddingTop:'2px',color:'#eee'}} />
                      </div>
                  </div>
  
  const More = <div style={{display:'flex',justifyContent:'center',cursor:'pointer',border:'1px solid #eee',borderRadius:'50%',width:'40px',height:'40px'}}>
                  {Open&&<SongMoreOPtionMenu queueData={songs?.length>=1?[...songs?.slice(0,20)]:[]} MarginTop='70px' MarginRight='120px' Width='190px' Height='185px' Data={HeaderMoreOptions()} fun={setOpen} />}
                  <MoreVertOutlinedIcon onClick={()=>setOpen(true)} style={{width:'30px',height:'30px',paddingTop:'5px',color:'#eee'}}/>
                </div>

  return (
    <div style={{width:'100%',gap:'50px',paddingLeft:'95px',paddingTop:'10px'}}>
      <div style={{display:'flex',justifyContent:'center',width:'100%',gap:'50px'}}>
        <div>
          <div>
            <p style={{fontSize:'10px'}}>Home . Playlists . Fresh Arrivals- Hindi</p>
          </div>
          <div style={{paddingTop:'30px'}}>
            {artistInfo?.img?<Image imageData={artistInfo?.img} imageWidth='250px' imageHeight='250px' imageBorderRadius='50%' />:
            <Avatar sx={{ bgcolor: green[500],width:250,height:250,borderRadius:50}} variant="rounded">
              <p style={{fontSize:'100px'}}>{modifiedArtistName.split(' ').map((name)=>name.charAt(0)).join('')}</p>
            </Avatar>}
            {(artistInfo?.About||artistInfo?.bio)&&<div style={{width:'250px',marginTop:'25px'}}>
              <h2 style={{fontSize:'1.25rem',lineHeight:'1.75rem',fontWeight:500}}>About {modifiedArtistName}</h2>
              <div>
                <p style={{fontSize:'0.875rem',lineHeight:'1.25rem',fontWeight:500,color:'gray'}}>
                  <span>{artistInfo?.About?artistInfo?.About?.slice(0, 150):artistInfo?.bio?.slice(0, 150)}</span> 
                  <span onClick={handleShowMoreClick} style={{fontSize:'0.9rem',fontWeight:700,cursor:'pointer'}}> ...Show More</span>
                </p>
              </div>
            </div>}
          </div>
        </div>
        <div className='container' style={{padding:'10px',paddingTop:'40px',paddingRight:'80px'}}>
          <div>
            <div>
              <h1 style={{fontSize:'35px'}}>{artistInfo?.Name?artistInfo?.title:modifiedArtistName}</h1>
              <p style={{fontSize:'12px',color:'gray',paddingTop:'5px'}}>
                14.5 L Followers
              </p>
            </div>
            <div style={{paddingTop:'15px'}}>
              <table>
                <TableAdditionalHeader TableAdditionalHeaderData={[Action,'','','',Download,More]} />
                <h4 style={{paddingTop:'40px',paddingBottom:'10px',fontSize:'20px'}}>
                  {modifiedArtistName+" Songs"}
                </h4>
                <TableMainHeader TableMainHeaderData={[{symbol:'#',Text:'Track'},'Artist','Album','Duration']} />
                <TableBody style={{paddingTop:'20px'}} Data={songs?songs:[]} isLoading={isLoading}/>
              </table>
            </div>
          </div>
        </div>
    </div>
      <div ref={miniAboutRef}>
        <RecommendedSongs />
        {(artistInfo?.About||artistInfo?.bio)&&
          <MiniAbout image={artistInfo.img} Data={[
            {
                title:`About ${modifiedArtistName}`,
                content:[
                    artistInfo?.About?artistInfo?.About:artistInfo?.bio
                ]
            }
          ]}/>
        }
    </div>
    </div>
  )
}

export default ArtistPage