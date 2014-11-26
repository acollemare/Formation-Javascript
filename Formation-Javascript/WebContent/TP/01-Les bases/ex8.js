/**
 * Les tableaux JavaScript []
 */

// Exemple de manipulation d'un objet String

// On cr�e un objet String
var myString = 'Ceci est une cha�ne de caract�res';

//On affiche le nombre de caract�res, au moyen de la propri�t� � length �
alert("\"" + myString + "\" � " + myString.length + " caract�res !");

//On r�cup�re la cha�ne en majuscules, avec la m�thode toUpperCase()
alert("En majuscule: " + myString.toUpperCase());

// Exemple de d�claration de tableaux
var myArray1 = ['S�bastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume'];
var myArray2 = [42, 12, 6, 3];
var myArray3 = [42, 'S�bastien', 12, 'Laurence'];
var myArray4 = new Array('S�bastien', 'Laurence', 'Ludovic', 'Pauline', 'Guillaume');

// Parcours du tableau
for (var i = 0, c = myArray3.length; i < c; i++) {
    alert(myArray3[i]);
}

// Conversion d'une chaine en tableau avec la m�thode split() 
var cousinsString = 'Pauline Guillaume Clarisse',
cousinsArray  = cousinsString.split(' ');

alert(cousinsString);
alert(cousinsArray);

//Conversion d'un  tableau en chaine avec la m�thode join() 
var cousinsString_2 = cousinsArray.join('-');

alert(cousinsString_2);
