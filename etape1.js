/* 
Projet 5 [DAF] - Etape 1 : générateur de citations
*/

// Renvoie un nombre au hasard - zéro compris - et max exclu
function nombreAuHasard(max) {
    // Math.random -> [0,max[
    // Math.floor arrondit au niveau inférieur
    return Math.floor(Math.random() * Math.floor(max));
}

// Affiche le menu
console.log("Bienvenue dans le générateur de citations !");
console.log("1 : Générer une citation\n2 : Quitter");

// Récupère le choix saisi par l'utilisateur
var option = Number(prompt("Choisissez une option :")); 

// Tableaux des bouts de citations
var debutCit = ["Il faut de toute urgence ", "Il est très important de ", "Il serait intéressant de ", "On ne doit pas négliger de ", "Je vous demande de ", "A faire absolument et sans tarder : ", "Chers salariés, je vous précise que vous devez "];
var milieuCit = ["favoriser", "prendre en considération", "supprimer systématiquement", "comprendre", "vous remémorer", "vérifier", "remercier", "négocier"];
var finCit = [" chaque point de vue.", " toutes les erreurs.", " la majorité des solutions.", " l'ensemble des améliorations.", " chacune des options envisageables.", " un par un tous les dossiers.", " votre patron."];

while (option !== 2){

   switch (option) {
    case 1:
        // Génère la citation. Index de tableaux attendus : 0, 1, 2, ... 6 ou 7
        console.log(debutCit[nombreAuHasard(7)] + milieuCit[nombreAuHasard(8)] + finCit[nombreAuHasard(7)]);
        break;
    case 2:
        break;
    default:
        console.log("Option non reconnue");         
   }   
    option = Number(prompt("Choisissez une option :"));  
}

console.log("A bientôt");