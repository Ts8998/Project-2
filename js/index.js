var bannerStatus = 1;
var bannerTimer = 6000;

window.onload = function() {
  bannerLoop();
};

var startLoop = setInterval(function() {
  bannerLoop();
}, bannerTimer);

document.querySelector(".hero-carousel").onmouseover = function() {
  clearInterval(startLoop);
};

document.querySelector(".hero-carousel").onmouseout = function() {
  startLoop = setInterval(function() {
    bannerLoop();
  }, bannerTimer);
};

document.querySelector(".prev-btn").onclick = function() {
  if (bannerStatus === 1) {
    bannerStatus = 2;
  }else if (bannerStatus === 2) {
    bannerStatus = 3;
  }else if (bannerStatus === 3) {
    bannerStatus = 1;
  }

  function reverseLoop() {
    if (bannerStatus === 1) {
      document.querySelector(".slide-one").style.zIndex = "120";

      document.querySelector(".slide-two").style.zIndex = "80";

      document.querySelector(".slide-three").style.zIndex = "100";
    }else if (bannerStatus === 2) {
      document.querySelector(".slide-one").style.zIndex = "80";

      document.querySelector(".slide-two").style.zIndex = "100";

      document.querySelector(".slide-three").style.zIndex = "120";
    }else {
      document.querySelector(".slide-one").style.zIndex = "100";

      document.querySelector(".slide-two").style.zIndex = "120";

      document.querySelector(".slide-three").style.zIndex = "80";
    }
  }

  clearInterval(reverseLoop);

  bannerLoop();
};

document.querySelector(".next-btn").onclick = function() {
  bannerLoop();
};

// var containerHover = document.querySelector(".hero-carousel");
//
// containerHover.addEventListener("mouseover", function() {
//   clearInterval(startLoop);
// });
//
// containerHover.addEventListener("mouseover", function() {
//   tartLoop = setInterval(function() {
//     bannerLoop();
//   }, bannerTimer);
// });

function bannerLoop() {
  if (bannerStatus === 1) {
    document.querySelector(".slide-two").style.opacity = "0";

    setTimeout(function() {
      document.querySelector(".slide-one").style.right = "0px";
      document.querySelector(".slide-one").style.zIndex = "100";

      document.querySelector(".slide-two").style.right = "-1920px";
      document.querySelector(".slide-two").style.zIndex = "120";

      document.querySelector(".slide-three").style.right = "1920px";
      document.querySelector(".slide-three").style.zIndex = "80";
    }, 500);

    setTimeout(function() {
      document.querySelector(".slide-two").style.opacity = "1";
    }, 1000);

    bannerStatus = 2;
  }
  else if (bannerStatus === 2) {
    document.querySelector(".slide-three").style.opacity = "0";

    setTimeout(function() {
      document.querySelector(".slide-two").style.right = "0px";
      document.querySelector(".slide-two").style.zIndex = "100";

      document.querySelector(".slide-three").style.right = "-1920px";
      document.querySelector(".slide-three").style.zIndex = "120";

      document.querySelector(".slide-one").style.right = "1920px";
      document.querySelector(".slide-one").style.zIndex = "80";
    }, 500);

    setTimeout(function() {
      document.querySelector(".slide-three").style.opacity = "1";
    }, 1000);

    bannerStatus = 3;
  }
  else if (bannerStatus === 3) {
    document.querySelector(".slide-one").style.opacity = "0";

    setTimeout(function() {
      document.querySelector(".slide-three").style.right = "0px";
      document.querySelector(".slide-three").style.zIndex = "100";

      document.querySelector(".slide-one").style.right = "-1920px";
      document.querySelector(".slide-one").style.zIndex = "120";

      document.querySelector(".slide-two").style.right = "1920px";
      document.querySelector(".slide-two").style.zIndex = "80";
    }, 500);

    setTimeout(function() {
      document.querySelector(".slide-one").style.opacity = "1";
    }, 1000);

    bannerStatus = 1;

    // return false;
  }
}


// *************Tabs Script***************

// const tabElement = document.querySelector("")

const tabs = document.querySelector(".tab-nav");
const panels = document.querySelectorAll(".tab-itm-contain");
const buttons = document.querySelectorAll(".tab-btn");

tabs.addEventListener("click", function(event) {
  if (event.target.tagName == "BUTTON") {
    const targetPanel = document.querySelector(event.target.dataset.target);
    const targetButton = document.querySelector(event.target.dataset.tar);
    buttons.forEach(function(btn) {
      if (btn == targetButton) {
        btn.classList.add("active-tab");
      }else {
        btn.classList.remove("active-tab");
      }
    });

    panels.forEach(function(panel) {
      if (panel == targetPanel) {
        panel.classList.add("active-panel");
      } else {
        panel.classList.remove("active-panel");
      }
    });
  }
});
