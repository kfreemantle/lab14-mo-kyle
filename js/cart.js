/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
// removeChild?  
// we need DOM windows pls and thx
// const selectTableRows = document.getElementById('cart');
function clearCart() {
  let selectTableRows = ['item1', 'item2', 'item3', 'item4']
  // const selectTableRows = document.querySelector('#cart tbody tr')

  for (let i = 0; i <= selectTableRows.length; i++) {  // we're looking for every iteration of the product to clear from the cart
    if (selectTableRows[i]) {
      selectTableRows[i].removeItem();

    }
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const selectTableBody = document.querySelector('#cart tbody')

  // TODO: Iterate over the items in the cart
  for (let i in state.cart.items) {
    // TODO: Create a TR
    let tr = document.createElement('tr');
    
    // TODO: Create a TD for the delete link, quantity,  and the item
    let tdDelete = document.createElement('td');
    tdDelete.textContent = 'Delete';
    tdDelete.classList.add('remover');
    tdDelete.id = i;
    let tdQuantity = document.createElement('td');
    tdQuantity.textContent = state.cart.items[i].quantity;
    let tdName = document.createElement('td');
    tdName.textContent = state.cart.items[i].product;

    selectTableBody.appendChild(tr);
    tr.appendChild(tdDelete);
    tr.appendChild(tdQuantity);
    tr.appendChild(tdName);

  }

  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if (event.target.classList.contains('remover')) {
    state.cart.removeItem(parseInt(event.target.id));
    state.cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table



}

// This will initialize the page and draw the cart on screen
renderCart();
