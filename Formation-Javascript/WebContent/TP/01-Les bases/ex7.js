/**
 * Les fonctions JavaScript
 */

// Exemple de fonction 

function byTwo() {
    var result = parseInt(prompt('Donnez le nombre à multiplier par 2 :'));
    alert(result * 2);
}

byTwo();

alert('Vous en êtes à la moitié !');

byTwo();

// Exemple de fonction qui retourne une valeur 

function askNumber() {
	var maValeur;
	do {
		maValeur=prompt("Entrez un nombre: ");
	} while(isNaN(maValeur)); // isNaN() renvoie true quand la variable n'est pas un nombre, et false dans le cas contraire
	return maValeur;
}

alert('Le nombre est : ' + askNumber());

//Exemple de fonction isolée

var sayHello = (function() {
    return 'Yop !';
})();

alert(sayHello); // Affiche : « Yop ! »
