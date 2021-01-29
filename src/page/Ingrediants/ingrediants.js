let ingrediantsViande = document.querySelector(".ingrediants-viande")
let Ingrediants1 = document.querySelector(".ingrediants1")
let Ingrediants2 = document.querySelector(".ingrediants2")
let Ingrediants3 = document.querySelector(".ingrediants3")
let Ingrediants4 = document.querySelector(".ingrediants4")
let Ingrediants5 = document.querySelector(".ingrediants5")
let Ingrediants6 = document.querySelector(".ingrediants6")
let ingrediantsPoulet = document.querySelector(".ingrediants-choisit-poulet")

ingrediantsViande.addEventListener('click', () => {
    Ingrediants1.style.opacity = "1"
    Ingrediants2.style.opacity = "1"
    Ingrediants3.style.opacity = "1"
    Ingrediants4.style.opacity = "1"
    Ingrediants5.style.opacity = "1"
    Ingrediants6.style.opacity = "1"
})

Ingrediants1.addEventListener('click', () => {
    ingrediantsPoulet.style.opacity = "1"
})