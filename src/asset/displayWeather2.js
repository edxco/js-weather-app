import capitalize from './capitalize';
import imgShow from './imgShow';

const displayWeather2 = (result) => {
  const cardDiv = document.createElement('div');
  cardDiv.className = 'mx-auto w-2/4 rounded shadow mt-10 bg-gradient-to-tr from-indigo-500 to-indigo-700 opacity-70';
  const selectionDiv = document.createElement('div');
  selectionDiv.className = 'w-full bg-white text-center p-1 rounded-t font-bold text-gray-500';
  selectionDiv.textContent = 'Your search result';
  const wrapper = document.createElement('div');
  wrapper.className = 'flex p-5';

  const divM1 = document.createElement('div');
  divM1.className = 'w-full text-center';
  const nameDiv = document.createElement('div');
  nameDiv.className = 'font-light text-white text-2xl mb-3';
  nameDiv.textContent = `${result.name}`;
  const degreeDiv = document.createElement('div');
  degreeDiv.className = 'font-bold text-bold text-4xl text-yellow-400';
  degreeDiv.textContent = `${result.main.temp - 273.15}°`;
  const divM2 = document.createElement('div');
  divM2.className = 'w-full';
  const img = document.createElement('img');
  img.className = 'mx-auto h-16';
  img.src = imgShow(result.weather[0].description);
  const statusDiv = document.createElement('div');
  statusDiv.className = 'text-center font-base text-xl text-white';
  statusDiv.textContent = `${capitalize(result.weather[0].description)}`;

  cardDiv.append(selectionDiv, wrapper);
  wrapper.append(divM1, divM2);
  divM1.append(nameDiv, degreeDiv);
  divM2.append(img, statusDiv);

  return cardDiv;
};

export default displayWeather2;