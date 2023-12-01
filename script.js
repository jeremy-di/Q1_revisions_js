// Le fait d'utiliser querySelectorAll aura pour effet d'afficher un tableau

let list = document.querySelectorAll("li")

console.log(list)

// On pourra du coup comme tous les tableaux le manipuler et slectionné certains éléments

console.log(list[1])

// Il est possible aussi d'appeler ce tableau avec une boucle

list.forEach(i => console.log(i));

// Une notion est à prendre en compte, ce tableau n'en est pas tout à fait un, car il ne peux pas utiliser les méthodes associées aux tableaux

// list.push("<li>Articles</li>")

// Nous pouvons cependant générer un vrai tableaux qui gagenra ces attributs

console.log(Array.from(list))

// A partir de ce moment, on récupérera les méthodes d'un tableau

// Nous pouvons spécifier notre recherche dans le querySelectorAll si par exemple je ne veux que les li qui se trouve dans un parent ul

let list1 = document.querySelectorAll("ul > li")

// On peut aussi selectionné une balise li en particulier avec first-child

let list1 = document.querySelectorAll("ul li:second-child")
console.log(list1)

let list1 = document.querySelectorAll("ul li:nth-child(3)")
console.log(list1)

// Nous allons voir comment manipuler les prototypes de notre balise html

let ul = document.querySelector('ul')

console.log(
    // Sert à afficher la balise html sur laquelle est posé notre selecteur
    ul.nodeName,
    // Cette méthode sert à afficher ce que contient notre balise ul
    ul.innerHTML,
    // Nous pouvons récupérer que les éléments textuels de notre balise
    ul.innerText
)

// Nous pouvons modifier un élément en modifiant le texte ce qui aura pour effet de modifier ce qui se trouvait avant

ul.innerText = "Hello"

// Nous pouvons modifier directement les attributs d'une balise html en faisant cette commande

ul.setAttribute('hidden', 'hidden')

// On peut faire l'inverse et supprimer un attribut

ul.removeAttribute('hidden')

// On peut aussi jouer avec les classes en les ajoutant ou en les enlevant


setInterval(() => {
    ul.classList.toggle('red')
}, 1000) */

// Je peux créer des éléments, ici je vais rajouter une balise li

/* let nLi = document.createElement('li');
nLi.innerHTML = "Nos articles";
document.querySelector('ul').append(nLi) //prepend



/*
EXERCICE : 

Sur un body vide, je veux que vous ajoutier 4 nouveau liens dans une balise ul seulement avec l'aide de javascript

- Accueil
- Articles
- Contact
- Nos reseaux

*/

let ul = document.createElement("ul")
ul.insertAdjacentHTML("beforeend", `
    <li>Accueil</li>
    <li>Articles</li>
    <li>Contact</li>
    <li>Nos reseaux</li>
`)

document.querySelector("body").append(ul)

document.querySelectorAll("li").forEach(i => i.className = "link")

// Faites en sorte d'afficher les données de ce tableau dans des balises li


let tableau = ["Jim", "Laura", "Maggie", "Paul", "Carlos", "Jean", "Sofiane", "Jennifer", "Alan"]


let ul = document.createElement("ul")
let li = document.createElement("li")
document.querySelector("body").append(ul)

for ( item of tableau ) {
ul.insertAdjacentHTML("beforeend", `
    <li>${item}</li>
`)

}

let p = document.getElementsByClassName("para")

p[3].textContent = "Bonjour je suis là"














