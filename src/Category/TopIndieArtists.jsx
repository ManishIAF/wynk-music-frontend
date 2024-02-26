import CategoryContainer from '../components/CategoryContainer'

import useFetch from '../customComponent/fetch'

function TopIndieArtists() {

  const [{apiData:Artists,isLoading}] = useFetch('artists/title/Top Indie Artist')

  return (
    <CategoryContainer 
      apiData={Artists?.Data} 
      Title={Artists?.title}
      path='artists'
      Id={Artists?._id} 
      borderradiue = "50%"
      isLoading={isLoading} 
      interval={6}
    />
  )
}

export default TopIndieArtists