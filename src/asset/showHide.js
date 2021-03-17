const showHide = (div) => {
  if (div.classList.contains('hidden')) {
    div.classList.remove('hidden');
    div.classList.add('block');
  } else {
    div.classList.remove('block');
    div.classList.add('hidden');
  }
};

export default showHide;
