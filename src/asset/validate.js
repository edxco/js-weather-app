import showHide from './showHide';

const validation = (input) => {
  let errorMsg = '';
  if (input === undefined || input === '') {
    errorMsg = 'Please enter a City';
    const error = document.getElementById('error');
    showHide(error);
    error.textContent = errorMsg;
  } else {
    return false;
  }
  return errorMsg;
};

export default validation;