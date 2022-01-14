let currentPage = 1
let perPage = 12
let totalPage = Math.round(data.length / perPage)
let perPost = []

function renderData(arr){
    let post = ``
    perPost.map(value => {
        post += 
        `<div class="card">
            <div class="card_img">
                <img src="${value.image}" alt="">
            </div>
            <div class="card_title">
                ${value.name}
            </div>
            <div class="card_price">
                ${value.priceDisplay} VND/Kg
            </div>
            <div class="card_action">
                <input type="number" min="1">
                <button>Thêm vào giỏ</button>
            </div>
        </div>`
    })
    document.getElementById('posts').innerHTML = post
}

function renderFilterData(arr){
    let post = ``
    arr.map(value => {
        post += 
        `<div class="card">
            <div class="card_img">
                <img src="${value.image}" alt="">
            </div>
            <div class="card_title">
                ${value.name}
            </div>
            <div class="card_price">
                ${value.priceDisplay} VND/Kg
            </div>
            <div class="card_action">
                <input type="number" min="1">
                <button>Thêm vào giỏ</button>
            </div>
        </div>`
    })
    document.getElementById('posts').innerHTML = post
}

function searchData(){
    let valueSearch = document.getElementById('search').value
    const dataFilter = data.filter(value => {
        return value.name.toUpperCase().includes(valueSearch.toUpperCase())
    })
    if (valueSearch == '') {
        renderData(perPost)
    }
    else
        renderFilterData(dataFilter)
}

function handlePage(key){
    currentPage = key
    document.getElementById('posts').innerHTML = ''
    perPost = data.slice(
        (currentPage - 1) * perPage,
        (currentPage - 1) * perPage + perPage
    )
    perPost.map(value=>{
        document.getElementById('posts').innerHTML += 
        `<div class="card">
            <div class="card_img">
                <img src="${value.image}" alt="">
            </div>
            <div class="card_title">
                ${value.name}
            </div>
            <div class="card_price">
                ${value.priceDisplay} VND/Kg
            </div>
            <div class="card_action">
                <input type="number" min="1">
                <button>Thêm vào giỏ</button>
            </div>
        </div>`
    })
}

perPost = data.slice(
    (currentPage - 1) * perPage,
    (currentPage - 1) * perPage + perPage
)

for (let i = 1; i <= totalPage; i++){
    document.getElementById('pagination').innerHTML += `<div class="pagination"><button onclick="handlePage(${i})">${i}</button></div>`
}