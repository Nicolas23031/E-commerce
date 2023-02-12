    var http = new XMLHttpRequest();
    http.open('get', 'products.json', true);
    http.send();
    http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        var products = JSON.parse(this.responseText);
    var img = products.image;
    var titolo = products.title;
    var descrizione = products.description;
    var prezzo = products.price;
    let output = "";
    for (let item of products) {
        output += `
				<div class="product">
					<img src="${item.image}" alt="${item.description}">
					<p class="title">${item.title}</p>
					<p class="description">${item.description}</p>
					<p class="price">
						<span>${item.price}</span>
						<span>&euro;</span>
					</p>
					<p class="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
				</div>
			`;
        }
    document.querySelector(".products").innerHTML = output;
    }
}