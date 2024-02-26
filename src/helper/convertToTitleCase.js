function convertToTitleCase(inputString) {
  if(!inputString) return;
    return inputString
      .split('-')
      .map(word =>{
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ');
}

  export default convertToTitleCase;