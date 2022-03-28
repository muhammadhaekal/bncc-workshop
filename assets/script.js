/**
 * Start of script file
 */
window.addEventListener('load', function() {
  document.getElementById('modal').style.display = 'block';
  document.getElementById('title').innerHTML = 'Hello World!';
  document.getElementById('detail').innerHTML = 'Welcome to My Personal Website';
  document.getElementById('description').innerHTML = 'Here you can see my latest project and portfolio';
});

function handleClose() {
  document.getElementById('modal').style.display = 'none';
}