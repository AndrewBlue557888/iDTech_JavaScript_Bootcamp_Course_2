const balls = document.getElementsByClassName('ball');

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';

  for (var i = 0; i <= balls.length; i++){
    balls[eval(i)].style.left = x;
    balls[eval(i)].style.top = y;
    balls[eval(i)].transform = 'translate(-' + x + ',-' + y + ')';
  };
};
