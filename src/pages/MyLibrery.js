import { useNavigate} from "react-router-dom"
import convertString from "../helper/convertString"
import Card from "../components/Card"

import useFetch from "../customComponent/fetch"
import filterDuplicateSongs from "../helper/filterDuplicateSongs"
import CategoryContainer from "../components/CategoryContainer"

const MyLibrery = () => {

    const navigate = useNavigate()
    const [{apiData:Data}] = useFetch(`userplaylist`)
    const [{apiData:likedSongs}] = useFetch(`userplaylist/byName/Liked Songs`)

    const RecentlyPlayedSongs = localStorage.getItem('Recently Played Songs')?JSON.parse(localStorage.getItem('Recently Played Songs')):[]

    const filteredRecentlyPlayedSongs = filterDuplicateSongs(RecentlyPlayedSongs)

    const cardsPerRow = 6;
    const rows = Math.ceil(Data?.length / cardsPerRow);

    const rowsArr = Array.from({ length: rows }, (_, i) => i);

    return (
        <div style={{paddingLeft:'95px',paddingTop:'10px'}}>
            <h3 style={{fontSize:'37px'}}>My Playlists</h3>
            <div style={{marginTop:'30px'}}>
                <h2>My Playlists</h2>
                {Data&&rowsArr.map((row) => (
                    <div key={row} style={{ display: 'flex',gap:'25px',paddingTop:'20px'}}>
                        {Data?.slice(row * cardsPerRow, (row + 1) * cardsPerRow).map((data) => (
                            <div onClick={()=>{
                                if(data?.title === "Liked Songs"){
                                    navigate(`/my-music/${convertString(data?.title)}`)
                                }else {
                                    navigate(`/my-music/my-playlists/${convertString(data?.title)}/${data?._id}`)
                                }
                            }}>
                                <Card 
                                    play={true}
                                    key={data?._id} 
                                    img={data?.title === "Liked Songs"?"https://img.wynk.in/unsafe/60x60/filters:no_upscale():strip_exif():format(webp)/https://wynk-music-cms.s3.ap-south-1.amazonaws.com/like_playlist/Round%403x.png":data?.img}
                                    imageWidth="172px"
                                    imageHeight="172px"
                                    imageBorderRadius={data?.title === "Liked Songs"?"50%":"10px"}
                                    infoOne={data?.title}
                                />
                            </div>
                        ))}
                    </div>
                ))}
                {
                    !Data&&
                        <div style={{paddingTop:'20px'}} onClick={()=>navigate('/my-music/Liked Songs')}>
                            <Card 
                                    play={true}
                                    img="https://img.wynk.in/unsafe/60x60/filters:no_upscale():strip_exif():format(webp)/https://wynk-music-cms.s3.ap-south-1.amazonaws.com/like_playlist/Round%403x.png"
                                    imageWidth="172px"
                                    imageHeight="172px"
                                    imageBorderRadius="50%"
                                    infoOne="Liked Songs"
                                />
                        </div>
                }
            </div>
            {filteredRecentlyPlayedSongs&&<div style={{marginTop:'60px'}}>
                <CategoryContainer play={true} Title='Recently Played Songs' title="Recently Played" path='my-music' apiData={filteredRecentlyPlayedSongs} interval={6}/>
            </div>}
            {likedSongs?.songIds&&<div style={{marginTop:'60px'}}>
                <CategoryContainer play={true} Title='Liked Songs' title="Liked Songs" path='my-music' apiData={likedSongs?.songIds} interval={6}/>
            </div>}
        </div>
    );
}

export default MyLibrery