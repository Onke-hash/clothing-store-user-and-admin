let products = [
    { id: 1, name: "Blue T-Shirt", category: "Clothing", price: 19.99, stock: 50, image: "images/blue-tshirt.jpeg", description: "Comfortable cotton t-shirt" },
    { id: 2, name: "Black Jeans", category: "Clothing", price: 39.99, stock: 30, image: "images/black-jeans.jpeg", description: "Slim fit black jeans" },
    { id: 3, name: "Backpack", category: "Bags", price: 50, stock: 20, image: "images/backpack.jpeg", description: "Durable backpack for daily use" },
    { id: 4, name: "Tote Bag", category: "Bags", price: 30, stock: 25, image: "images/tote-bag.jpeg", description: "Stylish canvas tote bag" },
    { id: 5, name: "Messenger Bag", category: "Bags", price: 40, stock: 15, image: "images/messenger-bag.jpeg", description: "Leather messenger bag" },
    { id: 6, name: "Vintage Rock T-Shirt", category: "Clothing", price: 25, stock: 40, image: "images/vintage-rock-tshirt.jpeg", description: "Retro rock band t-shirt" },
    { id: 7, name: "Vintage Graphic Tee", category: "Clothing", price: 22, stock: 35, image: "images/vintage-graphic-tee.jpeg", description: "Graphic print vintage tee" },
    { id: 8, name: "Wool Sweater", category: "Clothing", price: 45, stock: 25, image: "images/wool-sweater.jpeg", description: "Warm wool sweater" },
    { id: 9, name: "Cashmere Sweater", category: "Clothing", price: 60, stock: 20, image: "images/cashmere-sweater.jpeg", description: "Soft cashmere sweater" },
    { id: 10, name: "Zip Hoodie", category: "Clothing", price: 35, stock: 30, image: "images/zip-hoodie.jpeg", description: "Comfortable zip-up hoodie" },
    { id: 11, name: "Pullover Hoodie", category: "Clothing", price: 30, stock: 40, image: "images/pullover-hoodie.jpeg", description: "Casual pullover hoodie" },
    { id: 12, name: "Sneakers", category: "Shoes", price: 70, stock: 15, image: "images/sneakers.jpeg", description: "Stylish running sneakers" },
    { id: 13, name: "Boots", category: "Shoes", price: 80, stock: 10, image: "images/boots.jpeg", description: "Rugged leather boots" },
    { id: 14, name: "Classic Watch", category: "Accessories", price: 100, stock: 20, image: "images/watch.jpeg", description: "Elegant wrist watch" },
    { id: 15, name: "Silver Necklace", category: "Accessories", price: 50, stock: 25, image: "images/necklace.jpeg", description: "Silver chain necklace" },
    { id: 16, name: "Beaded Bracelet", category: "Accessories", price: 30, stock: 30, image: "images/bracelet.jpeg", description: "Beaded bracelet" },
    { id: 17, name: "Luxury Oud Perfume", category: "Perfumes", price: 120, stock: 15, image: "images/oud-perfume.jpeg", description: "Rich oriental oud fragrance" },
    { id: 18, name: "Floral Essence Perfume", category: "Perfumes", price: 90, stock: 20, image: "images/floral-perfume.jpeg", description: "Light floral luxury scent" },
    { id: 19, name: "AirPods Pro", category: "Electronics", price: 249, stock: 10, image: "images/airpods-pro.jpeg", description: "Wireless noise-canceling earbuds" },
    { id: 20, name: "Wired Earphones", category: "Electronics", price: 29, stock: 50, image: "images/earphones.jpeg", description: "High-quality wired earphones" },
    { id: 21, name: "Apple Headphones", category: "Electronics", price: 199, stock: 12, image: "images/apple-headphones.jpeg", description: "Over-ear wireless headphones" },
    { id: 22, name: "Nike Crew Socks", category: "Clothing", price: 15, stock: 60, image: "images/nike-socks.jpeg", description: "Comfortable cotton crew socks" },
    { id: 23, name: "Nike Headband", category: "Accessories", price: 10, stock: 40, image: "images/headband.jpeg", description: "Sweat-absorbing sports headband" },
    { id: 24, name: "Classy Sunglasses", category: "Accessories", price: 80, stock: 25, image: "images/sunglasses.jpeg", description: "Stylish polarized sunglasses" },
  ];
  
  let currentUser = null;
  
  const db = {
    getProducts: () => {
      return Promise.resolve([...products]);
    },
    addProduct: (product) => {
      product.id = products.length + 1;
      products.push(product);
      return Promise.resolve(product);
    },
    updateProduct: (product) => {
      products = products.map((p) => (p.id === product.id ? product : p));
      return Promise.resolve(product);
    },
    deleteProduct: (id) => {
      products = products.filter((p) => p.id !== id);
      return Promise.resolve();
    },
  };
  
  // Show Section
  function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");
    const headerControls = document.getElementById("header-controls");
    headerControls.style.display = sectionId === "login-section" ? "none" : "flex";
  }
  
  // Handle Login
  document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorElement = document.getElementById("login-error");
  
    if (email === "admin@example.com" && password === "admin123") {
      currentUser = { role: "admin", email };
      showSection("admin-dashboard");
      updateAdminProductList();
      errorElement.classList.add("hidden");
    } else if (email === "user@example.com" && password === "user123") {
      currentUser = { role: "user", email };
      showSection("user-dashboard");
      updateUserProductList();
      errorElement.classList.add("hidden");
    } else {
      errorElement.textContent = "Invalid credentials";
      errorElement.classList.remove("hidden");
    }
  });
  
  // Handle Logout
  document.getElementById("logoutBtn").addEventListener("click", () => {
    currentUser = null;
    showSection("login-section");
  });
  
  // User Dashboard Logic
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  
  function updateUserProductList() {
    db.getProducts().then((products) => {
      const search = searchInput.value.toLowerCase();
      const category = categoryFilter.value;
      const filteredProducts = products.filter(
        (product) =>
          product.name.toLowerCase().includes(search) &&
          (category === "All" || product.category === category)
      );
  
      document.getElementById("user-productList").innerHTML = filteredProducts
        .map(
          (product) => `
            <div class="product-card" role="region" aria-label="Product: ${product.name}">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <h3>${product.name}</h3>
              <p class="description">${product.description}</p>
              <p class="price">$${product.price.toFixed(2)}</p>
              <p class="stock">Stock: ${product.stock}</p>
            </div>
          `
        )
        .join("");
    });
  }
  
  searchInput.addEventListener("input", updateUserProductList);
  categoryFilter.addEventListener("change", updateUserProductList);
  
  // Admin Dashboard Logic
  const productForm = document.getElementById("productForm");
  let isEditing = false;
  
  function updateAdminProductList() {
    db.getProducts().then((products) => {
      document.getElementById("admin-productList").innerHTML = products
        .map(
          (product) => `
            <div class="product-card" role="region" aria-label="Product: ${product.name}">
              <img src="${product.image}" alt="${product.name}" class="product-image" />
              <h3>${product.name}</h3>
              <p class="description">${product.description}</p>
              <p class="price">$${product.price.toFixed(2)}</p>
              <p class="stock">Stock: ${product.stock}</p>
              <div class="button-group">
                <button class="edit-btn" data-id="${product.id}" aria-label="Edit ${product.name}">Edit</button>
                <button class="delete-btn" data-id="${product.id}" aria-label="Delete ${product.name}">Delete</button>
              </div>
            </div>
          `
        )
        .join("");
  // Editing
      document.querySelectorAll(".edit-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.getAttribute("data-id"));
          db.getProducts().then((products) => {
            const product = products.find((p) => p.id === id);
            document.getElementById("productId").value = product.id;
            document.getElementById("name").value = product.name;
            document.getElementById("category").value = product.category;
            document.getElementById("price").value = product.price;
            document.getElementById("stock").value = product.stock;
            document.getElementById("image").value = product.image;
            document.getElementById("description").value = product.description;
            document.getElementById("formTitle").textContent = "Edit Product";
            document.querySelector("#productForm button").textContent = "Update Product";
            isEditing = true;
          });
        });
      });
  // Deleting
      document.querySelectorAll(".delete-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const id = parseInt(btn.getAttribute("data-id"));
          db.deleteProduct(id).then(() => {
            updateAdminProductList();
          });
        });
      });
    });
  }
  
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const product = {
      id: isEditing ? parseInt(document.getElementById("productId").value) : null,
      name: document.getElementById("name").value,
      category: document.getElementById("category").value,
      price: parseFloat(document.getElementById("price").value),
      stock: parseInt(document.getElementById("stock").value),
      image: document.getElementById("image").value,
      description: document.getElementById("description").value,
    };
  
    const dbOperation = isEditing ? db.updateProduct(product) : db.addProduct(product);
    dbOperation.then(() => {
      isEditing = false;
      productForm.reset();
      document.getElementById("formTitle").textContent = "Add Product";
      document.querySelector("#productForm button").textContent = "Add Product";
      updateAdminProductList();
    });
  });
  
  // Initial setup
  showSection("login-section");