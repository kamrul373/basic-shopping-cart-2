const cart = [];
function displayProduct() {
    const cartProducts = cart;
    const totalProducts = cartProducts.length;
    let total = 0;

    document.getElementById("products-cart").innerHTML = "";
    document.getElementById("total-products").innerText = totalProducts;
    for (let i = 0; i < totalProducts; i++) {
        total = total + cartProducts[i]['productPrice'];
        document.getElementById("products-cart").innerHTML += `
        <tr>
            <th>${i + 1}</th>
            <td>${cartProducts[i]['productName']}</td>
            <td>${cartProducts[i]['productPrice']}</td>
        </tr>  `;
    }
    document.getElementById("total").innerText = total;
}
function addToCart(product) {
    const currentProductName = product.parentNode.parentNode.children[0].innerText;
    const currentProductPrice = product.parentNode.parentNode.children[1].children[0].innerText;

    const productInfo = {
        productName: currentProductName,
        productPrice: parseInt(currentProductPrice),
    }

    cart.push(productInfo);

    displayProduct();
}
