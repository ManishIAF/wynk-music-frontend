import filterDuplicateSongs from "./filterDuplicateSongs";
function sortByMostRepeated(data) {

    const countMap = data?.reduce((acc, item) => {
        acc[item.id] = (acc[item.id] || 0) + 1;
        return acc;
      }, {});

      const sortedData = filterDuplicateSongs(data.sort((a, b) => countMap[b.id] - countMap[a.id]));
  
    return sortedData;
  }

  export default sortByMostRepeated;