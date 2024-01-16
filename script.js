const body = document.getElementById('body');
const container = document.getElementById('container');
const birdBox = document.getElementById('birdBox');
const bird = document.getElementById('bird');
const pig = document.getElementById('pig');
const gameOver = document.getElementById('gameOver');
const victory = document.getElementById('victory');
// bloques
const block0 = document.getElementById('block0');
const block1 = document.getElementById('block1');
const block2 = document.getElementById('block2');
const block3 = document.getElementById('block3');
const block4 = document.getElementById('block4');
const block5 = document.getElementById('block5');
const block6 = document.getElementById('block6');
const block7 = document.getElementById('block7');
const block8 = document.getElementById('block8');
// Botones de reinicio
const clear1 = document.getElementById('clear1');
const clear2 = document.getElementById('clear2');
const clear3 = document.getElementById('clear3');
// Contador de pajaros
const live3 = document.getElementById('live3');
const live2 = document.getElementById('live2');
const live1 = document.getElementById('live1');
const birds = document.getElementById('birds');
// getBounding del contenedor y el pajaro
let posContainer = body.getBoundingClientRect();
let PosBird = bird.getBoundingClientRect();
//
let cordX, cordY;
let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
let click = false;
let lives = 3;
let livePig = true;
let birdX, birdY;
let t = 0;
let vi;
let offsetX, offsetY;


bird.onmousedown = arrastrarMouse;
// Click en el pajaro
function arrastrarMouse(e) {
  e = e || window.e;
  e.preventDefault();

  click = true;

  bird.style.cursor = "grab";

  pos3 = e.clientX;
  pos4 = e.clientY;

  document.onmousemove = moveRaton;
  document.onmouseup = soltarRaton;
}

//Movimiento del mouse
function moveRaton(e) {
  e = e || window.e;
  e.preventDefault();

  click = true;
  bird.style.cursor = "grabbing";

  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;

  let newTop = bird.offsetTop - pos2;
  let newLeft = bird.offsetLeft - pos1;

  // Limitar el movimiento del pajaro
  newTop = Math.max(0, Math.min(newTop, birdBox.offsetHeight - bird.offsetHeight));
  newLeft = Math.max(0, Math.min(newLeft, birdBox.offsetWidth - bird.offsetWidth));

  bird.style.top = newTop + 'px';
  bird.style.left = newLeft + 'px';
  lanzarPajaro()
}

// Evento de soltar el click
function soltarRaton() {
  document.onmousemove = null;
  document.onmouseup = null;
  click = false;

  lanzarPajaro()
}

// Validar posiciones
function lanzarPajaro() {
  let top = parseInt(bird.style.top);
  let left = parseInt(bird.style.left);

  if (click == false) {
    lives--
    finJuego()
    resetBird()

    //Validar pocisiones y lanzar pajaro
    if (top <= 29 && left <= 32) {
      console.log('Block 1');
      bird.classList.add("block1");

      setTimeout(() => {
        bird.style.top =`${92}px`;
        bird.style.left = `${520}px`;
        bird.style.transform = "rotate(350deg)";
        bird.classList.remove("block1");
      }, 1300);
    }
    if (top >= 30 && top <= 66 && left <= 32) {
      console.log('Block 2');
      bird.classList.add("block2");
      setTimeout(() => {
        bird.style.top = `87px`;
        bird.style.left = `677px`;
        bird.style.transform = "rotate(320deg)";
        bird.classList.remove("block2");
      }, 1400);
    }
    if(top >= 67 && left <= 32) {
      console.log('Block 3')

      bird.classList.add("block3");
      setTimeout(() => {
        bird.style.top = "87px";
        bird.style.left = "710px";
        bird.style.transform = "rotate(261deg)";
        bird.classList.remove("block3");
      }, 1350);
    }
    //
    if (top <= 29 && left >= 33 && left <= 78) {
      console.log('Block 4');
      bird.classList.add("block4");
      setTimeout(() => {
        bird.style.top = "88px";
        bird.style.left = "490px";
        bird.style.transform = "rotate(220deg)"
        bird.classList.remove("block4");
      }, 1750);
    }
    if (top >= 30 && top <= 61 && left >= 33 && left <= 78) {
      console.log('Block 5');
      bird.classList.add("block5");
      resetBird()
      setTimeout(() => {
        bird.style.top = "88px"
        bird.style.left = "400px"
        bird.style.transform = "rotate(350deg)"
        bird.classList.remove("block5");
      }, 850);

    }
    if (top >= 62 && left >= 33 && left <= 78) {
      console.log('Block 6');
      bird.classList.add("block6");

      setTimeout(() => {
      bird.style.top = `87px`;
      bird.style.left = `340px`;
      bird.style.transform = "rotate(350deg)";
      bird.classList.remove("block6");
      }, 1550);
    }
    //
    if (top <= 29 && left >=79 && left <= 130) {
      console.log('Block 7');
      bird.classList.add("block7");

      setTimeout(() => {
        bird.classList.remove("block7");
        bird.style.top = "1px";
        bird.style.left = "-84px";
      }, 650);
    }
    if (top >= 30 && top <= 61 && left >= 79 && left <= 130) {
      console.log('Block 8');
      bird.classList.add('block8');

      setTimeout(() => {
        bird.classList.remove("block8");
      }, 900);
      setTimeout(() => {
        bird.style.top = "1px";
        bird.style.left = "-84px";
      }, 850);
    }
    if (top >= 62 && left >= 79 && left <= 130) {
      console.log('Block 9');
      bird.classList.add('block9');

      setTimeout(() => {
        bird.classList.remove("block9")
      }, 900);
      setTimeout(() => {
        bird.style.top = "-71px";
        bird.style.left = "-113px";
        bird.style.transform = "rotate(-180deg)";
      }, 850);
    }
    //
    if (top <= 29 && left >= 131) {
      console.log('Block 10');
      bird.classList.add("block10");

      setTimeout(() => {
        bird.classList.remove("block10");
      }, 900);
      setTimeout(() => {
        bird.style.top = "6px";
        bird.style.left = "-94px";
        bird.style.transform = "rotate(-180deg)";
      }, 850);
    }
    if (top >= 30 && top <= 61 && left >= 131) {
      console.log('Block 11');
      bird.classList.add("block11");

      setTimeout(() => {
        bird.classList.remove("block11");
      }, 900);
      setTimeout(() => {
        bird.style.top ="6px";
        bird.style.left = "-94px"
        bird.style.transform = "rotate(-180deg)";
      }, 850);
    }
    if (top >= 62 && left >= 131) {
      console.log('Block 12');
      bird.classList.add("block12");

      setTimeout(() => {
        bird.classList.remove("block12");
      }, 900);
      setTimeout(() => {
        bird.style.top ="6px";
        bird.style.left = "-94px"
        bird.style.transform = "rotate(-180deg)";
      }, 850);
    }
  }

  //Ver posicion del pajaro
  if (click == false) {
    console.log('top: ' + top)
    console.log('left: ' + left)
  }
}
//devolver a su posición original
function resetBird() {
  setTimeout(() => {
    bird.style.top = "50px";
    bird.style.left = "80px";
    bird.style.transition = "0.8s"
    bird.style.transform = "rotate(0deg)";
    finJuego()
  }, 3000);
  setTimeout(() => {
    bird.style.transition = "all 0s";
  }, 3100);
}

