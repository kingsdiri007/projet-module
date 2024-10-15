// Get all "add-to-cart-button" elements
const addToCartButtons = document.querySelectorAll('.add-to-cart-button');

// Add event listener to each button
addToCartButtons.forEach(button => {
button.addEventListener('click', () => {

 // Get the parent game card element
const gameCard = button.closest('.game-card');

 // Extract game information
const gameName = gameCard.querySelector('h3').textContent;
 const gameImage = gameCard.querySelector('img').src;
const gamePrice = gameCard.querySelector('.price').textContent;

 // Create game data object and save to local storage
 const gameData = {
name: gameName,
image: gameImage,
 price: gamePrice.replace('$', '')
};
 localStorage.setItem("cartItem_"+gameName, JSON.stringify(gameData));
console.log(localStorage.getItem(gameName))
 // Provide feedback
  alert('Game added to cart!');

   });
   /*the cart*/
});
const cartItemsList = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Retrieve game data from local storage
const cartItems = [];
for (let i = 0; i < localStorage.length; i++) {
   const key = localStorage.key(i);
    if (key.startsWith('cartItem')){
  const item = JSON.parse(localStorage.getItem(key));
  cartItems.push(item);
  }
}

// Calculate total price
let totalPrice = 0;
cartItems.forEach(item => {
   totalPrice += parseFloat(item.price);
});

// Update total price element
totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;













// Display game data in the cart
cartItems.forEach(item => {
   const cartItemElement = document.createElement('li');
  cartItemElement.innerHTML = `
   <img src="${item.image}" alt="${item.name}">
   <h3>${item.name}</h3>
   <p>${item.price}</p>
   <button class="cancel-button">Cancel</button>
  `;

   // Add event listener to the cancel button
   const cancelButton = cartItemElement.querySelector('.cancel-button');
   cancelButton.addEventListener('click', () => {
    if (confirm("do you want to cancel your order")) {
   const cartItemKey = `cartItem_${item.name}`;
   localStorage.removeItem(cartItemKey);

      location.reload();
  }

   });

  cartItemsList.appendChild(cartItemElement);
});
/*checkout*/
const checkoutButton = document.getElementById('checkout-button');





// Add event listener to the checkout button
checkoutButton.addEventListener('click', async () => {
  const creditCardNumber = prompt("Enter your credit card number");

   if (creditCardNumber && creditCardNumber.length === 16) {
    // Credit card number is valid
    alert("Congratulations on downloading our games! Enjoy them!");
    const keysToRemove = [];

    // Collect all 'cartItem_' keys
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('cartItem_')) {
         keysToRemove.push(key);
      }
  }

  // Remove collected keys
  keysToRemove.forEach(key => localStorage.removeItem(key));

  if (keysToRemove.length > 0) {
    console.log("Cart items cleared successfully.");
  } else {
     console.log("No cart items to clear.");
   }

   location.reload();}
    else {
// Credit card number is invalid
alert("Please enter a valid 16-digit credit card number.");
}
});