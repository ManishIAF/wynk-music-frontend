import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import convertString from '../helper/convertString'
import Image from '../components/Image'

import { SongDataContext } from '../DataContext/SongDataContext'

import { Button } from "@mui/material"
import PlayArrow from "@mui/icons-material/PlayArrow"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import TableBody from "../components/TableBody"
import TableAdditionalHeader from "../components/TableAdditionalHeader"
import TableMainHeader from "../components/TableMainHeader"

import { IndicatorData } from '../DataContext/IndicatorContext'
import HeaderMoreOptions from '../fakeData/HeaderMoreOptions'
import SongMoreOPtionMenu from '../components/SongMoreOPtionMenu'
import {useParams} from "react-router-dom";
import useFetch from '../customComponent/fetch'
import MiniAbout from '../components/MiniAbout'
import RecommendedSongs from '../components/RecomendedSongs'

import CategoryContainer from '../components/CategoryContainer'
import convertToTitleCase from '../helper/convertToTitleCase'

function AlbumPage() {

  const {id} = useParams()

  const [Open,setOpen] = useState(false)
  const [AlbumData,setAlbumData] = useState([])
  const {setIndicator} = IndicatorData()
  const {setSong} = SongDataContext()

  const [{apiData}] = useFetch(`album/${id}`,{skip:!id})
  
  const [{apiData:catagoryData}] = useFetch(`lists/Top ${convertToTitleCase(apiData?.language)} Albums`,{skip:!apiData?.language})

  const navigate = useNavigate()
  

  useEffect(() => {
    if(apiData){
      setAlbumData(apiData?.Song_Ids)
    }
  }, [apiData])

  const uniqueArtists = [...new Set(AlbumData.flatMap(item => item.artist))];

  const songData = []

        const Action = <div>
                          <Button onClick={()=>setSong(songData[0])} style={{borderRadius:'20px',height:'42px',backgroundImage: 'linear-gradient(180deg,#ff8d76 0,#ff0c55)'}} variant="contained">
                              <PlayArrow/><p style={{fontSize:'12px'}}>Play Songs</p>
                          </Button>
                      </div>


        const Download = <div style={{float6:'right'}}>
                            <div style={{display:'flex',justifyContent:'center',width:'40px',height:'40px',border:'1px solid #eee',borderRadius:'50%',padding:'5px'}}>
                              <FileDownloadOutlinedIcon onClick={()=>setIndicator({linkIndicator:true})} style={{cursor:'pointer',width:'30px',height:'30px',paddingTop:'2px',color:'#eee'}} />
                            </div>
                          </div>
        
        const More = <div>
                        <div style={{display:'flex',cursor:'pointer',justifyContent:'center',border:'1px solid #eee',borderRadius:'50%',width:'40px',height:'40px'}}>
                          {Open&&<SongMoreOPtionMenu queueData={[...AlbumData?.slice(0,20)]} MarginTop='70px' MarginRight='120px' Width='190px' Height='185px' Data={HeaderMoreOptions()} fun={setOpen} />}
                          <MoreVertOutlinedIcon onClick={()=>setOpen(true)} style={{width:'30px',height:'30px',paddingTop:'5px',color:'#eee'}}/>
                        </div>
                      </div>

  return (
    <div style={{width:'100%',paddingLeft:'95px',paddingTop:'10px'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
          <div>
            <div>
              <p style={{fontSize:'10px'}}>Home . Playlists . Fresh Arrivals- Hindi</p>
            </div>
            <div style={{paddingTop:'25px'}}>
              <Image imageData={AlbumData[0]?.img} imageWidth='240px' imageHeight='240px' imageBorderRadius='7px' />
            </div>
          </div>
          <div className='container' style={{padding:'60px',paddingTop:'35px'}}>
            <div>
              <div>
                <h1>{AlbumData[0]?.album}</h1>
                <p style={{fontSize:'12px',color:'gray',paddingTop:'10px',paddingBottom:'10px'}}>
                  100 Songs • 1 h 8 min
                </p>
              </div>
              <div>
                <table>
                  <TableAdditionalHeader TableAdditionalHeaderData={[Action,'','',Download,More]} />
                  <TableMainHeader TableMainHeaderData={[{symbol:'#',Text:'Track'},'Artist','Duration']} />
                  <TableBody style={{paddingTop:'20px'}} Data={AlbumData} setSong={setSong} />
                </table>
              </div>
            </div>
          </div>
      </div>
      <div>
        {catagoryData&&<CategoryContainer apiData={catagoryData?.Data} Id={catagoryData?._id} Title={catagoryData?.Title} path="albums" interval={6} upperLimit={24} />}
      </div>
      <RecommendedSongs/>
      <MiniAbout image={AlbumData[0]?.img} Data={[
        {
            title:'About Album',
            content:[
                <p>
                    Love listening to music that goes with all your mood? Tune into the Midnights with <span>{AlbumData?.length}</span> trending songs that let you enjoy diverse 
                    genres of music. The melodic voice of artists like which are sung by artists like <span>{uniqueArtists.map((artist,index)=><span key={index} onClick={()=>navigate(`/artist/${convertString(artist)}`,{state:{Artist:artist}})} className="arthover" style={{ cursor:'pointer' }}>{artist}{index<uniqueArtists?.length-1&&','}</span>)}</span> that makes Midnights album a “go-to-medicine” for your different types of moods. Wynk Music lets you play MP3 songs of Midnights online for free or you can download songs for offline listening.
                </p>,
                'Engross yourself into the best Midnights songs on Wynk music and create your own multiverse of madness by personalized playlist for a seamless experience. Look out for all the new album releases on Wynk and Keep Wynking!!'
            ]
        }
      ]} />
    </div>
  )
}

export default AlbumPage