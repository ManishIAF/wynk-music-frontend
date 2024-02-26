import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import convertString from '../helper/convertString'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/select.css'
import Banner from './Banner';

const NavBar = ()=> {

    const navigate = useNavigate()
    const [Params,setParams] = useState(null)

    return (
        <div style={{display:'flex',justifyContent:'space-between',background: '#0B0F14'}}>
            
            <nav className="navbar" style={{/*padding:'25px 78px',*/paddingTop:'25px',paddingBottom:'25px',paddingLeft:'78px'}}>
                <ul>
                    <li>
                        <p className='underline' onClick={()=>navigate('/')}>
                            All
                        </p>
                    </li>
                    <li>
                        <p 
                            className='underline'
                            onClick={()=>{
                                navigate(`/package/${convertString("Party Songs")}/65d13584bbc5d7e355c0cd04`)
                            }}
                        >
                            Trending Now
                        </p>
                    </li>
                    <li>
                        <p>
                            Old Songs
                        </p>
                    </li>
                    <li className='underline' onClick={()=>{navigate(`/albums/${convertString('New Releases')}/65d10c473650d45059cbcbbb`)}}>
                        <p>
                            New Songs
                        </p>
                    </li>
                    <li className='underline'>
                        <p onMouseEnter={()=>setParams({show:true})} style={{display:'flex',alignItems:'center' }}>
                            Moods & Genre
                            <KeyboardArrowDownIcon />
                        </p>
                        {Params?.show&&<ul style={{lineHeight:'40px',paddingBottom:'10px'}}>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString('Party Songs')}/65b4fdcfa4175fa7fad6cd20`,)}
                                >
                                    <p>Party Songs</p>
                                </li>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString('Dance Songs')}/65b4fdcfa4175fa7fad6cd22`)}
                                >
                                    <p>Dance Songs</p>
                                </li>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString('Bollywood Songs')}/65b4fdcfa4175fa7fad6cd24`)}
                                >
                                    <p>Bollywood Songs</p>
                                </li>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString('Romantic Songs')}/65b4fdcfa4175fa7fad6cd26`)}
                                >
                                    <p>Romantic Songs</p>
                                </li>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString("90's Hits")}/65b4fdcfa4175fa7fad6cd28`)}
                                >
                                    <p>90's Hits</p>
                                </li>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString("Ghazals")}/65b4fdcfa4175fa7fad6cd2a`)}
                                >
                                    <p>Ghazals</p>
                                </li>
                                <li 
                                    onClick={()=>navigate(`/playlist/${convertString("Bhakti Songs")}/65b4fdcfa4175fa7fad6cd2c`)}
                                >
                                    <p>Bhakti Songs</p>
                                </li>
                        </ul>}
                    </li>
                    <li className='underline'>
                        <p 
                        onMouseEnter={()=>setParams({show:true})} 
                        style={{ display: 'flex', alignItems: 'center'}}
                        >
                            Top Albums
                            <KeyboardArrowDownIcon />
                        </p>
                        {Params?.show&&<ul style={{position:'absolute',lineHeight:'40px',paddingBottom:'10px',right:'20rem',width:'200px'}}>
                            <li 
                                onClick={()=>{navigate(`/albums/${convertString('Hindi')}/65d0c007e0b56e9e78655f8b`)}}
                            >
                                <p>Top Hindi Albums</p>
                            </li>
                            <li
                                onClick={()=>{navigate(`/albums/${convertString('English')}/65d107571bd4e132eac11eb4`)}}
                            >
                                <p>Top English Albums</p>
                            </li>
                            <li
                                onClick={()=>{navigate(`/albums/${convertString('Telugu')}/65d108cf25e544922157c331`)}}
                            >
                                <p>Top Telugu Albums</p>
                            </li>
                            <li
                                onClick={()=>{navigate(`/albums/${convertString('Tamil')}/65d109e65f91426586da8ea6`)}}
                            >
                                <p>Top Tamil Albums</p>
                            </li>
                        </ul>}
                    </li>
                    <li onClick={()=>navigate(`/artists/${convertString('Top Artists')}/65d5f7f0fd6310c5b4ddd148`,{state:{Title:'Top Artists',uri:'artists/topArtists',path:'artist'}})}>
                        <p className='underline'>Top Atrists</p>
                    </li>
                    <li className='underline'>
                        <p onMouseEnter={()=>setParams({show:true})} style={{ display: 'flex', alignItems: 'center' }}>
                            Top Playlists
                            <KeyboardArrowDownIcon />
                        </p>
                        {Params?.show&&<ul style={{lineHeight:'40px',paddingBottom:'10px',width:'200px',right:'4.5rem'}}>
                            <li
                                onClick={()=>navigate(`/playlist/${convertString("Wynk Top 100")}/65b4fc6361bbc3315b784354`)}
                            >
                                <p>Wynk Top 100 Songs</p>
                            
                            </li>
                            <li 
                                onClick={()=>navigate(`/playlist/${convertString("Weekly Top 20: English")}/65b4fc6361bbc3315b784356`)}
                            >
                                <p>Top English Songs</p>
                            
                            </li>
                            <li
                                onClick={()=>navigate(`/playlist/${convertString("Descovered on Reels")}/65b4fc6361bbc3315b78435e`)}
                            >
                                <p>Trending Reels Songs</p>
                            
                            </li>
                            <li
                                onClick={()=>navigate(`/playlist/${convertString("100 Greatest Romantic Hits – Bollywood")}/65b4fdcfa4175fa7fad6cd26`)}
                            >
                            
                                <p>Top Romantic Hits</p>
                            
                            </li>
                        </ul>}
                    </li>
                    <li>
                        <p 
                            className='underline' 
                            onClick={()=>{

                                setParams({path : 'trending/hindi' , navLink:`/package/${convertString('Tranding In Hindi')}`})
                                
                            }}
                        >
                            
                            Podcasts

                        </p>
                    </li>
                </ul>
            </nav>
            <Banner />
        </div>
    )
}

export default NavBar