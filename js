function init() {
    console.log("scripts initialized");
    getProducts();
}

function getProducts() {
    var productList = document.getElementById("productList");
    var products = new Array;
    products.push("T-Shirt #1", "22", "tshirt_black.jpg");
    products.push("T-Shirt #2", "25", "tshirt_white.jpg");
    products.push("T-Shirt #3", "37", "tshirt_metallica.jpg");
    products.push("T-Shirt #4", "49", "tshirt_rainbow.jpg");

    var i = 0;
    var a = i + 1;
    var b = a + 1;

    var buffer = "";

    while (i <= products.length - 1) {
        var item = products[i];
        var price = products[a];
        var photo = '<img src="' + products[b] + '" />';



        buffer += '<li><div class="product" onCLick="addToCart(this);">';
        buffer += photo + "<br/>";
        buffer += item + " / " + price;
        buffer += '</div></li>';

        i = i + 3;
        a = i + 1;
        b = i + 2;
    }
    productList.innerHTML = buffer;
}

function addToCart(item) {
    var cartList = document.getElementById("cartList");

    cartList.innerHTML += '<li>' + item.innerHTML + '</li>';
}
