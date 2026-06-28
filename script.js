// ======================================
// Effet de frappe (Typing Effect)
// ======================================

// Liste des métiers / compétences
const words = [
    "Étudiant en IAIL",
    "Débutant en dev web ",
    "Débutant en python",
    "Débutant en Django"
];

// Élément HTML
const typing = document.getElementById("typing");

// Index du mot actuel
let index = 0;

// Fonction qui change le texte
function changeWord() {

    typing.textContent = words[index];

    index++;

    if(index >= words.length){

        index = 0;

    }

}

// Premier affichage
changeWord();

// Changement toutes les 2 secondes
setInterval(changeWord, 2000);

// ======================================
// Dark Mode
// ======================================

// Bouton
const button = document.getElementById("theme-toggle");

// Lors du clic
button.addEventListener("click", function(){

    // Ajouter ou supprimer la classe
    document.body.classList.toggle("dark-mode");

});