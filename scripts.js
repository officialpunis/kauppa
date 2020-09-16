function init(){
	console.log("scripts initialized");
	getProducts();
}

function vaihdaTeksti(teksti,vari){
	var ostoskori_btn = document.getElementById("ostoskori_btn");
	    ostoskori_btn.value = teksti;
		ostoskori_btn.setAttribute("style", "background-color: " + vari );
}

function ostoskori(){	  
	setTimeout(function(){ vaihdaTeksti("Lisätty ostoskoriin","#ccc"); }, 3000);	
	setTimeout(function(){ vaihdaTeksti("Lähetetty osoitteeseesi!","lightgreen"); }, 6000);
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
		buffer += item + " / " + price;
		buffer += '</div></li>';
		
		i=i+3;
		a=i+1;
		b=i+2;
	}		
	productList.innerHTML = buffer;
}

function addToCart(item){
	var cartList = document.getElementById("cartList");
	
	cartList.innerHTML += '<li onClick="removeItem(this);">' + item.innerHTML + '</li>';
	
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
	
	cart_number.innerHTML = parseInt(cart_number.innerHTML) -1;
}





