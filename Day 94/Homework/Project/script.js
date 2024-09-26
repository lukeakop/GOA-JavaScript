// Initialize an empty cart array to store our items
// We use an array because it allows us to easily add, remove, and manipulate items
let cart = [];

// Function to add item to cart
// This function is called when the user clicks the "Add Item" button
function addToCart(name, price, quantity) {

  // Add a new item object to the cart array
  // We use an object to keep all information about an item together
  cart.push({name, price, quantity});

  // After adding the item, we update the display to show the new item
  updateCartDisplay();
}

// Function to update the cart display
// This function is called whenever we modify the cart (add, remove, or update items)
function updateCartDisplay() {

  // Get the element where we will display the cart items
  let cartItemsElement = document.getElementById('cart-items');

  // Clear the current contents of the cart display
  // This is necessary to avoid duplicating items when we redraw the cart
  cartItemsElement.innerHTML = '';

  // Loop through each item in the cart
  // We use forEach to apply the same operations to each item
  cart.forEach(item => {

    // Create a new div element for each item
    // This allows us to structure each item's display independently
    const itemElement = document.createElement('div');

    // Set the HTML content of the div element to display item details
    // We use a template literal for easy string interpolation
    // We also add buttons for removing the item and adjusting quantity
    itemElement.innerHTML = `
      <p>${item.name} - $${item.price} x ${item.quantity}</p>
      <button onclick="removeItem('${item.name}')">Remove</button>
      <button onclick="updateQuantity('${item.name}', ${item.quantity + 1})">+</button>
      <button onclick="updateQuantity('${item.name}', ${item.quantity - 1})">-</button>
    `;

    // Add the new item div to the cart display
    cartItemsElement.appendChild(itemElement);
  });
  
  // After updating the items, we update the total price display
  updateTotal();
}

// Function to remove an item from the cart
// This function is called when the user clicks the "Remove" button for an item
const removeItem = (name) => {

  // Filter out the item with the given name
  // We use filter to create a new array without the removed item
  cart = cart.filter(item => item.name !== name);

  // After removing the item, we update the display
  updateCartDisplay();
};

// Function to update the quantity of an item in the cart
// This function is called when the user clicks the "+" or "-" buttons for an item
const updateQuantity = (name, newQuantity) => {

  // Find the item in the cart
  // We use find to locate the specific item to update
  const item = cart.find(item => item.name === name);
  if(item) {

    // Update the quantity, ensuring it's not less than 0
    // We use Math.max to prevent negative quantities
    item.quantity = Math.max(0, newQuantity);

    // If quantity is 0, remove the item from the cart
    // This keeps the cart clean of items with 0 quantity
    if(item.quantity === 0){
      removeItem(name);
    } else {

      // If quantity is not 0, just update the display
      updateCartDisplay();
    }
  }
};

// Function to update the total price
// This function is called every time we update the cart display
const updateTotal = () => {

  // Calculate the total price of all items in the cart
  // We use reduce to sum up the prices of all items
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Apply a 10% discount if the total is over $100
  const discount = total > 100 ? total * 0.9 : total;

  // Update the total amount displayed on the page
  // We use toFixed(2) to always show 2 decimal places
  document.getElementById('total-amount').textContent = discount.toFixed(2);
};

// Function to filter items based on price range
// This function is called when the user clicks the "Filter" button
const filterItems = (minPrice, maxPrice) => {

  // Create a new array with only the items in the specified price range
  // We use filter to select only the items that meet our criteria
  const filteredItems = cart.filter(item => item.price >= minPrice && item.price <= maxPrice);

  // Display the filtered items
  displayFilteredItems(filteredItems);
};

// Function to display filtered items
// This function is called by filterItems to show the results of filtering
const displayFilteredItems = (items) => {

  // Get the element where we'll display the filtered items
  const filteredItemsElement = document.getElementById('filtered-items');

  // Clear any previous filtered items and add a heading
  filteredItemsElement.innerHTML = '<h3>Filtered Items:</h3>';

  // Add each filtered item to the display
  items.forEach(item => {
    const itemElement = document.createElement('p');
    itemElement.textContent = `${item.name} - $${item.price}`;
    filteredItemsElement.appendChild(itemElement);
  });
};

// Event listener for adding items
// This sets up the interaction for the "Add Item" button
document.getElementById('add-item').addEventListener('click', () => {

  // Get the values from the input fields
  const name = document.getElementById('item-name').value;
  const price = parseFloat(document.getElementById('item-price').value);
  const quantity = parseInt(document.getElementById('item-quantity').value);

  // Only add the item if all fields have valid values
  if(name && price && quantity){
    addToCart(name, price, quantity);

    // Clear input fields after adding the item
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
    document.getElementById('item-quantity').value = '';
  }
});

// Event listener for filtering items
// This sets up the interaction for the "Filter" button
document.getElementById('filter-items').addEventListener('click', () => {

  // Get the min and max prices from the input fields
  // If no value is entered, use 0 for min and Infinity for max
  const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
  const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;
  
  // Call the filterItems function with these prices
  filterItems(minPrice, maxPrice);
});