collisions()
//Su nombre lo dice XD
function collisions() {
  setInterval(() => {
    birdY = parseInt(bird.style.top)
    birdX = parseInt(bird.getBoundingClientRect().left);

   // console.log(birdX);
    if (cordX >= 750 && cordY >= 352) {
      block3.remove();
      block5.remove();
      block6.remove();
      pig.remove();
      livePig = false;

      block4.classList.add("wood4");
      block8.classList.add("wood8");
      block7.classList.add("wood7");

      setTimeout(() => {
        block4.style.bottom = "-45px"
        block4.style.left = "525px";
        block4.style.transform = "rotate(90deg)"
      }, 1600);

      setTimeout(() => {
        block7.style.bottom = "-40px";
        block7.style.left = "525px";
        block7.style.transform = "rotate(85deg)";

        block8.remove();
      }, 700);
    }
    //segunda colisión
    if (cordX >= 727 || cordY <= 56) {
      console.log('Ganste');
      livePig = false;
      block3.remove();
      block5.classList.add("wood5-1");
      pig.classList.add("pigAn");
      block6.classList.add("wood6-1");
      block7.classList.add("wood7-1");
      block8.classList.add("wood8-1");

      setTimeout(() => {
        block5.style.bottom = "4px";
        block5.style.left = "235px";
        block5.style.transform = "rotate(-180deg)";
        setTimeout(() => {
          block5.remove();
        }, 150);
      }, 900);

      setTimeout(() => {
        pig.remove();

        block6.remove();
        block7.remove();
      }, 400);

      setTimeout(() => {
        block8.remove();
        block4.remove();
      }, 500);
    }
  }, 1);
}

function finJuego() {
  //Contador de Lanzamientos
  console.log('Intentos: ' + lives)
  setTimeout(() => {
    if (lives <= 0 && livePig == true) {
      gameOver.style.display = "block";
      victory.style.display = "none";
      bird.classList.remove("bird");
      bird.classList.add("desactivar");
    }
  }, 4000);
  setTimeout(() => {
    if (livePig == false) {
      victory.style.display = "block";
      gameOver.style.display = "none";
      bird.classList.remove("bird");
      bird.classList.add("desactivar");
    }
  }, 4000);

  if (lives == 2) {
    live3.remove();
  } if (lives == 1) {
    live2.remove();
  } if (lives <= 0) {
    live1.remove();
    birds.innerHTML = `<div>NO BIRDS</div>`;
  }
}

// Recargar la página
clear1.addEventListener("click", recargar);
clear2.addEventListener("click", recargar);
clear3.addEventListener("click", recargar);

function recargar() {
  window.location.reload();
}

//Obetener las coordenadas en tiempo real
setInterval(() => {
  let birdClientX = bird.getBoundingClientRect().left;
  let birdClientY = bird.getBoundingClientRect().top;
  let containerClientX = container.getBoundingClientRect().left;
  let containerClientY = container.getBoundingClientRect().top;

  cordX = birdClientX - containerClientX;
  cordY = birdClientY - containerClientY;
}, 10);
