// Create products and store it on local storage. Min. of 5 products.
/* 
Local Sotrage is the storage on browser. comprises of the following elements
getItem(key):  retrieves data for the specified key
setItem(key, value): stores/updates/saves data on localstorage.
removeItem(key): reomve the specified key
clear() :removes all keys
JSON.parse(): allows you to convert the key to its original form. In this case it will return to being an array. Otherwise, it becomes a string by default.
*/

let wrapper = document.querySelector('[recentProducts]')
let products = JSON.parse( localStorage.getItem('products') )
 ? JSON.parse(localStorage.getItem('products') )
 : localStorage.setItem('products', JSON.stringify (    // converts the array to a string. The localstorage works with string values.
    [
        {
            id: 1,
            productName: "Tuna-Toast",
            category: "Sandwich",
            description: "Toasted Sandwich Topped With Our Homebrand style Tuna.",
            amount: 49.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/tunatoast.jpg"
        },
        {
            id: 2,
            productName: "Egg-Sandwich",
            category: "Sandwich", 
            description: "Toasted Sandwich Topped With Our Homebrand style Eggs.",
            amount: 34.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/eggSandwich.jpeg"
        },
        {
            id: 3,
            productName: "Cheese-Sando-Deluxe",
            category: "Sandwich",
            description: "Toasted-Sandwich topped with a special selection of vegetables and the highest quality cheddar cheese.",
            amount: 79.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/Gourmet-Veggie-Sandwich-5%20(1).jpg"
        },
        {
            id: 4,
            productName: "Chicken-Sub",
            category: "Sandwich",
            description: "Toasted-roll topped with a special selection of salads and our housebrand spiced chicken.",
            amount: 59.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/chickenSaladSub.jpeg"
        },
        {
            id: 5,
            productName: "Buffalo Chicken Wrap",
            category: "Wrap",
            description: "Toasted wrap filled with our buffalo style chicken and salad.",
            amount: 74.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/buffalo-chicken-wrap1-1659470768.jpg"
        },
        {
            id: 6,
            productName: "Lamb Kebab Wrap",
            category: "Wrap",
            description: "Toasted wrap filled with our special sauces, Lamb Kebabs and garnished with salad.",
            amount: 89.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/vegetarian-meatball-wrap-135788-2.jpg"
        },
        {
            id: 7,
            productName: "Citrus Burst",
            category: "Beverages",
            description: "Refreshing citrus blended drink served ice cold.",
            amount: 19.99,
            img_url: "https://achar1f.github.io/projectimages/freshBitesResources/naloamara.jpg"
        }
    ]
)) 

// to display current year
document.querySelector('[currentYear]').textContent = new Date().getUTCFullYear()

function recentProducts() {
    try{
    let arrSize = products.length 
    let latestProducts = products.reverse().slice(0, arrSize >> 1)
    latestProducts.forEach(product => {
    
        wrapper.innerHTML += `
        <div class="card my-2">
            <img src="${product.img_url}" loading="lazy" class="card-img-top" alt="${product.productName}">
        <div class="card-body">
            <h5 class="card-title">${product.productName}</h5>
            <p class="card-text">${product.description}</p>
        </div>
        </div>
        `
    })
    } catch(e) {
        wrapper.textContent = "Please contact our administrator."
        setTimeout(() => {
            location.reload()
        }, 
            2000
        )
    }
    
}
recentProducts()
