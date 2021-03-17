const checkUnit = () => {
  const div1 = document.getElementById('currentTempCe');
  const div2 = document.getElementById('currentTempFe');

  const div3 = document.getElementById('searchTempCe');
  const div4 = document.getElementById('searchTempFe');

  if (div1.classList.contains('hidden')) {
    div1.classList.remove('hidden');
    div1.classList.add('block');
    div2.classList.remove('block');
    div2.classList.add('hidden');
  } else {
    div2.classList.remove('hidden');
    div2.classList.add('block');
    div1.classList.remove('block');
    div1.classList.add('hidden');
  }

  if (div3) {
    if (div3.classList.contains('hidden')) {
      div3.classList.remove('hidden');
      div3.classList.add('block');
      div4.classList.remove('block');
      div4.classList.add('hidden');
    } else {
      div4.classList.remove('hidden');
      div4.classList.add('block');
      div3.classList.remove('block');
      div3.classList.add('hidden');
    }
  }
};

export default checkUnit;