import showHide from './showHide';

const errorDisplay = () => {
  const errorMsg = 'No City found by that name';
  const error = document.getElementById('error');
  showHide(error);
  error.textContent = errorMsg;
};

export default errorDisplay;