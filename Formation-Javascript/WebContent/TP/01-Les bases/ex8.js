/**
 * Les tableaux JavaScript []
 */

// Exemple de manipulation d'un objet String

// On crée un objet String
var myString = 'Ceci est une chaîne de caractères';

//On affiche le nombre de caractères, au moyen de la propriété « length »
alert("\"" + myString + "\" à " + myString.length + " caractères !");

//On récupère la chaîne en majuscules, avec la méthode toUpperCase()
alert("En majuscule: " + myString.toUpperCase());

// Exemple de déclaration de tableaux
var myArray1 = ['Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
var myArray2 = [42, 12, 6, 3];
var myArray3 = [42, 'Sébastien', 12, 'Laurence'];
var myArray4 = new Array('Sébastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume');

// Parcours du tableau
for (var i = 0, c = myArray3.length; i < c; i++) {
    alert(myArray3[i]);
}

// Conversion d'une chaine en tableau avec la méthode split() 
var cousinsString = 'Pauline Guillaume Clarisse',
cousinsArray  = cousinsString.split(' ');

alert(cousinsString);
alert(cousinsArray);

//Conversion d'un  tableau en chaine avec la méthode join() 
var cousinsString_2 = cousinsArray.join('-');

alert(cousinsString_2);
