import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import convertString from '../helper/convertString'
import useFetch from "../customComponent/fetch"
import { SongDataContext } from '../DataContext/SongDataContext';
import Loader from '../components/Loader';
import {IndicatorData} from '../DataContext/IndicatorContext'

import CategoryContainer from '../components/CategoryContainer';

const SearchTags = [
    {
        id:1,
        name:'Top Results',
        path:'Top Results'
    },
    {
        id:2,
        name:'Songs',
        path:'Song'
    },
    {
        id:3,
        name:'Albums',
        path:'album'
    },
    {
        id:4,
        name:'Artists',
        path:'artist'
    },
    {
        id:5,
        name:'Playlists',
        path:'playlist'
    },
    {
        id:4,
        name:'packages',
        path:'package'
    }
]

const SearchPage = ({searchInput,setSearch}) => {

    const {setSong} = SongDataContext()
    const {setIndicator} = IndicatorData() 
    const navigate = useNavigate();
    const [{apiData:Data}] = useFetch('package/byName/Trending in Hindi')

    const [Path,setPath] = useState('Song');
    const [myHistory,setMyHistory] = useState([])

    const [{apiData:searchData,isLoading}] = useFetch(`search/${Path==='Top Results'?'topsearch':Path}/${searchInput}`,{skip:!searchInput})

    const SearchHistory = JSON.parse(localStorage.getItem('SearchHistory')) ? [...JSON.parse(localStorage.getItem('SearchHistory'))] : []

    useEffect(()=>{
        setMyHistory(SearchHistory)
    },[SearchHistory])

    const handleSearchClick = (e,searchDatum) => {
        e.preventDefault();

        localStorage.setItem('SearchHistory',JSON.stringify([...SearchHistory,searchDatum]))

        if(Path==='Top Results'){
            navigate(`/${searchDatum?.type}/${searchDatum?.title}/${searchDatum?._id}`)
            setIndicator((prev)=>{return{...prev,searchIndicator:false}})
            setSearch('')
        }

        if(Path==='Song'){
            setSong(searchDatum)
            setIndicator((prev)=>{return{...prev,searchIndicator:false}})
            setSearch('')
        }
        
        if(Path==='album'){
            navigate(`/album/${convertString(searchDatum?.title)}/${searchDatum?._id}`)
            setIndicator((prev)=>{return{...prev,searchIndicator:false}})
            setSearch('')
        }
        
        if(Path==='artist'){
            navigate(`/artist/${convertString(searchDatum?.Name)}`)
            setIndicator((prev)=>{return{...prev,searchIndicator:false}})
            setSearch('')
        }

        if(Path==='playlist'){
            navigate(`/playlist/${convertString(searchDatum?.title)}/${searchDatum?._id}`)
            setIndicator((prev)=>{return{...prev,searchIndicator:false}})
            setSearch('')
        }
        
        if(Path==='package'){
            navigate(`/package/${convertString(searchDatum?.title)}/${searchDatum?._id}`)
            setIndicator((prev)=>{return{...prev,searchIndicator:false}})
            setSearch('')
        }
    }

    return (
        <div style={{display:'flex',top: '61.5%',left: '49.95%',transform: 'translate(-50%, -50%)','--tw-bg-opacity':1,backgroundColor:'rgba(12,15,18,var(--tw-bg-opacity))',position:'fixed',width:'100%',height:'100%',zIndex:1005,border:'none'}} onWheel={(e) => e.stopPropagation()}>
            <div style={{height:'100%',width:'100%'}}>
                {searchInput&&
                    <div>
                        <h2 style={{paddingLeft:'270px',marginTop:'25px'}}>
                            Search results for "{searchInput}"
                        </h2>
                        <div>
                            <div style={{marginTop:'40px'}}>
                                <div style={{display:'flex',paddingLeft:'290px',gap:'30px'}}> 
                                    {SearchTags.map(({id,name,path})=>{
                                        return<p key={id} onClick={()=>setPath(path)} style={{position: 'relative',marginBottom:'10px',cursor:'pointer','--tw-text-opacity': 1,color:path === Path ? 'rgba(250,50,53,var(--tw-text-opacity))':'gray'}}>
                                            {name}
                                            {path === Path && (
                                                <span
                                                    style={{
                                                        position: 'absolute',
                                                        bottom: '-10px',
                                                        left: 0,
                                                        width: '100%',
                                                        height: '2px',
                                                        backgroundColor: 'rgba(250, 50, 53, var(--tw-text-opacity))',
                                                    }}
                                                /> 
                                            )}
                                        </p>
                                    })}
                                </div>
                                <div style={{borderTop:'1px solid gray'}}></div>
                            </div>
                            <div style={{marginLeft:'270px',marginTop:'20px',height:'350px',width:'800px',overflow:'auto'}}>
                            {!isLoading?<div>
                                    {searchData?.length > 0?searchData?.map((searchDatum)=>{
                                        
                                        return(
                                            <div onClick={(e)=>handleSearchClick(e,searchDatum)} style={{display:'flex',width:'100%',cursor:'pointer',alignItems:'center',marginBottom:'40px'}}>
                                                <div>
                                                    <img src={searchDatum?.img} alt="" style={{width:'60px',height:'60px',borderRadius:Path==='artist'?'50%':'7px'}} />
                                                </div>
                                                <div style={{paddingLeft:'20px',lineHeight:'20px'}}>
                                                    <p style={{fontSize:'15px'}}>{Path === 'artist'?searchDatum?.Name:searchDatum?.title}</p>
                                                    {Path !== 'Top Results'&&<p style={{display:'flex',color:'gray',fontSize:'13px',gap:'5px'}}>
                                                        {Path}
                                                        <span style={{fontWeight:'bold',color:'white'}}>.</span>
                                                        {
                                                            searchDatum?.artist?.map((artist,index)=>{
                                                                return <span>
                                                                    {artist}{searchDatum?.artist?.length-2>index?',':searchDatum?.artist?.length-1>index&&' & '}
                                                                </span>
                                                            })
                                                        }
                                                    </p>}
                                                     {Path === 'Top Results'&&<p style={{display:'flex',color:'gray',fontSize:'13px'}}>
                                                         {searchDatum?.type}
                                                     </p>}
                                                </div>
                                            </div>
                                        )
                                    }):<p>No results found</p>}
                                </div>:<p style={{marginLeft:'15rem'}}><Loader /></p>}
                            </div>
                        </div>
                    </div>
                }

                {!searchInput&&
                    <div style={{padding:'20px 90px',height:'100%'}}>
                        {myHistory.length>0&&<div>
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <h3>Recent Searches</h3>
                                <p onClick={()=>localStorage.removeItem('SearchHistory')} style={{color:'red',cursor:'pointer'}}>Clear My Search History</p>
                            </div>
                            <div>
                                <CategoryContainer 
                                    play={true}
                                    apiData={SearchHistory}
                                    imageWidth = "170px"
                                    imageHeight="170px"
                                    interval={6}
                                />
                            </div>
                        </div>}
                        <div style={{marginTop:SearchHistory.length>0&&'50px'}}>
                            <div>
                                <h3>Trending Searches</h3>
                            </div>
                            <div>
                                <CategoryContainer 
                                    play={true}
                                    other={true}
                                    apiData={Data?.Data}
                                    imageWidth = "170px"
                                    imageHeight="170px"
                                    path='package'
                                    titlw="Trending Searches"
                                    interval={6}
                                />   
                            </div>
                        </div>             
                    </div>
                }
                
            </div>
        </div>
    )
}

export default SearchPage;