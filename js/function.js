let Menubtn = () => {
    mobNav.classList.remove("mob-hidden");
  }

  let CloseBtn = () => {
    mobNav.classList.add("mob-hidden");
  }

  let Cartbtn = () => {
    basket.classList.toggle("hidden");
    cartBtnInnerBox.classList.add("hidden");
  }

  let ThumbnailImage = () => {
    lightBox.classList.remove("desktop-hidden");
    lightBoxSmallImg.src = thumbnailImage.src;
  }

  let LightBoxClose = () => {
    lightBox.classList.add("desktop-hidden");
  }

  let ImageBox = () => {
    thumbnailImage.src = imgBox.src;
  }