function toggleMode() {
  var body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
}

function toggleDiv(divid) {

  varon = divid + 'on';
  varoff = divid + 'off';

  if (document.getElementById(varon).style.display == 'block') {
    document.getElementById(varon).style.display = 'none';
    document.getElementById(varoff).style.display = 'block';
  }

  else {
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

window.addEventListener('resize', function () {
  const mobileMenu = document.getElementById('mylinks');
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove('open');
  }
});

function activateCheckbox() {
  var checkbox = document.getElementById("checkbox4");
  checkbox.checked = !checkbox.checked;
}

let textBase = "";
let jobs = ["Software Developer", "Freelancer", "Open Source Contributor", "Designer"];
let jobIdx = 0;
let i = 0;
let reverse = false;

function typeWriter() {
  // Generate some random text jitter between 45 and 75 ms to simulate a keyboard
  var textJitter = Math.floor(Math.random() * (70 - 45) + 45);

  // Check if we want to remove text ('reverse'), or add it.
  if (reverse) {
    if (document.getElementById("typewrite").innerHTML.length > textBase.length) {
      // We're still in the process of removing the job
      document.getElementById("typewrite").innerHTML = document
        .getElementById("typewrite")
        .innerHTML.slice(0, -1);
      setTimeout(typeWriter, textJitter);
    } else {
      // deleting done. Set next job, and repeat with typing by
      // setting reverse to false
      jobIdx = (jobIdx + 1) % jobs.length;
      reverse = false;
      setTimeout(typeWriter, 1000);
    }
  } else {
    // We're adding text
    if (i === (textBase + jobs[jobIdx]).length) {
      // Line is done. Wait and then reverse
      i = textBase.length;
      reverse = true;

      // Wait a second, then start deleting
      setTimeout(typeWriter, 3000);
    } else {
      // Write text like a typewriter
      if (i < (textBase + jobs[jobIdx]).length) {
        document.getElementById("typewrite").innerHTML = document.getElementById("typewrite").innerHTML + (
          textBase + jobs[jobIdx]
        ).charAt(i);
        i++;
        setTimeout(typeWriter, textJitter);
      }
    }
  }
}