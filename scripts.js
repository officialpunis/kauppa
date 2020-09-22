function init(){
	console.log("scripts initialized");
	getProducts();
}

function getProducts(){
	var productList = document.getElementById("productList");
	var products = new Array;
		products.push("T-Shirt #1","22","tshirt_black.jpg");
		products.push("T-Shirt #2","25","tshirt_white.jpg");
		products.push("T-Shirt #3","37","tshirt_metallica.jpg");
		products.push("T-Shirt #4","49","tshirt_rainbow.jpg");
	
	var i = 0;
	var a = i + 1;
	var b = a + 1;
	
	var buffer = "";
	
	while(i<=products.length-1){
		var item = products[i];
		var price = products[a];
		var photo = '<img src="' + products[b] + '" />';
		
		
		
		buffer += '<li><div class="product" onCLick="addToCart(this);">';
		buffer += photo + "<br/>"; 
		buffer += item + " <br/>hinta: " + price + " &euro;";
		buffer += '</div></li>';
		
		i=i+3;
		a=i+1;
		b=i+2;
	}		
	productList.innerHTML = buffer;
}

function addToCart(item){
	var cartList = document.getElementById("cartList");
	var totalSum = document.getElementById("totalSum");

	cartList.innerHTML += '<li onClick="removeItem(this);" title="remove from cart">' + item.innerHTML + '</li>';

	/* erotellaan tuotetiedoista hinta, ja muutetaan se numeroiksi */
	var price = item.innerHTML.split("hinta")[1];
	    price = price.replace(":", "");
 	    price = price.replace("euroa", "");

	totalSum.innerHTML = parseInt(totalSum.innerHTML) + parseInt(price) + " &euro;&nbsp;";

	updateCartInfo();
}

function updateCartInfo(){
	var cart_number = document.getElementById("cart_number");
	var cartList = document.getElementById("cartList");
		//cart_number.innerHTML = cartList.childNodes.length-1;
	
	var i = 0;
	var a = 0;
	
	var elems = cartList.getElementsByTagName("li"); 
	
	while(i<=elems.length-1){
		if(elems[i].getAttribute("class") == "removed"){
			a = a;
		}
		else{
			a = a + 1;
		}
		cart_number.innerHTML = a;
		
		i++;
	}
}

function removeItem(which){
	var cart_number = document.getElementById("cart_number");

	    which.setAttribute("class", "removed");
	    updateCartInfo();

	/* erotellaan tuotetiedoista hinta, ja muutetaan se numeroiksi */
	var price = which.innerHTML.split("hinta")[1];
	    price = price.replace(":", "");
 	    price = price.replace("euroa", "");

	totalSum.innerHTML = parseInt(totalSum.innerHTML) - parseInt(price) + " &euro;&nbsp;";
}





