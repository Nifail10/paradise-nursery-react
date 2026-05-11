````md
# Paradise Nursery – React Shopping Cart Application

Paradise Nursery is a modern and responsive e-commerce web application developed using React.js. The project simulates an online indoor plant store where users can browse different categories of houseplants, view product details, add items to a shopping cart, and manage their purchases dynamically.

This project was built as part of a React and Redux learning program to demonstrate practical implementation of component-based architecture, state management, routing, and responsive user interface design.

---

## Project Objectives

The main objective of this project is to create a functional shopping cart application while applying core React concepts and frontend development practices, including:

- Component-based UI development
- State management using Redux Toolkit
- Dynamic rendering using React
- Navigation using React Router DOM
- Responsive web design using CSS
- Shopping cart functionality with quantity management
- Real-time cart updates and total cost calculations

---

## Features

### Landing Page
- Attractive nursery-themed landing page
- Background image with modern overlay design
- Welcome section introducing Paradise Nursery
- “Get Started” button for navigation to products page

### About Us Page
- Company overview and mission
- Benefits of indoor plants
- Responsive and visually appealing layout

### Product Listing Page
- Multiple plant categories
- Minimum six unique plants per category
- Product cards displaying:
  - Plant image
  - Plant name
  - Description
  - Price
- Functional “Add to Cart” button
- Button disables after adding item
- Dynamic cart quantity updates

### Navigation Bar
- Present across Products and Cart pages
- Navigation links:
  - Home
  - Plants
  - Cart
  - About
- Dynamic cart icon with item count

### Shopping Cart
- Display selected products
- Increase and decrease quantity controls
- Remove item functionality
- Total price calculation for each product
- Grand total amount calculation
- Continue Shopping button
- Checkout button with “Coming Soon” alert

---

## Technologies Used

- React.js
- Redux Toolkit
- React Router DOM
- Vite
- JavaScript (ES6+)
- CSS3

---

## Project Structure

```bash
src/
│
├── assets/
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│   └── AboutUs.jsx
│
├── pages/
│
├── store/
│   ├── CartSlice.jsx
│   └── store.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx
````

## Redux Functionality

The application uses Redux Toolkit for centralized state management.

### CartSlice Features

* Add item to cart
* Remove item from cart
* Increment quantity
* Decrement quantity
* Dynamic total quantity tracking
* Dynamic total amount calculation

---

## Routing

React Router DOM is used for page navigation.

### Routes

| Route     | Description          |
| --------- | -------------------- |
| `/`       | Landing Page         |
| `/plants` | Product Listing Page |
| `/cart`   | Shopping Cart        |
| `/about`  | About Us Page        |

---

## Installation and Setup

### Clone Repository

```bash
git clone https://github.com/Nifail10/paradise-nursery-react
```

### Navigate to Project Folder

```bash
cd paradise-nursery-react
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

## Learning Outcomes

Through this project, the following concepts were implemented and practiced:

* React functional components
* Props and state management
* Redux Toolkit integration
* React Router navigation
* Dynamic rendering using arrays and mapping
* Event handling
* Conditional rendering
* Responsive UI development
* Cart management logic

---

## Future Improvements

Possible enhancements for future versions include:

* User authentication
* Search and filter functionality
* Payment gateway integration
* Backend database integration
* Wishlist feature
* Product reviews and ratings

---

## Author

Developed by Nifail

---

## License

This project is created for educational and learning purposes.

```
```
