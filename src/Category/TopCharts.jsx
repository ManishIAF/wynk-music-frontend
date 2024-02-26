import React from 'react'
import CategoryContainer from '../components/CategoryContainer'

import useFetch from '../customComponent/fetch'

function TopCharts() {

  const [{apiData:Data,isLoading}] = useFetch('lists/Top Charts')
  return (
    <CategoryContainer
      play={true} 
      apiData={Data?.Data} 
      Title={Data?.Title} 
      Id = {Data?._id}
      path="list" 
      isLoading={isLoading}
      interval={6} 
    />
  )
}

export default TopCharts