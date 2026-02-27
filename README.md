# TechStore Pro - E-commerce Website

A modern, responsive e-commerce web app for selling laptops and digital gadgets, built with **React + Tailwind CSS + localStorage**.

## Features

- Homepage with hero section and CTAs
- Product listing with filters (search, category, brand, price, rating)
- Product details with image, description, rating, reviews, add-to-cart
- Shopping cart with quantity controls and total
- Checkout page with billing + payment layout
- Login/Signup authentication flow
- Wishlist support
- Dark/Light theme toggle
- Responsive UI (mobile/tablet/desktop)
- Footer with about, contact, social, policy sections
- Admin panel for Add / Update / Delete product (first signup user is admin)
- Persistent local storage state

## Project Structure

```bash
.
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components
    │   ├── Footer.jsx
    │   ├── Navbar.jsx
    │   └── ProductCard.jsx
    ├── context
    │   └── StoreContext.jsx
    ├── data
    │   └── products.js
    └── pages
        ├── AdminPage.jsx
        ├── AuthPage.jsx
        ├── CartPage.jsx
        ├── CheckoutPage.jsx
        ├── HomePage.jsx
        ├── ProductDetailsPage.jsx
        ├── ProductsPage.jsx
        └── WishlistPage.jsx
```

## Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in terminal (typically `http://localhost:5173`).

## Notes

- All data (products, cart, users, wishlist, theme) is stored in browser localStorage.
- On first signup, the created account gets `admin` role.
