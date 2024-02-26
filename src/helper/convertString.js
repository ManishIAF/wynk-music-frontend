const convertString = (inputString) => {

    const sanitizedString = inputString.replace(/[^\p{L}\p{N}\s\p{Emoji}]+/gu, '');

    const hyphenatedString = sanitizedString.replace(/\s+/g, '-');

    return hyphenatedString.toLowerCase();

}

export default convertString;