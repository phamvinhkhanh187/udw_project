function addToCart(key){
    let cartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    var test = 0
    
    for(let i=0; i < cartList.length; i++){
        if(data[key].id == cartList[i].id){
            test = 1
            cartList[i].inCart += 1
            break
        }
    }
    
    if(test == 0){
        data[key].inCart = 1
        cartList.push(data[key])
    }
    localStorage.setItem('cart', JSON.stringify(cartList))
    totalCart(key);
}

function showCart(){
    let cartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    let cartCost = localStorage.getItem('totalCost')
    let item = ``
    cartList.map((value, index) => {
        var totalInit = value.price * value.inCart;
        
        item +=`<tr>
            <td class="cart_img"><img src="${value.image}" alt=""></td>
            <td>${value.name}</td>
            <td>${value.priceDisplay}</td>
            <td class="cart_quantily"><input type="number" min="1" max="100" id="cartQuantily" value="${value.inCart}" onchange="changeQuantily(${index})"></input></td>
            <td>${totalInit}</td>
            <td><button onclick="deleteInit(${index})">Xóa</button></td>
            </tr>
    `
    })

    item += `
        <tr>
            <th colspan="4">Tổng đơn hàng</th>  
            <th colspan="2">${cartCost} VND</th>
        </tr>
    `

    document.getElementById("cartList").innerHTML = item
}

function changeQuantily(key){
    let cartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    cartList[key].inCart = document.getElementById('cartQuantily').value
    alert(cartList[key].inCart)
    localStorage.setItem('cart', JSON.stringify(cartList))
    showCart()
}

function deleteInit(key){
    let cartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    if (confirm('Bạn có muốn xóa đơn hàng?'))
    {
        cartList.splice(key, 1)
    }
    localStorage.setItem('cart', JSON.stringify(cartList))
    showCart()
}

function totalCart(key){
    let cartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    let cartCost = localStorage.getItem('totalCost')
    let total = 0
    for (let i=0; i<cartList.length; i++){
        total += (cartList[i].price * cartList[i].inCart) 
    }
    localStorage.setItem('totalCost', total)
    console.log(total)
}