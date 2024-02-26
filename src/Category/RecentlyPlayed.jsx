import {useEffect,useState} from 'react'
import CategoryContainer from '../components/CategoryContainer'
import filterDuplicateSongs from '../helper/filterDuplicateSongs'
function RecentlyPlayed() {

  const [Data,setData] = useState([])

  
  const RecentPlayedSongs = JSON.parse(localStorage.getItem('Recently Played Songs'))?filterDuplicateSongs(JSON.parse(localStorage.getItem('Recently Played Songs'))):[]
  useEffect(() => {
    if(RecentPlayedSongs){
      setData(RecentPlayedSongs)
    }
  }, [])

  return (
    <>
      {(RecentPlayedSongs?.length !== 0) && 
        <CategoryContainer 
          play={true}
          other={true}
          condition={true}
          apiData={Data}
          imageWidth='137px'
          imageHeight='135px'
          Title='Recently Played Songs' 
          path='my-music'
          interval={6}
        />
      }
    </>
  )
}

export default RecentlyPlayed