# Product Inventory Manager

A browser-based inventory management tool built with HTML, CSS, and vanilla JavaScript. Add, search, delete, and track products — all saved locally in the browser with no backend required.

---

# Live Demo

https://burhanuddin-gif.github.io/Product-Inventory-Management/

---

## Features

- Add products with ID, name, price, and stock
- Search products by name
- Delete products by ID or directly from the product table
- Live inventory statistics: total products, total stock, average price
- Data persists across sessions using `localStorage`
- Keyboard navigation: press `Enter` to move between input fields and submit forms
- Fully responsive layout

---

## Project Structure

```
Product-Inventory-Manager/
├── index.html      # Page layout and section structure
├── style.css       # Styling and theme variables
└── script.js       # All logic — add, search, delete, render, statistics
```

---

## How It Works

The app is divided into four sections:

**Add New Product** — Enter a product ID, name, price, and stock quantity. Pressing `Enter` moves focus to the next field. Submitting adds the product to the list and updates all statistics.

**Search Product** — Search by product name (case-insensitive). If a match is found, a browser alert shows the product's full details.

**Delete Product** — Enter a product ID to delete it. If found, it is removed from the list and statistics are recalculated. Products can also be deleted directly from the table using the Delete button in each row.

**Product List** — A scrollable table showing all current products with ID, name, price, stock, and a per-row delete action.

**Inventory Statistics** — Three stat cards update in real time:
- Total number of products
- Total stock across all products
- Average product price

All data is stored in `localStorage` under the key `productDetail`, so the inventory survives page refreshes.

---

## Getting Started

No build tools or dependencies required.

1. Clone the repository:

```bash
git clone <https://github.com/burhanUdDin-gif/Product-Inventory-Management>
```

2. Open `index.html` in any browser.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Web Storage API (`localStorage`)
- Font Awesome (icons)
- Google Fonts — Poppins

---

## Known Limitations

- Search shows results via `alert()` — no inline display
- `addData()` and `subtractData()` perform the same calculation; they can be merged into a single `updateStats()` function
- No validation against duplicate product IDs

---

## License

This project is open source. Feel free to use, modify, or build on top of it.
