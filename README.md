# 🛒 SHOP.CO - E-Commerce Website

A modern, responsive e-commerce web application built with vanilla HTML, CSS, and JavaScript. SHOP.CO provides a clean and intuitive shopping experience with features like product browsing, filtering, cart management, and a beautiful UI.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ✨ Features

- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile devices
- **Product Catalog** - Browse through various clothing categories including casual, formal, gym, and party wear
- **Product Filtering** - Filter products by categories and styles
- **Search Functionality** - Search for products across the store
- **Shopping Cart** - Add items to cart and manage quantities
- **Product Details** - Detailed product pages with images and descriptions
- **Brand Showcase** - Featured brands section (Calvin Klein, Gucci, Prada, Versace, Zara)
- **Customer Reviews** - Swiper-based testimonial carousel
- **Modern UI** - Clean, modern design with smooth animations and loading states

## 📁 Project Structure

```
shop.co-ecom/
├── index.html              # Main landing page
├── src/
│   ├── assets/
│   │   ├── fonts/          # Custom fonts
│   │   └── images/
│   │       ├── brands/     # Brand logos
│   │       ├── icons/      # UI icons
│   │       ├── logos/      # Payment & social media logos
│   │       ├── photos/     # Category images
│   │       └── products/   # Product images
│   ├── css/
│   │   ├── main.css        # Main styles
│   │   ├── reset.css       # CSS reset
│   │   ├── responsive.css  # Responsive styles
│   │   ├── variables.css   # CSS custom properties
│   │   └── other-pages/    # Page-specific styles
│   ├── js/
│   │   ├── script.js       # Main JavaScript
│   │   ├── dropdown.js     # Dropdown functionality
│   │   ├── filter.js       # Product filtering
│   │   ├── product-page.js # Product page logic
│   │   └── swipper.js      # Swiper carousel
│   └── other-pages/
│       ├── cart.html       # Shopping cart page
│       ├── casual.html     # Category page
│       └── product-page.html # Product details page
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local development server (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/FatlumG/shop.co-ecom.git
   cd shop.co-ecom
   ```

2. **Open in browser**
   
   Simply open `index.html` in your browser, or use a local development server:
   
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (npx)
   npx serve
   
   # Using VS Code Live Server extension
   # Right-click on index.html and select "Open with Live Server"
   ```

3. **Visit the site**
   
   Open your browser and navigate to `http://localhost:8000` (or the appropriate port)

## 🎨 Pages

| Page | Description |
|------|-------------|
| **Home** (`index.html`) | Landing page with hero section, new arrivals, top selling, browse by style, and customer reviews |
| **Category** (`casual.html`) | Product listing page with filtering options |
| **Product** (`product-page.html`) | Individual product details with images and add to cart |
| **Cart** (`cart.html`) | Shopping cart with item management and checkout summary |

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript** - Vanilla JS for interactivity
- **Swiper.js** - Touch slider for testimonials
- **Font Awesome** - Icon library

## 📱 Responsive Breakpoints

The website is optimized for:
- 📱 Mobile: < 576px
- 📱 Tablet: 576px - 992px
- 💻 Desktop: > 992px

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

⭐ Star this repo if you find it helpful!
