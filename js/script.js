function toggleMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

window.addEventListener("DOMContentLoaded", function() {
  var div1 = document.getElementById("div1");
  var div2 = document.getElementById("div2");
  var button = document.getElementById("sliderButton");
  
  button.innerHTML = "Show Courses >";
  
  function toggleSlider() {
    if (div1.style.display === "block") {
      div1.style.display = "none";
      div2.style.display = "block";
      button.innerHTML = "< Show Schools";
    } else {
      div2.style.display = "none";
      div1.style.display = "block";
      button.innerHTML = "Show Courses >";
    }
  }
  
  button.addEventListener("click", toggleSlider);
});


function off() {
  const divs = document.querySelectorAll("div[id^='overlay']");

  for (let i = 0; i < divs.length; i++) {
    divs[i].style.display = "none";
  }
  document.body.style.overflow = 'auto'; 
  document.body.style.overflowY = 'initial';
}

function on1() {
  document.getElementById("overlay1").style.display = "block";
  document.body.style.overflowY = 'hidden';
}
function on2() {
  document.getElementById("overlay2").style.display = "block";
  document.body.style.overflowY = 'hidden';
}
function on3() {
  document.getElementById("overlay3").style.display = "block";
  document.body.style.overflowY = 'hidden';
}

function toggleMenu() {
  const mobileMenu = document.getElementById('mylinks');
  mobileMenu.classList.toggle('open');
}

window.addEventListener('resize', function() {
  const mobileMenu = document.getElementById('mylinks');
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('open');
  }
});

function activateCheckbox(){
  var checkbox = document.getElementById("checkbox4");
  checkbox.checked = !checkbox.checked;
}

