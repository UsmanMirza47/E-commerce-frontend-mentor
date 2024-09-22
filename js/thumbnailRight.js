let btn1 = document.querySelector("#btn-1");
let btn3 = document.querySelector("#btn-3");
let btn2 = document.querySelector("#btn-2");

// nav right variables
let cartIcon = document.querySelector("#nav-right-first");
let cartPopUp = document.querySelector(".cart-pop-up");
let cart = document.querySelector(".cart");
let cartCount = document.querySelector("#cart-btn-inner-box");

// change cart variables

let cartPopUpPara = document.querySelector(".cart-pop-up p");
let checkout = document.querySelector(".checkout");

let count = 0;

function num(val) {
  count = val;
  btn2.innerText = count;
}

// cart update function
function cartUpdate(Image, Name, Price) {
  let totalPrice = Price * count;
  let cartItem = document.createElement("div");
  cartItem.classList.add("cart-item");
  cartItem.dataset.quantity = count;

  cartCount.innerText = count;
  cartCount.classList.remove("hidden");
  cartPopUpPara.classList.add("hidden");
  checkout.classList.remove("hidden");

  cartItem.innerHTML = `
    <img src="${Image}" alt="${Name}">
    <div class="item" >
    <p>${Name} </p>
   <span>$${Price.toFixed(2)} * ${count}</span>
   <span class="total-price" >$${totalPrice.toFixed(2)}</span>
    </div>
    <button class="del">
      <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
    </button>
  `;

  cartPopUp.insertBefore(cartItem, cartPopUp.children[2]);

  let del = cartItem.querySelectorAll(".del");

  cartDel(del);
}

function cartDel(del) {
  del.forEach((Del) => {
    Del.addEventListener("click", (event) => {
      let delClick = event.target.closest(".cart-item");
      delClick.remove();

      if (!(cartPopUp.contains(document.querySelector(".cart-item")))) {
        cartPopUpPara.classList.remove("hidden");
      }

      if (cartPopUpPara.classList.contains("hidden")) {
        console.log("first is activated")
        checkout.classList.remove("hidden");
      } else {
        console.log("second is activated")
        checkout.classList.add("hidden");
      }
    });
  });
}

btn1.addEventListener("click", () => {
  if (count > 0) {
    num(count - 1);
  }
});

btn3.addEventListener("click", () => {
  num(count + 1);
});

cartIcon.addEventListener("click", () => {
  cartPopUp.classList.toggle("hidden");
  cartCount.classList.add("hidden");
});

// event listener on cart button at right thumbnail
cart.addEventListener("click", () => {
  let productName = document.querySelector(".product-name").textContent;
  let productPriceEl = document.querySelector(".price-first");
  let productPrice = parseFloat(productPriceEl.textContent.replace("$", ""));
  let productImage = document
    .querySelector(".thumbnail-left .main-img .active")
    .getAttribute("src");

  if (!(count == 0)) {
    cartUpdate(productImage, productName, productPrice);
  }

  num(0);
});

document.cookie = "name= rizwan"
localStorage.setItem("name","usman ")
sessionStorage.setItem("name","usman ")

console.log(localStorage.removeItem("name"));