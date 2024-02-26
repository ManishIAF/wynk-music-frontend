import CategoryContainer from '../../components/CategoryContainer'

import useFetch from '../../customComponent/fetch';

function LatinTopHits() {

  const[{apiData:packageData,isLoading}] = useFetch('package/byName/Latin Top Hits')

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

export default LatinTopHits