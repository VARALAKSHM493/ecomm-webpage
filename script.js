
// Initialize cart items
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to add items to cart
function addToCart(name, price) {
    // Add item to cart array
    cartItems.push({ name, price });
    
    // Save updated cart to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Optionally update cart display on home page
    updateCart();
}

// Function to update cart display (optional)
function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Clear the existing items
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
    
        // Calculate the total price
        let total = 0;
        
        // Add each item to the cart display
        cartItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name}: $${item.price}`;
            cartItemsContainer.appendChild(listItem);
            total += item.price;
        });
        
        // Update total price
        cartTotalElement.textContent = total;
    }
}

