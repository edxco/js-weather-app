const capitalize = (str) => {
  const separateWord = str.toLowerCase().split(' ');
  for (let i = 0; i < separateWord.length; i += 1) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase()
     + separateWord[i].substring(1);
  }
  return separateWord.join(' ');
};

export default capitalize;