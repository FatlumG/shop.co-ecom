//LOADER
// Function to hide the loader after a delay
function hideLoader() {
  setTimeout(function () {
    document.querySelector(".loader-parent").style.display = "none";
    document.querySelector(".loader").style.display = "none";
  }, 700); // 1s
}

// This will hide the loader when the page finishes loading, with a delay
window.addEventListener("load", function () {
  hideLoader();
});

//LOADER - END
// ====================================================
//ANIMATIONS
const hiddenLeft = document.querySelectorAll(".hide-left");
const hiddenRight = document.querySelectorAll(".hide-right");
const hiddenCenter = document.querySelectorAll(".hide-center");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-in");
    }
  });
});

hiddenLeft.forEach((e) => observer.observe(e));
hiddenRight.forEach((e) => observer.observe(e));
hiddenCenter.forEach((e) => observer.observe(e));

//ANIMATIONS - END
// ====================================================
// SIDEBAR
const barIcn = document.getElementById("bars");
const sidebar = document.querySelector(".sidebar-nav");
const sidebarItems = document.querySelectorAll(".sidebar-item");
const xmark = document.getElementById("xmark");

barIcn.addEventListener("click", () => {
  sidebar.classList.add("show");
  xmark.style.transform = "rotate(360deg)";

  // Apply styles to each item in the sidebar
  sidebarItems.forEach((item) => {
    item.style.transform = "translateX(0)";
    item.style.opacity = "1";
  });
});

xmark.addEventListener("click", () => {
  sidebar.classList.remove("show");
  xmark.style.transform = "rotate(0deg)";
  //Revert the style as the begining
  sidebarItems.forEach((item) => {
    item.style.transform = "translateX(20px)";
    item.style.opacity = "0";
  });
});

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebar.classList.remove("show");
    //Revert the style as the begining(also when clicking other than x-mark)
    sidebarItems.forEach((item) => {
      item.style.transform = "translateX(20px)";
      item.style.opacity = "0";
    });
  });
});

// SIDEBAR - END
// ====================================================
// remove signup button
let removeSignUp = document.getElementById("removeSignbtn");
// signup div
let signUpPop = document.getElementById("signUp");

// function to remove the sgnup pop when removesignu button clicked
removeSignUp.addEventListener("click", function () {
  signUpPop.style.display = "none";
});

// ====================================================

//COUNTER  PROGRAM
const increaseBtns = document.querySelectorAll(".increaseBtn");
const decreaseBtns = document.querySelectorAll(".decreaseBtn");
const displays = document.querySelectorAll(".countLabel");

increaseBtns.forEach((increaseBtn, index) => {
  increaseBtn.onclick = function () {
    let count = parseInt(displays[index].textContent);
    count++;
    displays[index].textContent = count;
  };
});

decreaseBtns.forEach((decreaseBtn, index) => {
  decreaseBtn.onclick = function () {
    let count = parseInt(displays[index].textContent);
    count--;
    if (count <= 0) {
      count = 1;
    }
    displays[index].textContent = count;
  };
});

//COUNTER  PROGRAM - END
// ====================================================
//SEARCH BOX

let avaialbleKeywords = [
  "Men",
  "Women",
  "Old Fashion",
  "Gym",
  "Party",
  "Casual",
  "Formal",
  "New Arrivals",
  "T-shirts",
  "Shirts",
  "Jeans",
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("searchInput");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value;

  if (input.length) {
    result = avaialbleKeywords.filter((keyword) => {
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
};

function display(result) {
  const content = result.map((list) => {
    return "<li onclick='selectInput(this)'>" + list + "</li>";
  });

  resultsBox.innerHTML = "<ul>" + content.join("") + "</ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultsBox.innerHTML = "";
}

function sendToCasualFromIndex() {
  if (inputBox.value.trim() !== "") {
    window.location.href = "./src/other-pages/casual.html";
  }
}
function sendToCasualFromNearPages() {
  if (inputBox.value.trim() !== "") {
    window.location.href = "./casual.html";
  }
}

const navMenu = document.querySelector(".nav-menu");
const searchBox = document.querySelector(".search-box");
const cartUserContainer = document.querySelector(".cart-user-container");
const barsTitle = document.querySelector(".bars-title");

function deleteContent() {
  if (window.innerWidth >= 1024) {
    inputBox.value = "";
  }

  if (window.innerWidth >= 768 && window.innerWidth <= 1023) {
    inputBox.value = "";
    searchBox.style.display = "none";
    navMenu.style.display = "flex";
  }

  if (window.innerWidth >= 551 && window.innerWidth <= 767) {
    inputBox.value = "";
    searchBox.style.display = "none";
    cartUserContainer.style.display = "flex";
  }
  if (window.innerWidth <= 550) {
    inputBox.value = "";
    searchBox.style.display = "none";
    cartUserContainer.style.display = "flex";
    barsTitle.style.display = "flex";
  }
}

//SEARCH BOX - END
// ====================================================
//SEARCH ICON(for smaller screens)
const searchIcon = document.getElementById("search-icon");
const xmarkSearch = document.getElementById("xmarkSearch");

searchIcon.addEventListener("click", () => {
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    navMenu.style.display = "none";
    searchBox.style.display = "block";
  }

  if (window.innerWidth >= 551 && window.innerWidth <= 767) {
    cartUserContainer.style.display = "none";
  }

  if (window.innerWidth <= 550) {
    searchBox.style.display = "block";
    cartUserContainer.style.display = "none";
    barsTitle.style.display = "none";
  }
});

//SEARCH ICON(for smaller screens) - END

function sendToCasual() {
  window.location.href = "./src/other-pages/casual.html";
}
