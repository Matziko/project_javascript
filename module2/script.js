// - Créer une variable pour le nom de la boutique
let shopName = "boutiquejs";
// - Créer une variable pour la ville
let city = "lyon";
// - Créer une variable booléenne pour savoir si la boutique est ouverte
let isOpen = true;
if (isOpen) {
    isOpen="ouverte"
} else {
   isOpen="fermée"
} ; 
// - Créer une variable pour le nombre de produits
let productCount = 10;
// - Créer une variable pour le slogan
let slogan = "La qualité ? Oui. La modestie ? Un peu moins.";
// - Afficher un message de bienvenue dans la console
console.log("BIENVENUE" ,slogan, "et le city est : ", city , "la boutique est :",isOpen,"et le nombre de produits est :",productCount);

//   (indice : concaténer texte + variables)

// - Afficher le slogan dans la console

// - Selon la variable qui indique si la boutique est ouverte :
//   - afficher dans la console un message “ouverte”
//   - ou un message “fermée”
//   (indice : utiliser une condition simple avec if / else)

    // exo2

// - Partir du slogan déjà créé à l’exercice 1

// - Créer un premier message de bienvenue en collant du texte et des variables
//   (indice : utiliser l’opérateur pour concaténer des chaînes)
let message = ("BIENVENUE" +slogan+ "la ville est : "+ city + "la boutique est :"+isOpen+"et le nombre de produits est :"+productCount);


// - Créer un deuxième message de bienvenue en utilisant une autre syntaxe
//   qui permet d’injecter des variables dans une chaîne
//   (indice : pensez au gabarit de chaîne avec ${...})
let message2 = (`Bienvenue ${slogan} la ville est ${city} , la boutique est maintenant ${isOpen} et le nombre de produits est ${productCount}`);

// - Calculer la longueur du slogan
let longeur = (slogan .length);

// - Créer une version en majuscules du slogan
let majuscules = (slogan .toUpperCase());

// - Créer une version du slogan où un mot est remplacé par un autre
//   (indice : il existe une méthode pour remplacer une partie d’un texte)
let remplacerr = (slogan .replace("modestie" , "moins"));

// - Afficher les deux messages, la longueur, la version majuscule
//   et la version modifiée dans la console
