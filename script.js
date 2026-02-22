const productsData = {
  tshirts: [
    { name: "Men's T-Shirt", img: "https://cdnp.companycasuals.com/cache/cc/5590.jpg?v=Mon%20Sep%2008%202025%2012:07:37%20GMT-1200%20(GMT-12:00)" },
    { name: "Women's T-Shirt", img: "https://cdnp.companycasuals.com/cache/cc/64001LCVC.jpg?v=Mon%20Sep%2008%202025%2013:05:26%20GMT-1200%20(GMT-12:00)" },
    { name: "Printed Tee", img: "https://cdnp.companycasuals.com/cache/cc/2000.jpg?v=Mon%20Sep%2008%202025%2012:22:38%20GMT-1200%20(GMT-12:00)" },
    { name: "Casual Tee", img: "https://cdnp.companycasuals.com/cache/cc/2000L.jpg?v=Mon%20Sep%2008%202025%2012:22:38%20GMT-1200%20(GMT-12:00)" },
    { name: "Men's T-Shirt", img: "https://cdnp.companycasuals.com/cache/cc/5590.jpg?v=Mon%20Sep%2008%202025%2012:07:37%20GMT-1200%20(GMT-12:00)" },
    { name: "Women's T-Shirt", img: "https://cdnp.companycasuals.com/cache/cc/5000L.jpg?v=Mon%20Sep%2008%202025%2013:05:27%20GMT-1200%20(GMT-12:00)" },
    { name: "Printed Tee", img: "https://cdnp.companycasuals.com/cache/cc/VL45.jpg?v=Mon%20Sep%2008%202025%2013:01:59%20GMT-1200%20(GMT-12:00)" },
    { name: "Casual Tee", img: "https://cdnp.companycasuals.com/cache/cc/PC340.jpg?v=Mon%20Sep%2008%202025%2013:02:48%20GMT-1200%20(GMT-12:00)" }
  ],
  polos: [
    { name: "Youth", img: "https://cdnp.companycasuals.com/cache/cc/YG503.jpg?v=Mon%20Sep%2008%202025%2016:03:24%20GMT-1200%20(GMT-12:00)" },
    { name: "Striped Polo", img: "https://cdnp.companycasuals.com/cache/cc/443M.jpg?v=Mon%20Sep%2008%202025%2012:26:44%20GMT-1200%20(GMT-12:00)" },
    { name: "Perfomance", img: "https://cdnp.companycasuals.com/cache/cc/64800L.jpg?v=Mon%20Sep%2008%202025%2012:26:44%20GMT-1200%20(GMT-12:00)" },
     { name: "Classic Polo", img: "https://cdnp.companycasuals.com/cache/cc/K321.jpg?v=Mon%20Sep%2008%202025%2016:03:24%20GMT-1200%20(GMT-12:00)" },
    { name: "Striped Polo", img: "https://cdnp.companycasuals.com/cache/cc/MM3020.jpg?v=Mon%20Sep%2008%202025%2016:03:24%20GMT-1200%20(GMT-12:00)" },
    { name: "Sports Polo", img: "https://cdnp.companycasuals.com/cache/cc/LK5434.jpg?v=Mon%20Sep%2008%202025%2016:03:23%20GMT-1200%20(GMT-12:00)" }
  ],
  caps: [
    { name: "Baseball Cap", img: "https://cdnp.companycasuals.com/cache/cc/NE1000.jpg?v=Mon%20Sep%2008%202025%2012:42:15%20GMT-1200%20(GMT-12:00)" },
    { name: "Snapback Cap", img: "https://cdnp.companycasuals.com/cache/cc/CS802.jpg?v=Mon%20Sep%2008%202025%2012:44:51%20GMT-1200%20(GMT-12:00)" },
    { name: "Trucker Cap", img: "https://cdnp.companycasuals.com/cache/cc/C940.jpg?v=Mon%20Sep%2008%202025%2012:44:51%20GMT-1200%20(GMT-12:00)" },
    { name: "Baseball Cap", img: "https://cdnp.companycasuals.com/cache/cc/NE1000.jpg?v=Mon%20Sep%2008%202025%2012:42:15%20GMT-1200%20(GMT-12:00)" },
    { name: "Snapback Cap", img: "https://cdnp.companycasuals.com/cache/cc/LPWU.jpg?v=Mon%20Sep%2008%202025%2012:59:27%20GMT-1200%20(GMT-12:00)" },
    { name: "Trucker Cap", img: "https://cdnp.companycasuals.com/cache/cc/C976.jpg?v=Mon%20Sep%2008%202025%2012:56:39%20GMT-1200%20(GMT-12:00)" }
  ],
  outerwear: [
    { name: "Warm-ups", img: "https://cdnp.companycasuals.com/cache/cc/NKFQ4758.jpg?v=Mon%20Sep%2008%202025%2013:29:12%20GMT-1200%20(GMT-12:00)" },
    { name: "Winter Jacket", img: "https://cdnp.companycasuals.com/cache/cc/779795.jpg?v=Mon%20Sep%2008%202025%2012:46:37%20GMT-1200%20(GMT-12:00)" },
    { name: "Windbreaker", img: "https://cdnp.companycasuals.com/cache/cc/COTOM1691.jpg?v=Mon%20Sep%2008%202025%2012:46:36%20GMT-1200%20(GMT-12:00)" },
     { name: "Warm", img: "https://cdnp.companycasuals.com/cache/cc/NKFQ4758.jpg?v=Mon%20Sep%2008%202025%2013:29:12%20GMT-1200%20(GMT-12:00)" },
    { name: "Vests", img: "https://cdnp.companycasuals.com/cache/cc/OR322227.jpg?v=Mon%20Sep%2008%202025%2013:29:11%20GMT-1200%20(GMT-12:00)" },
    { name: "Windbreaker", img: "https://cdnp.companycasuals.com/cache/cc/L919.jpg?v=Mon%20Sep%2008%202025%2013:29:11%20GMT-1200%20(GMT-12:00)" }
  ],
  bags: [
    { name: "Duffels", img: "https://cdnp.companycasuals.com/cache/cc/108085.jpg?v=Mon%20Sep%2008%202025%2013:19:33%20GMT-1200%20(GMT-12:00)" },
    { name: "Grocery totes", img: "https://cdnp.companycasuals.com/cache/cc/BG412.jpg?v=Mon%20Sep%2008%202025%2013:26:50%20GMT-1200%20(GMT-12:00)" },
    { name: "Laptop Bag", img: "https://cdnp.companycasuals.com/cache/cc/TMB109.jpg?v=Mon%20Sep%2008%202025%2012:49:21%20GMT-1200%20(GMT-12:00)" },
    { name: "Travel Bag", img: "https://cdnp.companycasuals.com/cache/cc/COTOM1691.jpg?v=Mon%20Sep%2008%202025%2012:46:36%20GMT-1200%20(GMT-12:00)" },
    { name: "Eco friendly", img: "https://cdnp.companycasuals.com/cache/cc/BG420.jpg?v=Mon%20Sep%2008%202025%2013:19:33%20GMT-1200%20(GMT-12:00)" },
    { name: "Rolling Bag", img: "https://cdnp.companycasuals.com/cache/cc/611024.jpg?v=Mon%20Sep%2008%202025%2013:19:34%20GMT-1200%20(GMT-12:00)" }
  ],
  personal: [
    { name: "port Authority", img: "https://cdnp.companycasuals.com/cache/cc/C960.jpg?v=Mon%20Sep%2008%202025%2013:15:47%20GMT-1200%20(GMT-12:00)" },
    { name: "port Authority Strech", img: "https://cdnp.companycasuals.com/cache/cc/CT105086.jpg?v=Mon%20Sep%2008%202025%2013:13:52%20GMT-1200%20(GMT-12:00)" },
    { name: "port Authority Large", img: "https://cdnp.companycasuals.com/cache/cc/G100.jpg?v=Mon%20Sep%2008%202025%2013:13:52%20GMT-1200%20(GMT-12:00)" },
      { name: "port Authority", img: "https://cdnp.companycasuals.com/cache/cc/C960.jpg?v=Mon%20Sep%2008%202025%2013:15:47%20GMT-1200%20(GMT-12:00)" },
    { name: "corner Stone", img: "https://cdnp.companycasuals.com/cache/cc/CS401.jpg?v=Mon%20Sep%2008%202025%2016:13:19%20GMT-1200%20(GMT-12:00)" },
    { name: "port Authority Large", img: "https://cdnp.companycasuals.com/cache/cc/FS07.jpg?v=Mon%20Sep%2008%202025%2016:12:18%20GMT-1200%20(GMT-12:00)" }
  ],
  bottoms: [
    { name: "Jeans", img: "https://cdnp.companycasuals.com/cache/cc/PC78YJ.jpg?v=Mon%20Sep%2008%202025%2012:52:26%20GMT-1200%20(GMT-12:00)" },
    { name: "Cargo Pants", img: "https://cdnp.companycasuals.com/cache/cc/WW3150S.jpg?v=Mon%20Sep%2008%202025%2012:52:26%20GMT-1200%20(GMT-12:00)" },
    { name: "Shorts", img: "https://cdnp.companycasuals.com/cache/cc/WW3150S.jpg?v=Mon%20Sep%2008%202025%2012:52:26%20GMT-1200%20(GMT-12:00)" },
    { name: "fullpeant", img: "https://cdnp.companycasuals.com/cache/cc/CTS106672.jpg?v=Mon%20Sep%2008%202025%2013:10:38%20GMT-1200%20(GMT-12:00)" },
    { name: "Workwear", img: "https://cdnp.companycasuals.com/cache/cc/CT103542.jpg?v=Mon%20Sep%2008%202025%2013:10:38%20GMT-1200%20(GMT-12:00)" },
    { name: "Shorts", img: "https://cdnp.companycasuals.com/cache/cc/WW4750T.jpg?v=Mon%20Sep%2008%202025%2013:09:33%20GMT-1200%20(GMT-12:00)" }
  ],
};

function showCategory(category) {
  const container = document.getElementById("products");
  const title = document.getElementById("category-title");
  title.innerText = category.toUpperCase();

  container.innerHTML = "";
  productsData[category].forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <p>${p.name}</p>
      </div>
    `;
  });
}

// Show T-Shirts by default when page loads
window.onload = () => {
  showCategory("tshirts");
};


// Search function
function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  let results = [];

  for (let category in productsData) {
    results = results.concat(productsData[category].filter(p => p.name.toLowerCase().includes(query)));
  }

  const container = document.getElementById("products");
  const title = document.getElementById("category-title");
  title.innerText = "Search Results";

  container.innerHTML = "";
  results.forEach(p => {
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}" alt="${p.name}">
        <p>${p.name}</p>
      </div>
    `;
  });

  if (results.length === 0) {
    container.innerHTML = "<p>No products found.</p>";
  }
}
