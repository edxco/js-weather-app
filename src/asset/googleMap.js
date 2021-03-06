const googleMap = (name) => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('width', '100%');
  iframe.setAttribute('height', '100%');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allowfullscreen', '');
  iframe.style.filter = 'grayscale(1) contrast(1) opacity(0.9)';
  iframe.src = `https://www.google.com/maps/embed/v1/place?key=${process.env.G_API}&q=${name}&zoom=10`;

  // iframe.style.border = 0;

  return iframe;
};

export default googleMap;