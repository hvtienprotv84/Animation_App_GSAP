particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#28FFBF"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 3,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 6,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#28FFBF",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 80,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
 
  const button = document.querySelector("#myButton");
  const audio=document.querySelector('#myAudio');
  const images =[
  "https://img.icons8.com/ios-filled/100/FFFFFF/play-button-circled--v1.png",
  "https://img.icons8.com/ios-filled/100/FFFFFF/pause--v1.png"
  ]
  
  button.addEventListener("click", ()=>{
      
      if (audio.paused){
          document.querySelector("#myAudio").play();
          playMusic();
      }
      else {
          document.querySelector("#myAudio").pause();
          stopMusic();
      }
      })
  
  function playMusic(){
      document.querySelector("#myImage").src=images[1];
  }
  
  function stopMusic(){
      document.querySelector("#myImage").src=images[0]; 
  }
  
  const timer = 3;
  let amountTime = timer*60;

function calculateTime(){
    const countdown=document.querySelector("#countdown");
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;

    if (seconds<10) {
        seconds = "0"+seconds;
    }
  
    if (audio.paused){
      return false
    } 

    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;

    if (amountTime<0) {
        stopTimer();
        amountTime=0;
    }

    function stopTimer(){
       clearInterval(timerId);
       document.querySelector("#myAudio").pause();
       document.querySelector("#myImage").src=images[0];
       countdown.textContent= 'Xin Cám Ơn Bạn Đã Dành 3 Phút Để Thư Giãn!';
    }
}

let timerId = setInterval(calculateTime, 1000);

gsap.from("#particles-js", {y:30, delay:0.8, duration:3, opacity:0, ease:"power4.out"})
gsap.from("#countdown", {y:-100, delay:0.1, duration:2, opacity:0, ease:"power1.out"})
gsap.from("#myButton", {x:-100, delay:1.2, duration:3, opacity:0, ease:"power4.out"})