import React from 'react'
import CategoryContainer from '../components/CategoryContainer'

import useFetch from '../customComponent/fetch'

function NewReleases() {

  const [{apiData:Data,isLoading}] = useFetch(`lists/New Releases`)
  return (
    <CategoryContainer 
      play={true}
      apiData={Data?.Data} 
      path='albums'
      Id = {Data?._id}
      Title={Data?.Title} 
      isLoading={isLoading}
      interval={6}
    />
  )
}

export default NewReleases