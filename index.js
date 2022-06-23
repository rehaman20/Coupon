"use strict";
// Coupon Related Buttons
const couponButton = document.querySelector(".coupon-button");
const closeButton = document.querySelector(".close-button");
const miniCouponButton = document.querySelector(".open-coupon");

// Coupon Cards
const couponCard = document.querySelector(".coupon-card");
const miniCouponCard = document.querySelector(".mini-coupon-card");

// Coupon Code
const couponCode = document
  .querySelector(".coupon-code p")
  .textContent.toUpperCase();

//Copying Coupon code to clipboard
function copyText() {
  navigator.clipboard.writeText(couponCode).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard");
  });
}

// Opening Coupon
miniCouponButton.addEventListener("click", function () {
  couponCard.style.opacity = "1";
  couponCard.style.filter = "blur(0)";
  couponCard.style.pointerEvents = "all";
  miniCouponCard.style.opacity = "0";
  miniCouponCard.style.pointerEvents = "none";
  miniCouponCard.style.visibility = "hidden";
});

// Copy Coupon to clipboard by clicking the copy coupon button
couponButton.addEventListener("click", function () {
  copyText();
});

// Animating Coupon rendering
closeButton.addEventListener("click", function () {
  couponCard.style.opacity = "0.6";
  couponCard.style.filter = "blur(4px)";
  couponCard.style.pointerEvents = "none";
  miniCouponCard.style.opacity = "1";
  miniCouponCard.style.pointerEvents = "all";
  miniCouponCard.style.visibility = "visible";
});

// Open tool-tip on hovering close button
closeButton.addEventListener("mouseenter", function () {
  document.querySelector(".close-coupon-button p").style.visibility = "visible";
});

// Close tool-tip on leaving the close button
closeButton.addEventListener("mouseleave", function () {
  document.querySelector(".close-coupon-button p").style.visibility = "hidden";
});
