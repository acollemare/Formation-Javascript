/**
*	Conversion d'un nombre en toutes lettres.
*
*	Si l'utilisateur entre le nombre « 41 », le script retourne
*	ce nombre en toutes lettres : « quarante-et-un »
*
*	L'algorithme est basé sur les règles définies sur le site Web
*	http://leconjugueur.lefigaro.fr/frlesnombres.php
*
**/

/*
* « num2Letters » se lit « number to letters », le « 2 » est une abréviation
* souvent utilisée en programmation.
* Notre fonction qui s'occupera de la conversion du nombre. Elle possède un 
* argument lui permettant de recevoir les nombres en question.
*/

function num2Letters(number) {

	if (isNaN(number) || number < 0 || 999 < number) {
		/*
		* Si l'argument n'est pas un nombre (isNaN), ou si le nombre est
		* inférieur à 0, ou s'il est supérieur à 999 Alors on retourne un 
		* message d'avertissement
		*/
		return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
	}

	/*
    * Ci-dessous on déclare deux tableaux contenant les nombres en toutes lettres,
    * un tableau pour les unités et un autre pour les dizaines. Le tableau des
    * unités va du chiffre 1 à 19 afin de simplifier quelques opérations lors de
    * la conversion du nombre en lettres. Vous comprendrez ce système par la suite.
	*/
	
	var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
		tens2Letters  = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

	/*
    * Ci-dessous on calcule le nombre d'unités, de dizaines et de centaines à 
    * l'aide du modulo.
    * 
    * Le principe est simple : si on prend 365 % 10 on obtient le reste de la
    * division par 10 qui est : 5. Voilà les unités.
    * 
    * Ensuite, sur 365 % 100 on obtient 65, on soustrait les unités à ce nombre 
    * 65 - 5 = 60, et on divise par 10 pour obtenir 6, voilà les dizaines !
    * 
    * Le principe est le même pour les centaines sauf que l'on ne soustrait pas 
    * seulement les unités mais aussi les dizaines.
	*/
	
	var units    = number % 10,
		tens     = (number % 100 - units) / 10,
		hundreds = (number % 1000 - number % 100) / 100;

	/*
	* Et enfin on crée les trois variables qui contiendront les unités, les
	* dizaines et les centaines en toutes lettres.
	*/
	
	var unitsOut, tensOut, hundredsOut;

	if (number === 0) {
		// Tout simplement ! Si le nombre vaut « 0 » alors on retourne « zéro », normal !
		
		return 'zéro';

	} else { // Si « number » est différent de « 0 » alors on lance la conversion complète du nombre

		// Traitement des unités

		/*
        * Ci-dessous on calcule les unités. La dernière partie du code (après le +) ne 
        * doit normalement pas vous poser de problèmes. Mais pour la condition ternaire
        * je pense que vous voyez assez peu son utilité. En fait, elle va permettre 
        * d'ajouter « et- » à l'unité quand cette dernière vaudra 1 et que les dizaines
        * seront supérieures à 0 et différentes de 8. Pourquoi ? Tout simplement parce
        * que l'on ne dit pas « vingt-un » mais « vingt-et-un », cette règle s'applique
        * à toutes les dizaines sauf à « quatre-vingt-un » (d'où le « tens !== 8 »).
		*/
		
		unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];

		// Traitement des dizaines

		/*
        * La condition qui suit se charge de convertir les nombres allant de 11 à 19.
        * Pourquoi cette tranche de nombres ?
        * Parce qu'ils ne peuvent pas se décomposer (essayez de décomposer en toutes
        * lettres le nombre « treize », vous nous
        * en direz des nouvelles), ils nécessitent donc d'être mis un peu à part. Bref,
        * leur conversion en lettres s'effectue donc dans la partie concernant les 
        * dizaines.
        * Ainsi donc on va se retrouver avec, par exemple, « tensOut = 'treize'; » 
        * donc au final on va effacer la variable « unitsOut » vu qu'elle ne servira
        * à rien.
		*/
		
		if (tens === 1 && units > 0) {

			tensOut = units2Letters[10 + units];
			unitsOut = '';

		} else if (tens === 7 || tens === 9) {

			tensOut = tens2Letters[tens] +'-'+ (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
			unitsOut = ''; // Cette variable ne sert plus à rien ici non plus, on la vide

		} else { // Et enfin la condition « else » s'occupe des dizaines que l'on peut qualifier de « normales ».

			tensOut = tens2Letters[tens];

		}

		/*
		* Dernière étape, « quatre-vingt » sans unité prend un « s » à la fin:
		* « quatre-vingts »
		*/
		
		tensOut += (units === 0 && tens === 8 ? 's' : '');

		// Traitement des centaines

		/*
        * La conversion des centaines se fait en une ligne et trois ternaires.
        * Ces trois ternaires se chargent d'afficher un chiffre si nécessaire avant 
        * d'écrire « cent » (exemple : « trois-cents »), d'afficher ou non la chaîne 
        * « cent » (si il n'y a pas de centaines, on ne l'affiche pas, normal), et 
        * enfin d'ajouter un « s » à la chaîne « cent » si il n'y a ni
        * dizaines, ni unités et que les centaines sont supérieures à 1.
		*/
		
		hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

		// Retour du total

		/*
        * Cette ligne de code retourne toutes les valeurs converties en les 
        * concaténant les unes aux autres avec un tiret.
        *  
        * Pourquoi y a-t-il besoin de ternaires ? 
        * Parce que si on n'en met pas alors on risque de retourner des valeurs du 
        * genre « -quatre-vingt- » juste parce qu'il n'y avait pas de centaines et
        * d'unités.
		*/
		
		return hundredsOut + (hundredsOut && tensOut ? '-': '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-': '') + unitsOut;
	}

}



var userEntry; // Contient le texte entré par l'utilisateur

while (userEntry = prompt('Indiquez le nombre à écrire en toutes lettres (entre 0 et 999) :')) {
	/*
	* Dans la condition de la boucle, on stocke le texte de l'utilisateur dans la
	* variable « userEntry ». Ce qui fait que si l'utilisateur n'a rien entré 
	* (valeur nulle, donc équivalente à false) la condition ne sera pas validée.
    * Donc la boucle while ne s'exécutera pas et dans le cas contraire la boucle
    * s'exécutera.
    * 
    * On « parse » (en base 10) la chaîne de caractères de l'utilisateur pour 
    * l'envoyer ensuite à notre fonction de conversion qui renverra le résultat à 
    * la fonction alert().
	*/
	
	alert(num2Letters(parseInt(userEntry, 10)));

}