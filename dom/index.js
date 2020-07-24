// var item tugas 
var items = [
  [
    "001",
    "Keyboard Logitek",
    60000,
    "Keyboard yang mantap untuk kantoran",
    "logitek.jpg",
  ],
  ["002", "Keyboard MSI", 300000, "Keyboard gaming MSI mekanik", "msi.jpg"],
  [
    "003",
    "Mouse Genius",
    50000,
    "Mouse Genius biar lebih pinter",
    "genius.jpeg",
  ],
  ["004", "Mouse Jerry", 30000, "Mouse yang disukai kucing", "jerry.jpg"],
];

function viewProduct(items) {
  items.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card col-md-3 mt-4";
    var single = `
      <img src="assets/${data[4]}" class="card-img-top" alt="${data[1]}">
      <div class="card-body">
          <h5 class="card-title" id="itemName">${data[1]}</h5>
          <p class="card-text" id="itemDesc">${data[3]}g</p>
          <p class="card-text">Rp Harga ${data[2]}</p>
          <a href="#" class="btn btn-primary" id="addCart">Tambahkan ke keranjang</a>
      </div>
    `;
    card.innerHTML = single;

    document.getElementById("listBarang").appendChild(card);
  });
}

// render
viewProduct(items);

// search button click !!
const formSearch = document.getElementById("formItem");
formSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchInput = document.getElementById("keyword").value;
  let output = items;
  if (searchInput) {
    output = output.filter((data) =>
      data[1].toLowerCase().includes(searchInput.toLowerCase())
    );
    if (!output.length) alert("tidak ada hasil pencarian !");
  }

  // remove all child dom before rendering
  document.getElementById("listBarang").innerHTML = "";

  // render product
  viewProduct(output);
});

// add to cart;;
const addtoCart = document.querySelectorAll("#addCart");
const cart = document.getElementById("cart");
addtoCart.forEach((data) => {
  data.addEventListener("click", (e) => {
    e.preventDefault();
    const add = Number(cart.childNodes[3].nodeValue);
    cart.childNodes[3].nodeValue = add + 1;
  });
});
