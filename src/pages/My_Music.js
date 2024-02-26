import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { SongDataContext } from '../DataContext/SongDataContext'

import { Button } from "@mui/material"
import PlayArrow from "@mui/icons-material/PlayArrow"

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

import PlayBox from '../components/PlayBox'
import convertToTitleCase from '../helper/convertToTitleCase'
import filterDuplicateSongs from '../helper/filterDuplicateSongs'
import sortByMostRepeated from '../helper/SortMostRepeatedValue'

import { IndicatorData } from '../DataContext/IndicatorContext'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SongMoreOptionMenu from '../components/SongMoreOPtionMenu'
import SomeMoreOptions from '../fakeData/SongMoreOptions'

import useFetch from '../customComponent/fetch'
import useAuth from '../customComponent/useAuth'
import MiniAbout from '../components/MiniAbout'

function My_PlayListPage() {

  const {name} = useParams()
  const [{apiData:authValue}] = useAuth()
  const [Params,setParams] = useState('')
  const {setIndicator} = IndicatorData()
  const {Song,setSong} = SongDataContext()
  const [Id,setId] = useState(null)
  const [Data,setData] = useState([])

  const [{apiData}] = useFetch(`userplaylist/byName/${Params}`, {skip:!Params});

  const params = convertToTitleCase(name);

  const RecentlyPlayedSongs = localStorage.getItem('Recently Played Songs')?JSON.parse(localStorage.getItem('Recently Played Songs')):[]

  useEffect(() => {

    if(params !== 'Most Played Songs 🔥' || params !== 'Recently Played Songs'){
      setParams(params)
    }
    if(params === 'Recently Played Songs'){
      const songs = filterDuplicateSongs(RecentlyPlayedSongs)
      setData(songs)
    }else if(params === 'Most Played Songs 🔥'){
      const value = sortByMostRepeated(RecentlyPlayedSongs)
      setData(value)
    } else{
      setData(apiData?.songIds)
    }
  }, [params,Data,name,apiData?.songIds,authValue?.email]);


        const Action = <div style={{display:'flex',width:'300px'}}>
                          <Button onClick={()=>setSong(Data[0])} style={{borderRadius:'20px',height:'42px',backgroundImage: 'linear-gradient(180deg,#ff8d76 0,#ff0c55)'}} variant="contained">
                              <PlayArrow/><p style={{fontSize:'12px'}}>Play Songs</p>
                          </Button>
                          <Button style={{marginLeft:'10px',borderRadius:'20px',borderColor:'#eee' , color:'#eee'}} variant="outlined">
                              <FileDownloadOutlinedIcon /> <p style={{fontSize:'12px'}}>Download</p>
                          </Button>
                      </div>

        
        const More = <div style={{display:'flex',justifyContent:'center',border:'1px solid #eee',borderRadius:'50%',width:'40px',height:'40px'}}>
                        <MoreVertOutlinedIcon style={{width:'30px',height:'30px',paddingTop:'5px',color:'#eee'}}/>
                      </div>

  const gridColumn = ()=>{
    if(Data?.length === 1){
      return '1fr'
    }
    if(Data?.length === 2){
      return '1fr 1fr'
    }
    if(Data?.length === 3){
      return '1fr 1fr 1fr'
    }
    if(Data?.length >= 4){
      return '1fr 1fr'
    }
  }

  return (

    <div>
      {authValue?.email?Data?<div style={{display:'flex',justifyContent:'center',width:'100%',gap:'50px',paddingLeft:'95px'}}>
        <div style={{ display: 'grid', gridTemplateColumns: gridColumn(), gap: '0', width: '280px', height: '220px', borderRadius: '20px', overflow: 'hidden' }}>
          {Data?.slice(0, 4).map((item, index) => (
            <img
              key={index}
              src={item?.img}
              alt={`ggg-${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          ))}
        </div>
        <div className='container' style={{paddingLeft:'12px',paddingRight:'80px'}}>
          <div>
            <div style={{paddingLeft:'10px'}}>
              <h1 style={{fontSize:'33px'}}>{apiData?.title?apiData?.title:params}</h1>
              <p style={{fontSize:'11px',color:'gray',paddingTop:'15px'}}>
                {Data?.length} Songs
              </p>
            </div>
            <div style={{paddingTop:'15px',width:'100%'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div>
                    {Action}
                  </div>
                  <div>
                    {More}
                  </div>
                </div>
                <div style={{width:'100%',marginTop:'30px'}}>
                  <ul>
                      {Data?.map((song,index)=>(
                          <li 
                              className={`QueueTableBorder`}
                              onClick={()=>{
                                  setSong(song)
                                  if(Song?.id===song?.id&&Song?.status===true){
                                      Song.pauseAudio()
                                  }
                                  if(Song?.id === song?.id&&Song?.status===false){
                                      Song.playAudio()
                                  }
                              }}
                              style={{display:'flex',paddingTop:'5px',paddingBottom:'5px',position:'relative',cursor:'pointer',paddingRight:'25px',justifyContent:'space-between',alignItems:'center'}}
                            >
                              <div key={index}>
                                  <div style={{display: 'flex',width:'100%',alignItems:'center'}}>
                                      <div style={{paddingLeft:'10px'}}>
                                        <PlayBox song={song} img={song?.img} want={true} imageWidth='55px' imageHeight='55px' imageBorderRadius='7px' />
                                      </div>
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
                                      {song?.id === Id && <SongMoreOptionMenu queueData={[song]} Width='190px' Height='262px' fun={setId} Data={SomeMoreOptions()} />}
                                      <MoreVertIcon onClick={(e)=>{e.stopPropagation();setId(song?.id)}} style={{color:'white',cursor:'pointer',position:'absolute'}} />
                                  </div>
                              </div>  
                          </li>
                      ))}
                      
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>:
        <div style={{paddingLeft:'95px'}}>
          <MiniAbout Data={[
            {
              content:[
                  <div style={{display:'flex',marginLeft:'250px',color:'gray',width:'100%',height:'200px',alignItems:'center',lineHeight:'20px',justifyContent:'center'}}>
                    <div>
                      <p style={{display:'flex',justifyContent:'center'}}>Why so silent....</p>
                      <p>Play some music and come back</p>
                    </div>
                  </div>
              ]
            }
          ]} />
        </div>:<div style={{paddingLeft:'95px'}}>
          <h3>My Music</h3>
          <MiniAbout Data={[
            {
              content:[
                  <div Title='My Music' style={{display:'flex',color:'gray',width:'100%',height:'300px',alignItems:'center',lineHeight:'20px',justifyContent:'center'}}>
                    <div>
                      <div style={{marginLeft:'430px'}}>
                        <img src="https://wynk.in/_next/static/media/my-music-empty-state-dark.52dc551e.svg" alt="" style={{width:'150px',height:'150px'}} />
                      </div>
                      <div style={{marginLeft:'300px'}}>
                        <div>
                          <p style={{display:'flex',justifyContent:'center'}}>Looks like you are not logged in</p>
                          <p>Sign in and see this space getting updated for you. Keep Wynk-ing!</p>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                          <button onClick={()=>setIndicator((prev)=>{return{...prev,loginIndicator:true}})} style={{cursor:'pointer',width:'100px',height:'35px',color:'white',border:'none',marginTop:'30px',borderRadius:'20px',background:'linear-gradient(180deg,#ff8d76 0,#ff0c55)'}}>
                            Sign In
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              ]
            }
          ]} />
        </div>}
    </div>
  )
}

export default My_PlayListPage