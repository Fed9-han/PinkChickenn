 const btnSettings = document.getElementById('btn-settings');

 function openSettings () {
  btnSettings.addEventListener('click', function() {
    btnSettings.classList.toggle('btn-settings--active')
  })
 }
 
 export default openSettings