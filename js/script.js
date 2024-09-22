// navbar menu btn function call------------------
menuBtn.addEventListener("click", Menubtn);


// navbar menu btn close function call------------
closeBtn.addEventListener("click", CloseBtn);


// navbar cart btn function call------------
cartBtn.addEventListener("click", Cartbtn);


// main thumbnail image btn function call------------
thumbnailImage.addEventListener("click", ThumbnailImage);


// main light box image close btn function call------------
lightBoxClose.addEventListener("click", LightBoxClose);


// main image box btn function call------------
imgBtn.forEach((imgBox) => {
  imgBox.addEventListener("click", ImageBox);
});

lightBoxSmallPic.forEach((smallPic) => {
  smallPic.addEventListener("click", () => {
    lightBoxSmallImg.src = smallPic.src;
  });
});

imgBtnSpan[0].addEventListener("click", () => {
  flag = 0;
});
imgBtnSpan[1].addEventListener("click", () => {
  flag = 1;
});
imgBtnSpan[2].addEventListener("click", () => {
  flag = 2;
});
imgBtnSpan[3].addEventListener("click", () => {
  flag = 3;
});

function value(v) {
  flag += v;
  if (flag == lightBoxSmallPic.length) {
    flag = 0;
  }

  if (flag < 0) {
    flag = lightBoxSmallPic.length - 1;
  }

  lightBoxSmallPic[0].addEventListener("click", () => {
    flag = 0;
  });
  lightBoxSmallPic[1].addEventListener("click", () => {
    flag = 1;
  });
  lightBoxSmallPic[2].addEventListener("click", () => {
    flag = 2;
  });
  lightBoxSmallPic[3].addEventListener("click", () => {
    flag = 3;
  });
  lightBoxSmallImg.src = lightBoxSmallPic[flag].src;
}
// function num(v) {
//   flag1 += v;
//   if (flag1 < 0) {
//     flag1 = 0;
//   }
//   NumberBtn.innerText = flag1;
// }

cartButton.addEventListener("click", () => {
  if (NumberBtn.innerText == 0) {
    cartBtnInnerBox.classList.add("hidden");
  } else {
    calculate();
  }
});

function del1() {
  document.getElementsByClassName("basket-inner-box-top")[0].outerHTML = "";
  // console.log(document.getElementsByClassName("basket-inner-box-top")[0].outerHTML)
}

function calculate() {
  cartBtnInnerBox.classList.remove("hidden");
  cartBtnInnerBox.innerText = NumberBtn.innerText;
  flag1 = 0;

  document.getElementsByClassName("cart-para")[0].classList.add("hidden");
  basketInnerBox.classList.remove("hidden");
  basketInnerBox.insertAdjacentHTML(
    "afterbegin",
    `
            <div class="basket-inner-box-top">
              <span><img src="${thumbnailImage.src}" alt=""></span>
              <div class="basket-inner-box-top-left">
                <span>Fall Limited Edition Sneakers</span>
                <span id="data-set">${
                  document.getElementsByClassName("price-first")[0].innerText
                }
                ${NumberBtn.innerText}
                ${eval(
                  document
                    .getElementsByClassName("price-first")[0]
                    .innerText.split("$")[1] * NumberBtn.innerText
                )}</span>
              </div>
              <span class="del" onclick="del1()">
                <img src="./images/icon-delete.svg" alt="">
              </span>
            </div>
            `
  );
  NumberBtn.innerText = 0;
}
