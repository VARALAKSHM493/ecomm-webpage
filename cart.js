
function loadCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    // Retrieve cart items from localStorage
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Clear the existing items
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
    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Load cart items when the page loads
document.addEventListener('DOMContentLoaded', loadCart);

