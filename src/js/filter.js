// filter color javascript

document.addEventListener("DOMContentLoaded", () => {
  const colorCircles = document.querySelectorAll(".color-circle");

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", () => {
      // Toggle 'selected' class on the clicked circle
      circle.classList.toggle("selected");

      // Get the background color and set or remove the data-bgcolor attribute
      const bgColor = window.getComputedStyle(circle).backgroundColor;
      if (circle.classList.contains("selected")) {
        circle.setAttribute("data-bgcolor", bgColor);
      } else {
        circle.removeAttribute("data-bgcolor");
      }
    });
  });
});

//   filter buttons size selected
const sizeElements = document.querySelectorAll(".size");

sizeElements.forEach((size) => {
  size.addEventListener("click", function () {
    // Add the 'selected' class to the clicked element
    this.classList.toggle("selected");
  });
});

// filter responsive toggle
document.getElementById("filter-btn").addEventListener("click", function () {
  var filterBox = document.getElementById("filterBox");
  if (filterBox.classList.contains("hidden")) {
    filterBox.classList.remove("hidden");
    filterBox.classList.add("visible");
  } else {
    filterBox.classList.remove("visible");
    filterBox.classList.add("hidden");
  }
});
