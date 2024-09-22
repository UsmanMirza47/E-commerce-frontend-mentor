let gallaryImage = document.querySelectorAll(".thumbnail-left .gallary .pic");
let gallaryImageOpacity = document.querySelectorAll(".gallary .pic img");
let mainImage = document.querySelectorAll(".main-img img");

// light box variables
let lightBoxBack = document.querySelector(".light-box-back");
let lightBoxMainImage = document.querySelectorAll(".light-box .main-img img");
let lightBoxGallaryImage = document.querySelectorAll(
  ".light-box .gallary .pic"
);
let lightBoxGallaryImageOpa = document.querySelectorAll(
  ".light-box .gallary .pic img"
);
let lightBoxClose = document.querySelector(".light-box-close");

let flag = 0;

// Change number function
function changeNumber(val) {
  flag += val;

  if (flag == lightBoxMainImage.length) {
    flag = 0;
  }
  if (flag < 0) {
    flag = lightBoxMainImage.length - 1;
  }

  changeImage(flag, gallaryImage, mainImage, gallaryImageOpacity);

  changeImage(
    flag,
    lightBoxGallaryImage,
    lightBoxMainImage,
    lightBoxGallaryImageOpa
  );
}

// change image function
function changeImage(index, gallaryImage, mainImage, gallaryImageOpacity) {
  mainImage.forEach((mainImg) => {
    mainImg.classList.remove("active");
  });

  gallaryImage.forEach((gallaryImg) => {
    gallaryImg.classList.remove("active");
  });

  gallaryImageOpacity.forEach((gallaryImgOpa) => {
    gallaryImgOpa.classList.remove("active");
  });

  gallaryImageOpacity[index].classList.add("active");
  mainImage[index].classList.add("active");
  gallaryImage[index].classList.add("active");
}

gallaryImage.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, gallaryImage, mainImage, gallaryImageOpacity);
  });
});

// --------------------------------------------------
// light box functionality -----------------------------
// --------------------------------------------------

mainImage.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    lightBoxBack.style.display = "flex";
    changeImage(
      index,
      lightBoxGallaryImage,
      lightBoxMainImage,
      lightBoxGallaryImageOpa
    );
  });
});

lightBoxClose.addEventListener("click", () => {
  lightBoxBack.style.display = "none";
  changeImage(flag, gallaryImage, mainImage, gallaryImageOpacity);
});

lightBoxGallaryImage.forEach((lBGI, index) => {
  lBGI.addEventListener("click", () => {
    changeImage(index, gallaryImage, mainImage, gallaryImageOpacity);
    changeImage(
      index,
      lightBoxGallaryImage,
      lightBoxMainImage,
      lightBoxGallaryImageOpa
    );
  });
});
