const container = document.getElementById('container');
const commonCont = document.getElementById('common-box');
const panelBtn = document.getElementById('panelbtn');

panelBtn.addEventListener('click', () => {
  container.classList.toggle('box-active');
});
