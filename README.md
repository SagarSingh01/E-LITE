<div align="center">

# 🛒 E-LITE

### A modern, responsive e-commerce web app built with React.js & Tailwind CSS

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**[🔗 Live Demo](https://e-lite-nine.vercel.app) · [🐛 Report Bug](https://github.com/SagarSingh01/E-LITE/issues) · [✨ Request Feature](https://github.com/SagarSingh01/E-LITE/issues)**

</div>

---

## 📖 About

**E-LITE** is a modern e-commerce storefront built to strengthen practical, real-world command of **React state management, the Context API, custom hooks, API handling, conditional rendering, and modern JavaScript (ES6+)**.

Rather than a template clone, every piece — from cart state to loading skeletons — was built from scratch to mirror the patterns used in production React apps.

> 💡 Whether you're browsing for inspiration, evaluating the code, or contributing, this README will walk you through everything you need.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [API Used](#-api-used)
- [React Concepts Practiced](#-react-concepts-practiced)
- [Project Structure](#-project-structure)
- [Component Responsibilities](#-component-responsibilities)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Future Improvements](#-future-improvements)
- [Author](#-author)
- [License](#-license)
- [Support](#-support)

---

## ✨ Features

<table>
<tr>
<td width="33%" valign="top">

### 🛍️ Product Features
- Browse products dynamically from an external API
- Responsive product grid
- Product image preview & zoom
- Detailed product view
- Name, category, price & rating display
- Category-based filtering
- Interactive product cards
- Add-to-cart functionality
- Live cart item count

</td>
<td width="33%" valign="top">

### ⚡ Application States
- Loading state
- Skeleton loading UI
- Error state with fallback UI
- Category selection state
- Cart state
- Dynamic product rendering

</td>
<td width="33%" valign="top">

### 🎨 UI/UX
- Fully responsive design
- Modern product card layout
- Smooth hover animations
- Product image zoom interaction
- Clean typography & spacing
- Responsive grid system
- Mobile-friendly interface

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Library** | React.js |
| **Styling** | Tailwind CSS |
| **State Management** | React Context API |
| **Data Fetching** | Custom Hook (`useFetch`) + Fetch API |
| **Build Tool** | Vite |
| **Deployment** | Vercel |

---

## 🔌 API Used

E-LITE runs on the **[Free E-Commerce Products API](https://github.com/kolzsticks/Free-Ecommerce-Products-Api)** — a free, static JSON dataset of sample products (name, price, category, rating, image, etc.), ideal for practice e-commerce builds.

```
📡 Endpoint
https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
```

The API returns the **full product list** in a single request. Category filtering (`Filter.jsx`) and any other derived views are handled **client-side** after the fetch, rather than through separate API endpoints.

All data fetching is abstracted into one reusable hook — [`useFetch.js`](./src/Hooks/useFetch.js) — which manages the request lifecycle (`loading`, `data`, `error`) so any component can pull live data in a single line:

```js
const { data, loading, error } = useFetch(
  "https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json"
);
```

---

## 🧠 React Concepts Practiced

<details open>
<summary><strong>🔹 useState</strong></summary>

Manages application state such as selected category, cart state, cart item count, and UI interactions.

```js
const [category, setCategory] = useState("All");
const [count, setCount] = useState(0);
```

</details>

<details open>
<summary><strong>🔹 useEffect</strong></summary>

Triggers side effects such as fetching product data whenever the selected category changes, and syncing cart state.

```js
useEffect(() => {
  // fetch products whenever category changes
}, [category]);
```

</details>

<details open>
<summary><strong>🔹 useContext + Context API</strong></summary>

Global cart and product state (`Context.jsx`) is shared across components without prop drilling — cart, cart count, and category filter are all accessible from any nested component.

</details>

<details open>
<summary><strong>🔹 Custom Hooks</strong></summary>

`useFetch.js` encapsulates the `loading` / `data` / `error` pattern into a single reusable hook, keeping components lean and free of duplicated fetch logic.

</details>

---

## 📁 Project Structure

```
E-LITE/
│
├── public/
│   └── ...
│
├── src/
│   ├── assets/
│   │   └── ...
│   │
│   ├── Components/
│   │   ├── Cards/
│   │   │   ├── Card.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── Filter.jsx
│   │   │   ├── ProductDetailsLoading.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── Error.jsx
│   │   │
│   │   └── Main/
│   │       ├── Header.jsx
│   │       ├── Hero.jsx
│   │       └── Footer.jsx
│   │
│   ├── Context/
│   │   └── Context.jsx
│   │
│   ├── Hooks/
│   │   └── useFetch.js
│   │
│   ├── Scroll Progress/
│   │   └── Scroll.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

---

## 🧩 Component Responsibilities

| Component | Responsibility |
|---|---|
| `Header.jsx` | Navigation bar, E-LITE branding, cart access and navigation |
| `Hero.jsx` | Main landing section introducing the E-LITE store |
| `Footer.jsx` | Footer section containing supporting information and navigation |
| `Product.jsx` | Main product section that displays the product catalog |
| `Card.jsx` | Displays individual products with images and product information |
| `ProductDetails.jsx` | Displays complete details of a selected product |
| `Cart.jsx` | Displays selected products and manages the cart interface |
| `Filter.jsx` | Filters products based on selected categories |
| `Loading.jsx` | Displays a skeleton loading UI while products are being fetched |
| `ProductDetailsLoading.jsx` | Displays a skeleton UI while product details are loading |
| `Error.jsx` | Displays fallback UI when the API request fails |
| `Context.jsx` | Manages shared application state such as cart and category |
| `useFetch.js` | Reusable custom hook for fetching and managing API data |
| `Scroll.jsx` | Handles scroll-related behavior within the application |

---

## 🚀 Getting Started

### ✅ Prerequisites

Make sure you have the following installed before running E-LITE locally:

- **Node.js** v16 or higher
- **npm**
- **Git**

### 📥 Installation

```bash
# 1. Clone the repository
git clone https://github.com/SagarSingh01/E-LITE.git

# 2. Move into the project directory
cd E-LITE

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Once running, open your browser at:

```
http://localhost:5173
```

### 🔐 Environment Variables

E-LITE uses a Vite environment variable to store the product API endpoint.

Create a `.env` file in the project root:

```env
VITE_PRODUCTS_API=https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json
```

Access it inside the app with:

```js
import.meta.env.VITE_PRODUCTS_API
```

> ℹ️ **Note:** Vite environment variables exposed to the frontend must be prefixed with `VITE_`.
>
> ⚠️ **Important:** Never commit sensitive API keys or secrets to GitHub. Add `.env` to your `.gitignore` when needed.

### 🏗️ Build for Production

```bash
# Create an optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📌 Future Improvements

| Feature | Status |
|---|---|
| 🛒 Persistent cart using `localStorage` | Planned |
| ❤️ Wishlist functionality | Planned |
| 🔎 Product search | Planned |
| 🎯 Advanced product filtering | Planned |
| 🔢 Product quantity management | Planned |
| 📦 Order management | Planned |
| 🔐 User authentication | Planned |
| 💳 Checkout & payment integration | Planned |
| ⭐ Product reviews and ratings | Planned |
| 📄 Pagination | Planned |
| ♾️ Infinite scrolling | Planned |
| 🔔 Toast notifications | Planned |
| 🌐 Backend integration | Planned |
| 📱 Further mobile UX polish | Planned |

---

## 👨‍💻 Author

<div align="center">

**Sagar Singh**

[![GitHub](https://img.shields.io/badge/GitHub-SagarSingh01-181717?style=for-the-badge&logo=github)](https://github.com/SagarSingh01)
[![Portfolio](https://img.shields.io/badge/Portfolio-sagar--singh.vercel.app-000000?style=for-the-badge&logo=vercel)](https://sagar-singh.vercel.app)

</div>

---

## 📄 License

This project is open source and available under the **[MIT License](LICENSE)**.

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a **⭐ star** on GitHub — it helps motivate further development and improvement.

<div align="center">

Made with ❤️ and lots of ☕ by **Sagar Singh**

</div>
