// /*************************************************
//  * EXERCICE 3 - Nombres, calculs & TVA
//  * Notions : opérations mathématiques, incrémentation
//  *************************************************/

// /* --- Correction Exercice 1 & 2 --- */

// const shopName = "Ma Boutique JS";
// const city = "Lyon";
// let isOpen = true;
// let productCount = 3;
// let slogan = "Des goodies pour développeurs passionnés !";

// const taglineElement = document.querySelector(".site-tagline");
// if (taglineElement) {
//   taglineElement.textContent =
//     "Bienvenue dans " + shopName + " à " + city + " 👋";
// }

// const yearSpan = document.getElementById("year");
// if (yearSpan) {
//   yearSpan.textContent = new Date().getFullYear();
// }

// let welcomeMessage =
//   "Bienvenue dans " + shopName + " située à " + city + " !";
// let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
// let sloganLength = slogan.length;
// let sloganUppercase = slogan.toUpperCase();
// let sloganModified = slogan.replace("goodies", "trésors");

// /* --- Nouveautés Exercice 3 --- */

// // Prix d'exemple et TVA


// let examplePriceHT = 20;
// const TVA = 0.2;

// let examplePriceTTC = examplePriceHT + (examplePriceHT * TVA);

// console.log("Prix HT exemple :", examplePriceHT);
// console.log("Prix TTC exemple :", examplePriceTTC);

// // Compteur de ventes
// let salesCount = 0;
// salesCount++;
// salesCount++;

// console.log("Nombre de ventes :", salesCount);















// /* --- Rendu visuel Exo 3 --- */

// const cartTotalHeader = document.getElementById("cart-total");
// const cartTotalAside = document.getElementById("cart-total-aside");

// if (cartTotalHeader) {
//   cartTotalHeader.textContent = examplePriceTTC.toFixed(2) + " €";
// }
// if (cartTotalAside) {
//   cartTotalAside.textContent = examplePriceTTC.toFixed(2) + " €";
// }

// const cartMessageElement = document.getElementById("cart-message");
// if (cartMessageElement) {
//   cartMessageElement.textContent =
//     "Exemple de prix TTC affiché dans le panier (exercice 3).";
// }

// console.log("Exercice 3 chargé ✅");
// exo4

// function calculatePriceTTC(priceHT) {
//    let ttc=priceHT-(priceHT*0.2);
//    return ttc;
// }

// function formatPrice(price) {
//    let arrondit = Math.round(price * 100) / 100;
//    alert (`${arrondit}€`)
// }
// priceHT=15.32132;
// calculatePriceTTC(priceHT);

// let ttc2 = calculatePriceTTC(priceHT);
// formatPrice(ttc2);

// exo5

let featuredProductName="le nom de produit";
let featuredProductPriceHT=12.3455433;
let featuredProductDescription="Ceci est un super description";
let featuredProductImage="https://images.pexels.com/photos/34533776/pexels-photo-34533776.jpeg";

const productlist=document.getElementById("product-list");

function createFeaturedProductCard() {
    const article = document.createElement('article');
    const img = document.createElement("img");
    const nomproduit = document.createElement("h3");

    nomproduit.textContent = `${featuredProductName}`;
    nomproduit.classList.add('product-title');

    img.classList.add('product-image');
    img.src = featuredProductImage;
    img.alt = "le alt";
    
    function calculatePriceTTC(priceHT) {
    let ttc=priceHT+(priceHT*0.2);
    return ttc;
    }
    
    function formatPrice(price) {
    return price.toFixed(2).replace(".", ",") + " €";
    }

    priceHT=featuredProductPriceHT;
    calculatePriceTTC(priceHT);
    let ttc2 = calculatePriceTTC(priceHT);
    formatPrice(ttc2);
    
    const prixttc = document.createElement("p");
    const descriptionproduit = document.createElement("p");

    prixttc.textContent = `le prix ttc est ${formatPrice(ttc2)}`;
    prixttc.classList.add('product-price');

    descriptionproduit.textContent = featuredProductDescription;
    descriptionproduit.classList.add('product-description');

    article.classList.add('product-card');

    productlist.appendChild(article);
    article.appendChild(img);
    article.appendChild(nomproduit);
    article.appendChild(prixttc);
    article.appendChild(descriptionproduit);
    return article;
}
createFeaturedProductCard() ;
createFeaturedProductCard() ;
createFeaturedProductCard() ;
createFeaturedProductCard() ;
createFeaturedProductCard() ;
createFeaturedProductCard() ;
