const can = document.getElementById('myCan');
const can2d = can.getContext('2d');
can.width = window.innerWidth;
can.height = window.innerHeight;


class Point{
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2;
  }

  draw() {
    can2d.beginPath();
    can2d.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    can2d.fill();
  }
}

const triTop = new Point(window.innerWidth / 2, 50);
triTop.draw();

const triBottomLeft = new Point(50, window.innerHeight - 50);
triBottomLeft.draw();

const triBottomRight = new Point(window.innerWidth-50, window.innerHeight - 50);
triBottomRight.draw();

const triArr = [triTop, triBottomRight, triBottomLeft];

can.addEventListener('click', (e) => { 
  const p = new Point(e.x, e.y);
  p.draw();

  drawOnce(p);
}, { once: true });


function drawOnce(prevPoint) {
  
  let randPoint, midPoint;
 
  for (let i = 0; i < 100000; i++){
    setTimeout(() => {
      
      randPoint = triArr[randIndex(0, 3)];
      
      midPoint = new Point(
        (prevPoint.x + randPoint.x) / 2,
        (prevPoint.y + randPoint.y) / 2
      );
      
      midPoint.draw();
      prevPoint = midPoint;
    },1000)
  }
}


function randIndex(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}