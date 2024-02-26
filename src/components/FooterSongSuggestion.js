import { useNavigate } from "react-router-dom";
import useFetch from "../customComponent/fetch";
import convertString from "../helper/convertString";

import { SongDataContext } from "../DataContext/SongDataContext";

const FooterSongSuggestion = () => {

    const {setSong} = SongDataContext()

    const [{apiData:newReleasesData}] = useFetch('lists/New Releases')
    const [{apiData:LatestSongs}] = useFetch('package/byName/Latest Hindi')
    const [{apiData:TrendingSongs}] = useFetch('package/byName/Trending in Hindi')
    const [{apiData:IndieArtists}] = useFetch('artists/title/Top Indie Artist')
    const [{apiData:TopCharts}] = useFetch('lists/Top Charts')
    const [{apiData:GENRES}] = useFetch('lists/Moods And Genre')
    const [{apiData:TopArtist}] = useFetch('artists/title/Top Artist')
    
    const navigate = useNavigate()
    
    return(
        <div style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr 1fr 1fr',
            rowGap:'50px',
            columnGap:'25px',
            paddingLeft:'90px',
            paddingRight:'90px',
            paddingTop:'50px'
        }}>

            <div>
                <h5>
                    LATEST ALBUMS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {newReleasesData?.Data?.map(({_id,title},index)=>{
                        return(
                            <span key={index} className="FooterHeader" onClick={()=>navigate(`album/${convertString(title)}/${_id}`)}>
                                {title} {newReleasesData?.Data?.length - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>
            </div> 
            <div>
                <h5>
                    EXPLORE MUSIC GENRES
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {GENRES?.Data?.map(({_id,title},index)=>{
                        return(
                            <span key={index} className="FooterHeader" onClick={()=>navigate(`playlist/${convertString(title)}/${_id}`)}>
                                {title} {newReleasesData?.Data?.length - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>

            </div> 
            <div>
                <h5>
                    TOP INDIE ARTISTS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {IndieArtists?.Data?.slice(0,15)?.map(({_id,title},index)=>{
                        return(
                            <span key={index} className="FooterHeader" onClick={()=>navigate(`artist/${convertString(title)}`)}>
                                {title} {15 - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>
            </div> 
            <div>
                <h5>
                    TOP ARTISTS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {TopArtist?.Data?.slice(0,15)?.map(({Name},index)=>{
                        return(
                            <span key={index} className="FooterHeader" onClick={()=>navigate(`artist/${convertString(Name)}`)}>
                                {Name} {15 - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>
            </div> 
            <div>
                <h5>
                    LATEST SONGS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {LatestSongs?.Data?.slice(0,15)?.map((song,index)=>{
                        return(
                            <span key={index} className="FooterHeader" onClick={()=>setSong(song)}>
                                {song?.title} {15 - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>
            </div> 
            <div>
                <h5>
                    TRENDING SONGS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {TrendingSongs?.Data?.slice(0,15)?.map((song,index)=>{
                        return(
                            <span key={index} className="FooterHeader" onClick={()=>setSong(song)}>
                                {song?.title} {15 - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>
            </div> 
            <div>
                <h5>
                    TOP CHARTS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    {TopCharts?.Data?.slice(0,15)?.map(({_id,title},index)=>{
                       return(
                            <span key={index} className="FooterHeader" onClick={()=>navigate(`playlist/${convertString(title)}/${_id}`)}>
                                {title} {15 - 1 > index&&'| '} 
                            </span>
                        )
                    })}
                </p>
            </div> 
            <div>
                <h5>
                    WYNK TOP HITS
                </h5>
                <p style={{fontSize:'12px',color:'gray',gap:'10px',lineHeight:'25px',marginTop:'15px'}}>
                    
                    <span className="FooterHeader" onClick={()=>navigate(`playlist/${convertString('Top 20 Bollywood Songs')}/65b4fc6361bbc3315b78435a`)}>
                        Top 20 Bollywood Songs |   
                    </span>
                    <span className="FooterHeader" onClick={()=>navigate(`playlist/${convertString('Wynk Top 100 Songs')}/65b4fc6361bbc3315b784354`)}>
                        Wynk Top 100 Songs |   
                    </span>
                    <span className="FooterHeader" onClick={()=>navigate(`playlist/${convertString(' Top 20 English Songs')}/65b4fc6361bbc3315b784356`)}>
                        Top 20 English Songs |   
                    </span>
                    <span className="FooterHeader" onClick={()=>navigate(`playlist/${convertString('Trending Reels Songs')}/65b4fc6361bbc3315b78435e`)}>
                        Trending Reels Songs  
                    </span>
                    
                </p>
            </div> 
            <div>
                <h5>
                    Top Albumss
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    <span className="FooterHeader" onClick={()=>navigate(`albums/${convertString('Top Hindi Albums')}/65d0c007e0b56e9e78655f8b`)}>
                        Top Hindi Albums | 
                    </span>
                    <span className="FooterHeader" onClick={()=>navigate(`albums/${convertString('Top English Albums')}/65d107571bd4e132eac11eb4`)}>
                        Top English Albums |  
                    </span>
                    <span className="FooterHeader" onClick={()=>navigate(`albums/${convertString('Top Telugu Albums')}/65d108cf25e544922157c331`)}>
                        Top Telugu Albums |  
                    </span>
                    <span className="FooterHeader" onClick={()=>navigate(`albums/${convertString('Top Tamil Albums')}/65d109e65f91426586da8ea6`)}>
                        Top Tamil Albums | 
                    </span>
                </p>
            </div> 
            <div>
                <h5>
                    JOIN WYNK FOR ARTISTS
                </h5>
                <p style={{fontSize:'12px',color:'gray',lineHeight:'25px',marginTop:'15px'}}>
                    <span className="FooterHeader" onClick={()=>window.open("https://studio.wynk.in/", '_blank')}>Wynk Studio</span> | <span className="FooterHeader" onClick={()=>window.open("https://studio.wynk.in/artist", '_blank')}>Wynk Studio for Artists</span>
                </p>
            
            </div> 

        </div>
    )

};

export default FooterSongSuggestion;