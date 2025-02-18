//Navbar
const menuButton = document.querySelector('.menuBtn');
console.log(menuButton);

menuButton.addEventListener('click', (show) => {
    const menuList = document.querySelector('.rightNav')
    menuList.classList.toggle('show');
})


//Products
const products = [
    { id: 1, product_name: "Titan", img_src: "assets/images/1.png", price: "2000", buy: "Add to Cart" },
    { id: 2, product_name: "Casio", img_src: "assets/images/2.png", price: "4000", buy: "Add to Cart" },
    { id: 3, product_name: "Boult", img_src: "assets/images/3.png", price: "6000", buy: "Add to Cart" },
    { id: 4, product_name: "Boat", img_src: "assets/images/4.png", price: "2000", buy: "Add to Cart" },
    { id: 5, product_name: "Apple", img_src: "assets/images/5.png", price: "8000", buy: "Add to Cart" },
    { id: 6, product_name: "FireBolt", img_src: "assets/images/6.png", price: "1000", buy: "Add to Cart" },
    { id: 7, product_name: "Gshark", img_src: "assets/images/7.png", price: "500", buy: "Add to Cart" },
    { id: 8, product_name: "Amazefit", img_src: "assets/images/8.png", price: "7000", buy: "Add to Cart" },
    { id: 9, product_name: "Mi", img_src: "assets/images/10.png", price: "100", buy: "Add to Cart" },
    { id: 10, product_name: "Titan", img_src: "assets/images/11.png", price: "30000", buy: "Add to Cart" },
    { id: 11, product_name: "Fastrack", img_src: "assets/images/3.png", price: "12000", buy: "Add to Cart" },
    { id: 12, product_name: "Casio", img_src: "assets/images/8.png", price: "7000", buy: "Add to Cart" },
    { id: 13, product_name: "Pebble", img_src: "assets/images/1.png", price: "15000", buy: "Add to Cart" },
    { id: 14, product_name: "Apple", img_src: "assets/images/6.png", price: "12000", buy: "Add to Cart" },
    { id: 15, product_name: "Fastrack", img_src: "assets/images/8.png", price: "1000", buy: "Add to Cart" },
    { id: 16, product_name: "Boat", img_src: "assets/images/4.png", price: "1100", buy: "Add to Cart" },
    { id: 17, product_name: "Boult", img_src: "assets/images/1.png", price: "10000", buy: "Add to Cart" },
    { id: 18, product_name: "FireBolt", img_src: "assets/images/6.png", price: "10000", buy: "Add to Cart" },
    { id: 19, product_name: "Pebble", img_src: "assets/images/9.png", price: "10000", buy: "Add to Cart" },
    { id: 20, product_name: "Apple", img_src: "assets/images/11.png", price: "10000", buy: "Add to Cart" },
    { id: 21, product_name: "Titan", img_src: "assets/images/11.png", price: "1000", buy: "Add to Cart" },


]
const items = document.querySelector('.items');
const mapProduct = products.map((val) => {
    const subitems = document.createElement('div');
    subitems.classList.add('subitems');
    subitems.innerHTML = `<div class="items_img"><img src=${val.img_src}></div>
    <h3>${val.product_name}</h3>
    <h4>&#8377 ${val.price}</h4>
    <button type="submit" class="AddtoCart">${val.buy}</button>`
    items.append(subitems)


    // //Adding items to Add to cart
    // const cartItems = [];
    // const addbutton = document.querySelector('.AddtoCart');
    // addbutton.addEventListener('click', (add) => {
    //     cartItems.push(val);
    //     console.log(cartItems);
    // })
    
    
})




