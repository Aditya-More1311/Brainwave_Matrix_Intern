function searchProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        const name = product.querySelector('h3').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}
function showProductDetails(image, name, price, description) {
    document.getElementById('detail-image').src = image;
    document.getElementById('detail-name').textContent = name;
    document.getElementById('detail-price').textContent = `$${price}`;
    document.getElementById('detail-description').textContent = description;
    document.getElementById('product-details').style.display = 'block';
}
function checkout() {
    document.getElementById('cart').style.display = 'none';
    document.getElementById('checkout').style.display = 'block';
}

function confirmOrder(event) {
    event.preventDefault();
    alert('Order placed successfully!');
    cart = [];
    total = 0;
    updateCart();
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('cart').style.display = 'block';
}
function confirmOrder(event) {
    event.preventDefault();
    document.getElementById('checkout').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
}