var cart=[]; // cart items array

// All product list array
var items = [
		{
			"id": 1,
			"name": "Brown Brim",
			"price": 35.55,
			"quantity": 40,
			"max_quantity": 5,
			"category": "Hats",
			"shipping_price": 5.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Brown Brim",
			"image":"https://i.ibb.co/ZYW3VTp/brown-brim.png"
		},
		{
			"id": 2,
			"name": "Blue Beanie",
			"price": 45.55,
			"quantity": 30,
			"max_quantity": 6,
			"category": "Hats",
			"shipping_price": 5.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Blue Beanie",
			"image":"https://i.ibb.co/ypkgK0X/blue-beanie.png"
		},
		{
			"id": 3,
			"name": "Adidas NMD",
			"price": 65.55,
			"quantity": 56,
			"max_quantity": 3,
			"category": "Sneakers",
			"shipping_price": 5.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Adidas NMD",
			"image":"https://i.ibb.co/0s3pdnc/adidas-nmd.png"
		},
		{
			"id": 4,
			"name": "Black Jean Shearling",
			"price": 95.55,
			"quantity": 20,
			"max_quantity": 9,
			"category": "Jackets",
			"shipping_price": 7.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Black Jean Shearling",
			"image":"https://i.ibb.co/XzcwL5s/black-shearling.png"
		},
		{
			"id": 5,
			"name": "Blue Jean Jacket",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Jackets",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Blue Jean Jacket",
			"image":"https://i.ibb.co/mJS6vz0/blue-jean-jacket.png"
		},
		{
			"id": 6,
			"name": "Blue Tanktop",
			"price": 95.55,
			"quantity": 20,
			"max_quantity": 9,
			"category": "Womens",
			"shipping_price": 7.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Blue Tanktop",
			"image":"https://i.ibb.co/7CQVJNm/blue-tank.png"
		},
		{
			"id": 7,
			"name": "Blue Jean Jacket",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Womens",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Blue Jean Jacket",
			"image":"https://i.ibb.co/4W2DGKm/floral-blouse.png"
		},
		{
			"id": 8,
			"name": "Floral Dress",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Womens",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Floral Dress",
			"image":"https://i.ibb.co/KV18Ysr/floral-skirt.png"
		},
		{
			"id": 9,
			"name": "Camo Down Vest",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Mens",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Camo Down Vest",
			"image":"https://i.ibb.co/xJS0T3Y/camo-vest.png"
		},
		{
			"id": 10,
			"name": "Floral T-shirt",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Mens",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Floral T-shirt",
			"image":"https://i.ibb.co/qMQ75QZ/floral-shirt.png"
		},
		{
			"id": 11,
			"name": "Black & White Longsleeve",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Mens",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Black & White Longsleeve",
			"image":"https://i.ibb.co/55z32tw/long-sleeve.png"
		},
		{
			"id": 12,
			"name": "Brown Cowboy",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Hats",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Brown Cowboy",
			"image":"https://i.ibb.co/QdJwgmp/brown-cowboy.png"
		},
		{
			"id": 13,
			"name": "Adidas Yeezy",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Sneakers",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Adidas Yeezy",
			"image":"https://i.ibb.co/dJbG1cT/yeezy.png"
		},
		{
			"id": 14,
			"name": "Black Converse",
			"price": 75.55,
			"quantity": 60,
			"max_quantity": 8,
			"category": "Sneakers",
			"shipping_price": 9.5, 
			"reviews":["This is very good product","Bad product"],
			"description":"This is Black Converse",
			"image":"https://i.ibb.co/bPmVXyP/black-converse.png"
		},
	];

var list_length = items.length;  // All product item length

// Display Product list and category dropdown	
function setProducts(category=null){
	var products = ''; 
	categories = '<option>All Category</option>';
	for(var i=0; i<list_length;i++){
		flag = false;
		if(category === null)
			flag = true;
		else
			if(category == items[i].category)
				flag = true;
		if(flag)
			products+='<tr><th>'+items[i].id+'</th><th>'+items[i].name+'</th><th>'+items[i].price+'</th><th>'+items[i].quantity+'</th><th>'+items[i].max_quantity+'</th><th>'+items[i].category+'</th><th><img src="'+items[i].image+'" alt="images_images" style="width:50px; height:50px;"></th><th><a href="views/view.html?id='+items[i].id+'">View</a></th><th><button onClick="addToCart(' + items[i].id +",'"+items[i].name +"',"+items[i].price+","+items[i].shipping_price+","+ 1 + ","+items[i].shipping_price+')">Add To Cart</button></th></tr>';
		if(categories.indexOf(items[i].category) == -1)
			categories+='<option value="'+items[i].category+'">'+items[i].category+'</option>';
	}
	document.getElementById('product_list').innerHTML = '';
	document.getElementById('product_list').innerHTML = products;
	if(category === null){
		document.getElementById('category').innerHTML = categories;
	}
} 

// Category selected product
function getChnagedProducts(){
	category = document.getElementById("category").options[document.getElementById("category").selectedIndex].value;
	if(category == 'All Category')
		setProducts();
	else
		setProducts(category);
}


// Add to cart 
function addToCart(id,name,price,shipping_price,qty,max_quantity){
	console.log(cart.length)
	let isAvail= false;
	if(cart.length > 0){			
		for (var i =0; i < cart.length; i++) {
			console.log("ID: ",id,cart[i].id)
			if (cart[i].id === id) {
				let max_quantity= getItemPros(id,"max_quantity");
				if( cart[i].qty === max_quantity){
					alert("you can only select "+max_quantity+ " for this product.")
					return;
				}
				cart[i].qty +=1;
				isAvail=true;
				break;
			}
		}
	}
	console.log("isAvail: ",isAvail)
	if(isAvail===false){
		cart.push({id:id,name:name,price:price,shipping_price:shipping_price,qty:qty,max_quantity:max_quantity})
	}
	localStorage.setItem("Cart", JSON.stringify(cart));
	console.log(cart)
}

// Get any single item's any coloum value

function getItemPros(id=null, coloum=null){
	console.log(id, coloum)
	for(let i=0; i < items.length; i++){
		if(items[i].id == id){
			if (coloum!==null) {
				return items[i][coloum]
			}else{
				return items[i];
			}
		}
	}
	return false;
}

// Get all cart items
function getCartItems(){
	console.log(cart)
	let cartitems= localStorage.getItem("Cart");
	console.log(cartitems)
	if(cartitems!==null){
		return JSON.parse(cartitems);
	}else{
		return []
	}
}