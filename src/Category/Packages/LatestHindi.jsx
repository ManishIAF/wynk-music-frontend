import React from 'react'
import CategoryContainer from '../../components/CategoryContainer'

import useFetch from '../../customComponent/fetch';

function LatestHindi() {

  const [{apiData:packageData,isLoading}] = useFetch('package/byName/Latest Hindi')

  return (
    <CategoryContainer 
      play={true}
      other={true}
      apiData={packageData?.Data} 
      Id = {packageData?._id}
      path="package" 
      Title={packageData?.title}
      isLoading={isLoading}
      interval={8}
    />
  )
}

export default LatestHindi