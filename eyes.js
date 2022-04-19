const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (let i = 0; i < balls.length; i++) {
    balls[i].style.left = x; 
    balls[i].style.top = y; 
    balls[i].transform = 'translate(-' + x + ',-' + y + ')';
  } 
}

//adding eyes programatically
function addEyes() {
  const face = document.getElementById('face');  
  const newEye = document.createElement('div');
  newEye.className = 'eye';
  face.appendChild(newEye);
  const retina = document.createElement('div');
  retina.className = 'ball';
  newEye.appendChild(retina);
}

