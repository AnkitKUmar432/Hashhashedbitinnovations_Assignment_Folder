// your js code goes here
function toggleVisibility() {

  let p = document.getElementById('useless-paragraph');
  let button = document.querySelector('button');

  if(p.style.display==='none'){
  p.style.display = 'block';
   button.innerText = "Hide";
  }else{
  p.style.display = 'none';
    button.innerText = "Visible";
  }
    
}