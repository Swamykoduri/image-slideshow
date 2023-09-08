const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const gallery = document.querySelector(".photo-gallery"); 
const images = document.querySelectorAll("img");

// set current image position is 1
let currentImg = 1;

// set timeout for pause the setTimeOut.
let timeout;

// next button image slide is activate
nextBtn.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

// previous
prevBtn.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > images.length)
    currentImg = 1;
  else if (currentImg < 1)
    currentImg = images.length;
  gallery.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}

