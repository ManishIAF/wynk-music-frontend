import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import MiniAbout from '../components/MiniAbout'
import Image from '../components/Image'

import { SongDataContext } from '../DataContext/SongDataContext'
import convertString from '../helper/convertString'

import { Button } from "@mui/material"
import PlayArrow from "@mui/icons-material/PlayArrow"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import AddIcon from '@mui/icons-material/Add';

import TableBody from "../components/TableBody"
import TableAdditionalHeader from "../components/TableAdditionalHeader"
import TableMainHeader from "../components/TableMainHeader"

import SongMoreOPtionMenu from '../components/SongMoreOPtionMenu'
import HeaderMoreOptions from '../fakeData/HeaderMoreOptions'

import { IndicatorData } from '../DataContext/IndicatorContext'

import {useParams} from "react-router-dom";

import useFetch from '../customComponent/fetch'
import RecommendedSongs from '../components/RecomendedSongs'

function Package() {

  const {Id} = useParams()
  const navigate = useNavigate()
  const {setIndicator} = IndicatorData()
  const {setSong} = SongDataContext()

  const [Open,setOpen] = useState(false);

  const [{apiData}] = useFetch(`package/byId/${Id}`,{skip:!Id});
  const {Data,...PackageInfo} = apiData?apiData:{Data:[],PackageInfo:{}};

        const Action = <div style={{display:'flex',width:'300px'}}>
                          <Button onClick={()=>setSong(Data[0])} style={{borderRadius:'20px',height:'42px',backgroundImage: 'linear-gradient(180deg,#ff8d76 0,#ff0c55)'}} variant="contained">
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
                        {Open&&<SongMoreOPtionMenu queueData={[...Data?.slice(0,20)]} MarginTop='70px' MarginRight='120px' Width='190px' Height='185px' Data={HeaderMoreOptions()} fun={setOpen} />}
                        <MoreVertOutlinedIcon onClick={()=>setOpen(true)} style={{width:'30px',height:'30px',paddingTop:'5px',color:'#eee'}}/>
                      </div>

  return (
    
    <div style={{width:'100%',paddingLeft:'95px',paddingTop:'10px'}}>
      <div style={{display:'flex',justifyContent:'center',gap:'50px'}}>
        <div>
          <div>
            <p style={{fontSize:'10px'}}>Home . Playlists . Fresh Arrivals- Hindi</p>
          </div>
          <div style={{paddingTop:'30px'}}>
            <Image imageData={PackageInfo?.img} imageWidth='210px' imageHeight='210px' imageBorderRadius='7px' />
          </div>
        </div>
        <div className='container' style={{padding:'10px',paddingTop:'40px',paddingLeft:'40px',paddingRight:'80px'}}>
          <div>
            <div style={{paddingLeft:'10px'}}>
              <h1>{PackageInfo?.title}</h1>
              <p style={{fontSize:'12px',color:'gray',paddingTop:'5px'}}>
                {Data?.length} Songs
              </p>
            </div>
            <div style={{paddingTop:'15px'}}>
              <table>
                <TableAdditionalHeader TableAdditionalHeaderData={[Action,'','','',Download,More]} />
                <TableMainHeader TableMainHeaderData={[{symbol:'#',Text:'Track'},'Artist','Album','Duration']} />
                <TableBody style={{paddingTop:'20px'}} Data={Data?Data:[]}/>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div>
        <RecommendedSongs />
      </div>
      <div>
        <MiniAbout image={PackageInfo?.img} Data={[
          {
              title:'About Package',
              content:[
                <p>
                  Our package <span style={{fontWeight:'bolder',fontSize:'15px',color:'whitesmoke'}}>{PackageInfo?.title}</span> features a diverse collection of songs in mp3 format, ready for you to download and enjoy without any charges or FREE of cost. With a mix of old favourites and new hits, there's something for everyone. Whether you're looking for the latest chartbuster songs or some classic tracks, our <span style={{fontWeight:'bolder',fontSize:'15px',color:'whitesmoke'}}>{PackageInfo?.title}</span> playlist has got you covered.
                </p>,
                <p>
                  The package <span style={{fontWeight:'bolder',fontSize:'15px',color:'whitesmoke'}}>{PackageInfo?.title}</span> has a total number of top <span style={{fontWeight:'bolder',fontSize:'15px',color:'whitesmoke'}}>{Data?.length}</span> songs. We covered all the popular or hit songs under <span style={{fontWeight:'bolder',fontSize:'15px',color:'whitesmoke'}}>{PackageInfo?.title}</span>, so that it can fulfil the theme, style or mood you have selected.
                </p>,
                <p>
                    At Wynk Music, creating a playlist of songs can be a fun and enjoyable task, as it allows you to curate a collection of songs that you love and that fit a certain theme or mood. Whether you're making a playlist for <span onClick={()=> navigate(`/playlist/${convertString("Party Songs")}/65b4fdcfa4175fa7fad6cd20`)} className="arthover" style={{cursor:'pointer'}} >party</span>, <span onClick={()=> navigate(`/playlist/${convertString("Romantic Songs")}/65b4fdcfa4175fa7fad6cd26`)} className="arthover" style={{cursor:'pointer'}} >Romance</span>, <span onClick={()=> navigate(`/playlist/${convertString("Bhakti Songs")}/65b4fdcfa4175fa7fad6cd2c`)} className="arthover" style={{cursor:'pointer'}} >devotional songs</span> or just for your own listening pleasure, we have got you covered for everything. Download the mp3 files and add them to your own music library today. Happy listening!
                </p>,
              ]
          }
        ]} />
      </div>
    </div>
  )
}

export default Package