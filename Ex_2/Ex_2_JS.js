const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  const width =  window.screen.width
  const height = window.screen.height
1245
  alert(`Width of screen ${width} and height ${height}`)
});
