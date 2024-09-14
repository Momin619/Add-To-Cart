document.getElementById("addToCartBtn").addEventListener("click", function () {
  // Create a clone of the cart icon
  const cartIcon = document.getElementById("cartIcon");
  const iconClone = cartIcon.cloneNode(true);

  // Style the clone for the animation
  iconClone.classList.add("cart-fly");
  document.body.appendChild(iconClone);

  // Remove the clone from the DOM after animation ends
  iconClone.addEventListener("animationend", () => {
    iconClone.remove();
  });

  // Optional: Add a scale effect to the original cart icon on click
  cartIcon.classList.add("animate");
  setTimeout(() => {
    cartIcon.classList.remove("animate");
  }, 300); // Duration should match the CSS transition
});
