//T-SHIRTS VIEWING FUNCTION
function changeImage(imageSrc, clickedImage) {
  // Change the source of the large image
  const mainImage = document.getElementById("mainImg");
  mainImage.src = imageSrc;

  // Remove the black border from all small images
  const smallImages = document.querySelectorAll(".small-img");
  smallImages.forEach((image) => {
    image.style.border = "2px solid transparent"; // Reset to transparent or default
  });

  // Add a black border to the clicked thumbnail
  clickedImage.style.border = "1px solid black";
}
//T-SHIRTS FUNCTIONALITY - END
//=========================================================>
// COLOR SELECTING
document.addEventListener("DOMContentLoaded", () => {
  const colorCircles = document.querySelectorAll(".color-circle");

  colorCircles.forEach((circle) => {
    circle.addEventListener("click", () => {
      // Remove 'selected' class and data-bgcolor attribute from all circles
      colorCircles.forEach((c) => {
        c.classList.remove("selected");
        c.removeAttribute("data-bgcolor");
      });

      // Add 'selected' class and data-bgcolor attribute to the clicked circle
      circle.classList.add("selected");
      const bgColor = window.getComputedStyle(circle).backgroundColor;
      circle.setAttribute("data-bgcolor", bgColor);
    });
  });
});

// COLOR SELECTING -END
//=========================================================>
// SIZE SELECTING
const sizeElements = document.querySelectorAll(".size");

sizeElements.forEach((size) => {
  size.addEventListener("click", function () {
    // Remove the 'selected' class from all elements
    sizeElements.forEach((s) => s.classList.remove("selected"));

    // Add the 'selected' class to the clicked element
    this.classList.add("selected");
  });
});

// SIZE SELECTING - END
//=========================================================>
// INFO NAVBAR (REVIEWS SECTION)
const pages = document.querySelectorAll(".info-nav-pages");

pages.forEach((page) => {
  page.addEventListener("click", function () {
    // Remove the 'active' class from all elements
    pages.forEach((p) => p.classList.remove("active"));

    // Add the 'active' class to the clicked element
    this.classList.add("active");
  });
});

// INFO NAVBAR (REVIEWS SECTION) - END
//=========================================================>
// RANDOM PRODUCT GENERATOR

const products = [
  {
    src: "../assets/images/products/black-stripped-tshirt.svg",
    name: "Black Striped T-Shirt",
    price: 145,
    discount: null,
    percentage: null,
    rating: 4,
  },
  {
    src: "../assets/images/products/black-jeans.png",
    name: "Black Jeans",
    price: 130,
    discount: 160,
    percentage: 18,
    rating: 4,
  },
  {
    src: "../assets/images/products/blue-tshirt.svg",
    name: "Blue T-Shirt",
    price: 120,
    discount: 150,
    percentage: 20,
    rating: 4,
  },
  {
    src: "../assets/images/products/checkered-shirt.svg",
    name: "Checkered Shirt",
    price: 221,
    discount: 260,
    percentage: 15,
    rating: 4,
  },
  {
    src: "../assets/images/products/gardient-shirt.svg",
    name: "Gradient T-shirt",
    price: 80,
    discount: null,
    percentage: null,
    rating: 4,
  },
  {
    src: "../assets/images/products/graphic-tshirt.png",
    name: "Graphic Orange T-shirt",
    price: 145,
    discount: null,
    percentage: null,
    rating: 3,
  },
  {
    src: "../assets/images/products/green-shirt.png",
    name: "Green shirt",
    price: 180,
    discount: 200,
    percentage: 10,
    rating: 5,
  },
  {
    src: "../assets/images/products/jeans.png",
    name: "Blue Jeans",
    price: 240,
    discount: 300,
    percentage: 20,
    rating: 5,
  },
  {
    src: "../assets/images/products/orange-t-shirt.png",
    name: "Orange Striped T-shirt",
    price: 180,
    discount: null,
    percentage: null,
    rating: 4,
  },
  {
    src: "../assets/images/products/shorts.png",
    name: "Shorts",
    price: 80,
    discount: 110,
    percentage: 27,
    rating: 3,
  },
  {
    src: "../assets/images/products/t-shirt.png",
    name: "Black T-shirt",
    price: 65,
    discount: 79,
    percentage: 17,
    rating: 4,
  },
];

// Function to generate products dynamically
function generateProducts() {
  const productItems = document.querySelectorAll(".product-item");

  productItems.forEach((container) => {
    let randomIndex = Math.floor(Math.random() * products.length);
    const product = products[randomIndex];

    // Find elements within each product container and update them
    const img = container.querySelector("img");
    const name = container.querySelector("h4");
    const price = container.querySelector(".newPrice");
    const oldPrice = container.querySelector(".oldPrice");
    const discount = container.querySelector(".discount");
    const stars = container.querySelector(".rating-stars");

    // Update content
    img.src = product.src;
    img.alt = product.name;
    name.textContent = product.name;
    price.textContent = `$${product.price}`;

    if (product.discount) {
      oldPrice.textContent = product.discount;
      discount.textContent = `-${product.percentage}%`;
    }

    // Update rating stars
    stars.innerHTML = ""; // Clear existing stars
    for (let i = 1; i <= 5; i++) {
      const starClass =
        i <= product.rating ? "fa-solid fa-star" : "fa-regular fa-star";

      stars.innerHTML += `<li class="star" rating="${i}"><i class="${starClass}"></i></li>`;
    }
  });
}

document.getElementById("seeOtherBtn").addEventListener("click", function () {
  showLoader(); // Show the loader
  loadContent(); // Simulate content loading
});

// Function to show the loader
function showLoader() {
  document.querySelector(".products-container").style.display = "none"; // Hide the content while loading
  document.querySelector(".loader-products-parent").style.display = "flex"; // Show the loader
  document.querySelector(".loader-products").style.display = "flex"; // Show the loader
}

// Function to hide the loader and show content
function loadContent() {
  setTimeout(function () {
    document.querySelector(".products-container").style.display = "grid"; //Show loaded content
    document.querySelector(".loader-products-parent").style.display = "none"; // Hide the loader
    document.querySelector(".loader-products").style.display = "none"; // Hide the loader
  }, 600); // Adjust the duration as needed
}

// RANDOM PRODUCT GENERATOR - END

function sendToCart() {
  window.location.href = "./cart.html";
}
