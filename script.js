const products = [
  {
    name: "EJ 10 Ox Chair.",
    price: "$30,456",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    id: 1,
    headline: "Eyes Lounge",
  },
  {
    name: "EJ 50 Ox Chair.",
    price: "$2,456",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    id: 2,
    headline: "Eyes Lounge",
  },
  {
    name: "EJ 90 Ox Chair.",
    price: "$456",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww",
    id: 3,
    headline: "Eyes Lounge",
  },
];
const populerProducts = [
  {
    name: "EJ 10 Ox Chair.",
    price: "$30,456",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    id: 1,
    headline: "Eyes Lounge",
  },
  {
    name: "EJ 50 Ox Chair.",
    price: "$2,456",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
    id: 2,
    headline: "Eyes Lounge",
  },
  {
    name: "EJ 90 Ox Chair.",
    price: "$456",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww",
    id: 3,
    headline: "Eyes Lounge",
  },
];

const showProducts = () => {
  let productContainer = document.querySelector(".products");
  console.log(productContainer.innerHTML);
  let productClutter = "";
  products.forEach((product) => {
    productClutter += `<div class="product w-fit h-fit rounded-xl p-2 bg-white">
        <div class="image bg-zinc-200 rounded-xl">
        <img src="${product.image}" alt="" />
        </div>
        <div class="data w-full px-2 py-5">
          <h1 class="font-semibold text-xl leading-none tracking-tight">
            ${product.name}
          </h1>
          <div class="flex justify-between w-full items-center mt-2">
            <div class="w-1/2">
              <h3 class="font-semibold opacity-20">${product.headline}</h3>
              <h4 class="font-semibold mt-2"> ${product.price}</h4>
            </div>
            <button data-id="${product.id}" class="add w-10 h-10 rounded-full shader text-yellow-400">
              <i data-id="${product.id}" class="ri-add-line add"></i>
            </button>
          </div>
        </div>
      </div>`;
  });
  productContainer.innerHTML = productClutter;
};

const showPopulerProducts = () => {
  let productContainer = document.querySelector(".populars");
  let productClutter = "";
  products.forEach((product) => {
    productClutter += `<div
    class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
  >
    <div
      class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        src=${product.image}
        alt=${product.name}
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${product.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
        ${product.headline}
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
    </div>
  </div>`;
  });
  productContainer.innerHTML = productClutter;
};

const cart = [];

const addToCart = () => {
  document.querySelector(".products").addEventListener("click", (e) => {
    if (e.target.classList.contains("add")) {
      cart.push(products[e.target.dataset.id - 1]);
      alert("Product added in your cart");
      console.log(cart);
    }
  });
};

const showCart = () => {
  document.querySelector(".carticon").addEventListener("click", (e) => {
    console;
    document.querySelector(".cartexpnd").classList.toggle("hidden");
    let cartClutter = "";
    cart.forEach((product) => {
      cartClutter += `<div
      class="cart-item bg-white p-2 rounded-2xl flex items-start gap-3 flex-shrink-0"
    >
      <div
        class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
      >
        <img
          class="w-full h-full object-cover"
          src=${product.image}
          alt=${product.name}
        />
      </div>
      <div class="data py-2 w-full">
        <h1 class="leading-none font-semibold">${product.name}</h1>
        <h4 class="mt-3 font-semibold text-zinc-500">${product.price}</h4>
      </div>`;
    });
    document.querySelector(".cartexpnd").innerHTML = cartClutter;
  });
};

showCart();
addToCart();
showPopulerProducts();
showProducts();
