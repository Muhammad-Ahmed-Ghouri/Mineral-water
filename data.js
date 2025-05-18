const productsList = [
  {
    id: 1,
    product: "Rh20 1.5 Liter pet (pack of 6)",
    price: 320,
    image: "./assets/card1-image.jpeg",
    deliveryCharges: 0,
  },
  {
    id: 2,
    product: "Rh20 500 ml pet (pack of 12)",
    price: 320,
    image: "./assets/card2-image.jpeg",
    deliveryCharges: 0,
  },
  {
    id: 3,
    product: "Classic purified(19 Liters)",
    price: 80,
    image: "./assets/card-image.png",
    deliveryCharges: 30,
  },
  {
    id: 4,
    product: "Premium Mineral Boosted(19 Liters)",
    price: 100,
    image: "./assets/card-image.png",
    deliveryCharges: 30,
  },
  {
    id: 5,
    product: "Ozonated Mineral Boosted(19 Liters)",
    price: 120,
    image: "./assets/card-image.png",
    deliveryCharges: 30,
  },
];

const container = document.getElementById("product-container");

productsList.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card", `card${item.id}`);

  card.innerHTML = `
    <div class="card-section1">
      <div class="card-section1-image">
        <img src="${item.image}" alt="${item.product}" />
      </div>
      <div class="card-section1-hover-option">
        <a href="/shopping-cart.html?id=${item.id}" class="card-section1-anchor-tag">
          <button class="card-section1-hover-button">Order Now</button>
        </a>
      </div>
    </div>
    <div class="card-section2">
      <p class="card-section2-content1">${item.product}</p>
      <p class="card-section2-content3">₨${item.price}</p>
      <p class="card-section2-content2">Delivery: ₨ ${item.deliveryCharges}</p>
    </div>
  `;

  container.appendChild(card);
});
