
// Evento mouseup para clicar en window
window.addEventListener('mouseup', uncheckAll);

// función uncheckAll cambia el checked a false
function uncheckAll(){
  var inputs = document.querySelectorAll('.check1');
  for(var i = 0; i < inputs.length; i++){
    inputs[i].checked = false;
  } 
}


