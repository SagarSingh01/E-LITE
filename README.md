# 🛒 E-LITE

Welcome to E-LITE - A modern, responsive **E-Commerce web application** built with **React.js and Tailwind CSS**.

This project was created to strengthen my understanding of **React state management, Context API, custom hooks, API handling, conditional rendering, and modern JavaScript (ES6+)** by building a practical application.

---

## 🌐 Live Demo

🔗 https://e-lite-nine.vercel.app

---

## ✨ Features

### 🛍️ Product Features

- Browse products dynamically from an external API
- Responsive product grid
- Product image preview
- Product details view
- Product name, category, price, and rating
- Category-based product filtering
- Interactive product cards
- Add-to-cart functionality
- Cart item count

### ⚡ Application States

- Loading state
- Loading skeleton UI
- Error state
- Category selection state
- Cart state
- Dynamic product rendering

### 🎨 UI/UX

- Fully responsive design
- Modern product card layout
- Smooth hover animations
- Product image zoom interaction
- Clean typography and spacing
- Responsive grid system
- Interactive buttons
- Mobile-friendly interface

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Library | React.js |
| Styling | Tailwind CSS |
| State Management | React Context API |
| Data Fetching | Custom Hook (`useFetch`) + Fetch API |
| Build Tool | Vite |
| Deployment | Vercel |

---

## 🔌 API Used

This project uses the **[Free E-Commerce Products API](https://github.com/kolzsticks/Free-Ecommerce-Products-Api)** — a free, static JSON dataset of sample products (name, price, category, rating, image, etc.), ideal for practice e-commerce builds.

- **Endpoint:**
  ```
  https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
  ```
- Returns the **full product list** in a single request — category filtering (`Filter.jsx`) and any other derived views are handled **client-side** after the fetch, rather than via separate API endpoints.

Data fetching is abstracted into a single reusable hook: [`useFetch.js`](./src/Hooks/useFetch.js), which handles the request lifecycle (loading, data, error) so any component can consume live data with one line.

```js
const { data, loading, error } = useFetch(
  "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
);
```

---

## 🧠 React Concepts Practiced

### `useState`

Used to manage application states such as:

- Selected category
- Cart state
- Cart item count
- UI interactions

```js
const [category, setCategory] = useState("All");
const [count, setCount] = useState(0);
```

### `useEffect`

Used to trigger side effects such as fetching product data whenever the selected category changes, and syncing cart state.

```js
useEffect(() => {
  // fetch products whenever category changes
}, [category]);
```

### `useContext` + Context API

Global cart and product state (`Context.jsx`) is shared across components without prop drilling — the cart, cart count, and category filter are all accessible from any nested component.

### Custom Hooks

`useFetch.js` encapsulates the `loading` / `data` / `error` pattern into a single reusable hook, keeping components lean and free of duplicated fetch logic.

---

## 📁 Project / Component Structure

```
E-Commerce/
├── public/
├── src/
│   ├── assets/                # Static images/icons
│   ├── Cards/
│   │   ├── Card.jsx           # Individual product card
│   │   ├── Cart.jsx           # Cart view / cart items list
│   │   ├── Error.jsx          # Error state UI
│   │   ├── Filter.jsx         # Category filter UI
│   │   └── Loading.jsx        # Loading / skeleton UI
│   ├── Components/
│   │   ├── Header.jsx         # Navbar with cart icon/count
│   │   ├── Hero.jsx           # Landing hero section
│   │   └── Product.jsx        # Product grid / listing container
│   ├── Context/
│   │   └── Context.jsx        # Global state (cart, category, etc.)
│   ├── Hooks/
│   │   └── useFetch.js        # Custom hook for API calls
│   ├── App.jsx                # Root component
│   ├── index.css              # Global styles (Tailwind entry)
│   └── main.jsx                # App entry point
├── package.json
└── README.md
```

### Component Responsibilities

| Component | Responsibility |
|---|---|
| `Header.jsx` | Navigation bar, branding, live cart item count |
| `Hero.jsx` | Landing/banner section |
| `Product.jsx` | Fetches and renders the product grid |
| `Card.jsx` | Displays a single product (image, name, price, rating, add-to-cart) |
| `Cart.jsx` | Displays cart items and cart summary |
| `Filter.jsx` | Category selector for filtering products |
| `Loading.jsx` | Skeleton/spinner shown while data is being fetched |
| `Error.jsx` | Fallback UI shown when the API request fails |
| `Context.jsx` | Provides cart state, category state, and handlers app-wide |
| `useFetch.js` | Reusable hook: returns `{ data, loading, error }` for any endpoint |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SagarSingh01/E-LITE.git

# Navigate into the project
cd E-LITE

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

---

## 📌 Future Improvements

- Persist cart state with localStorage
- Product detail/single-product page with routing
- Search functionality
- Checkout flow / payment integration
- Wishlist feature
- Pagination or infinite scroll

---

## 👤 Author

**Sagar Singh**
🔗 Portfolio: [sagar-singh.vercel.app](https://sagar-singh.vercel.app)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).