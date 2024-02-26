import React from 'react'
import CategoryContainer from '../../components/CategoryContainer'

import useFetch from '../../customComponent/fetch';

function HindiTop50() {

  const [{apiData:packageData,isLoading}] = useFetch('package/byName/Hindi Top 50')
  
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

export default HindiTop50