# 🍕 Fast React Pizza

A modern pizza ordering web app built with **React**, **Redux Toolkit**, **React Router**, **Tailwind CSS**, and **Vite**. Browse the menu, customize your order, and place it in seconds — no account needed.

---

## ✨ Features

- 🍕 **Browse the menu** — View all available pizzas with ingredients and prices
- 🛒 **Add to cart** — Update quantities or remove items easily
- 🚚 **Priority delivery** — Option to mark an order as priority (+20% surcharge)
- 📦 **Order tracking** — Get an order ID and estimated delivery time
- 🔎 **Order lookup** — Retrieve any order using its unique ID
- ⚡ **Fast & responsive** — Built with Vite and styled with Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | UI library |
| Redux toolkit | Global state management |
| React Router | Client-side routing & data loading |
| Tailwind | Styling |
| Vite | Build tool & dev server |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **v18+**
- npm 

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/fast-react-pizza.git
cd fast-react-pizza

# Install dependencies
npm install

# Start the dev server
npm run dev
```

The app will run at **http://localhost:5173**.

### Build for production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
fast-react-pizza/
├── public/                # Static assets
├── src/
│   ├── features/          # Feature-based slices & components
│   │   ├── cart/
│   │   ├── menu/
│   │   ├── order/
│   │   └── user/
│   ├── services/          # API calls
│   ├── ui/                # Reusable UI components
│   ├── utils/             # Helper functions
│   ├── App.jsx            # App routes
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
└── package.json
```

---

## 🧭 Routes

| Path | Description |
|------|-------------|
| `/` | Home page — start your order |
| `/menu` | Pizza menu |
| `/cart` | Shopping cart |
| `/order/new` | Create a new order |
| `/order/:orderId` | Track an existing order |

---

## 🗃️ State Management

Global state is managed with **Redux Toolkit**:

- **`cartSlice`** — Cart items, quantities, total price
- **`userSlice`** — Username, address, geolocation

---

## 🌐 API

This project uses a public demo API for pizza data:

```
https://react-fast-pizza-api.jonas.io/api
```

Endpoints used:
- `GET /menu` — Fetch pizza menu
- `POST /order` — Create a new order
- `GET /order/:id` — Retrieve an order by ID

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---


## 🙏 Acknowledgements

- Course & inspiration by **Jonas Schmedtmann** — *The Ultimate React Course*
- Pizza API provided for learning purposes

---
