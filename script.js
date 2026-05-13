let cartCount = 0;

const cartElement = document.getElementById('cart');
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.dataset.name;
        const productPrice = product.dataset.price;

        cartCount++;
        cartElement.textContent = `Carrinho: ${cartCount}`;

        alert(`${productName} adicionado ao carrinho por R$ ${productPrice}`);
    });
});