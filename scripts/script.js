function toggleMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

// Toggles Course View in 3_resume.html
document.getElementById('sliderButton').addEventListener('click', function() {
  
  var div1 = document.getElementById('div1');
  var div2 = document.getElementById('div2');

  if (div1.classList.contains('visible')) {
      div1.classList.remove('visible');
      div1.classList.add('hidden');
      div2.classList.remove('hidden');
      div2.classList.add('visible');
  } else {
      div1.classList.remove('hidden');
      div1.classList.add('visible');
      div2.classList.remove('visible');
      div2.classList.add('hidden');
  }

});

function toggleDiv(divid)
  {
 
    varon = divid + 'on';
    varoff = divid + 'off';
 
    if(document.getElementById(varon).style.display == 'block')
    {
    document.getElementById(varon).style.display = 'none';
    document.getElementById(varoff).style.display = 'block';
    }
   
    else
    {  
    document.getElementById(varoff).style.display = 'none';
    document.getElementById(varon).style.display = 'block'
    }
} 



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

