/* 
Projet 5 [DAF] - Etape 2 : générateur de citations
*/

// Crée les tableaux et insère des bouts de citations dans les 6 tableaux
var debutCitationPat = ["Il faut de toute urgence ", "Il est très important de ", "Il serait intéressant de ", "On ne doit pas négliger de ", "Je vous demande de ", "A faire absolument et sans tarder : ", "Chers salariés, je vous précise que vous devez "];
var milieuCitationPat = ["favoriser", "prendre en considération", "supprimer systématiquement", "comprendre", "vous remémorer", "vérifier", "remercier"];
var finCitationPat = [" chaque point de vue.", " toutes les erreurs.", " la majorité des solutions.", " l'ensemble des améliorations.", " chacune des options envisageables.", " un par un tous les dossiers.", " votre patron.", " les salariés incompétents."];

var debutCitationSal = ["Vous ne pouvez pas ", "Il est temps de penser à ", "Messieurs les Patrons, pensez à faire ceci : ", "Nous vous demandons de ne pas ", "Vous, les patrons, vous devez "];
var milieuCitationSal = ["exploiter", "comprendre", "supprimer", "tripler", "tromper"];
var finCitationSal = [" notre insoumission depuis longtemps.", " notre dévouement.", " la majorité des salariés.", " l'entreprise.", " nos salaires."];

// Renvoie un nombre au hasard - zéro compris - et max exclu
function nombreAuHasard(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Crée le prototype Citation
var Citation = {
    construirePhrase: function (debut, milieu, fin) {
        this.debut = debut;
        this.milieu = milieu;
        this.fin = fin;
        var construction = this.debut + this.milieu + this.fin;
        return construction;
    }
};

// Crée l'objet citation "patronnale"
var citationP = Object.create(Citation);

// Crée l'objet citation "salariale"
var citationS = Object.create(Citation);

// Crée une balise <div> pour les citations
var maDiv = document.createElement("div");
maDiv.id = "madiv";

var form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    
    // maDiv.innerHTML = ""; efface les citations à chaque submit
    e.preventDefault();
    var catCit = document.querySelector('input[name=categorie]:checked').value;
    var nbCit = form.elements.nbcit.value;

    for (var i = 1; i <= nbCit; i++) {

        if (catCit === "patronnale") {
            
            maDiv.innerHTML += '<p id="pat">' + citationP.construirePhrase(debutCitationPat[nombreAuHasard(7)], milieuCitationPat[nombreAuHasard(7)], finCitationPat[nombreAuHasard(8)]) + '</p>'; 
            
        } else if (catCit === "salariale") {
            
            maDiv.innerHTML += '<p id="sal">' + citationS.construirePhrase(debutCitationSal[nombreAuHasard(5)], milieuCitationSal[nombreAuHasard(5)], finCitationSal[nombreAuHasard(5)]) + '</p>';        
        }
        
            // Place les citations après le formulaire
            document.getElementById("place1").insertBefore(maDiv, document.getElementById("place2"));
        
    }
});

document.addEventListener("reset", function () {
    
    // Suppression du contenu HTML
    maDiv.innerHTML = "";
});