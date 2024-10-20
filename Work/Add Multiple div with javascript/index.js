

const Add = document.getElementById('myDiv');
// console.log(Add.innerHTML); 

let innerHTML = '';
addItems.forEach(addItems => {
    
    innerHTML += `<div class="category_items">
            <div>
                <a href="#"><img class="sale_item" src="${addItems.image}"></a>
            </div>
            <div class="rating">
                ${addItems.image} ⭐ | ${addItems.image}
            </div>
            <div class="company-name">${addItems.name}</div>
            <div class="item-name">${addItems.company}</div>
            <div class="price">
                <span class="current-price">NetWorth Tk ${addItems.newprice}</span>
                <span class="original-price">NetWorth Tk ${addItems.oldprice}</span>
                <span class="discount">(${addItems.dicount}% Loss)</span>
            </div>
            <div class="Button_add">
                <button class ="buy_button">Add to Cart</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
Add.innerHTML = innerHTML;

// console.log(Add.innerHTML);