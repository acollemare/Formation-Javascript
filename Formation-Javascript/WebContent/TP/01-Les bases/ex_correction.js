/**
*	Conversion d'un nombre en toutes lettres.
*
*	Si l'utilisateur entre le nombre � 41 �, le script retourne
*	ce nombre en toutes lettres : � quarante-et-un �
*
*	L'algorithme est bas� sur les r�gles d�finies sur le site Web
*	http://leconjugueur.lefigaro.fr/frlesnombres.php
*
**/

/*
* � num2Letters � se lit � number to letters �, le � 2 � est une abr�viation
* souvent utilis�e en programmation.
* Notre fonction qui s'occupera de la conversion du nombre. Elle poss�de un 
* argument lui permettant de recevoir les nombres en question.
*/

function num2Letters(number) {

	if (isNaN(number) || number < 0 || 999 < number) {
		/*
		* Si l'argument n'est pas un nombre (isNaN), ou si le nombre est
		* inf�rieur � 0, ou s'il est sup�rieur � 999 Alors on retourne un 
		* message d'avertissement
		*/
		return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
	}

	/*
    * Ci-dessous on d�clare deux tableaux contenant les nombres en toutes lettres,
    * un tableau pour les unit�s et un autre pour les dizaines. Le tableau des
    * unit�s va du chiffre 1 � 19 afin de simplifier quelques op�rations lors de
    * la conversion du nombre en lettres. Vous comprendrez ce syst�me par la suite.
	*/
	
	var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
		tens2Letters  = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];

	/*
    * Ci-dessous on calcule le nombre d'unit�s, de dizaines et de centaines � 
    * l'aide du modulo.
    * 
    * Le principe est simple : si on prend 365 % 10 on obtient le reste de la
    * division par 10 qui est : 5. Voil� les unit�s.
    * 
    * Ensuite, sur 365 % 100 on obtient 65, on soustrait les unit�s � ce nombre 
    * 65 - 5 = 60, et on divise par 10 pour obtenir 6, voil� les dizaines !
    * 
    * Le principe est le m�me pour les centaines sauf que l'on ne soustrait pas 
    * seulement les unit�s mais aussi les dizaines.
	*/
	
	var units    = number % 10,
		tens     = (number % 100 - units) / 10,
		hundreds = (number % 1000 - number % 100) / 100;

	/*
	* Et enfin on cr�e les trois variables qui contiendront les unit�s, les
	* dizaines et les centaines en toutes lettres.
	*/
	
	var unitsOut, tensOut, hundredsOut;

	if (number === 0) {
		// Tout simplement ! Si le nombre vaut � 0 � alors on retourne � z�ro �, normal !
		
		return 'z�ro';

	} else { // Si � number � est diff�rent de � 0 � alors on lance la conversion compl�te du nombre

		// Traitement des unit�s

		/*
        * Ci-dessous on calcule les unit�s. La derni�re partie du code (apr�s le +) ne 
        * doit normalement pas vous poser de probl�mes. Mais pour la condition ternaire
        * je pense que vous voyez assez peu son utilit�. En fait, elle va permettre 
        * d'ajouter � et- � � l'unit� quand cette derni�re vaudra 1 et que les dizaines
        * seront sup�rieures � 0 et diff�rentes de 8. Pourquoi ? Tout simplement parce
        * que l'on ne dit pas � vingt-un � mais � vingt-et-un �, cette r�gle s'applique
        * � toutes les dizaines sauf � � quatre-vingt-un � (d'o� le � tens !== 8 �).
		*/
		
		unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units];

		// Traitement des dizaines

		/*
        * La condition qui suit se charge de convertir les nombres allant de 11 � 19.
        * Pourquoi cette tranche de nombres ?
        * Parce qu'ils ne peuvent pas se d�composer (essayez de d�composer en toutes
        * lettres le nombre � treize �, vous nous
        * en direz des nouvelles), ils n�cessitent donc d'�tre mis un peu � part. Bref,
        * leur conversion en lettres s'effectue donc dans la partie concernant les 
        * dizaines.
        * Ainsi donc on va se retrouver avec, par exemple, � tensOut = 'treize'; � 
        * donc au final on va effacer la variable � unitsOut � vu qu'elle ne servira
        * � rien.
		*/
		
		if (tens === 1 && units > 0) {

			tensOut = units2Letters[10 + units];
			unitsOut = '';

		} else if (tens === 7 || tens === 9) {

			tensOut = tens2Letters[tens] +'-'+ (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
			unitsOut = ''; // Cette variable ne sert plus � rien ici non plus, on la vide

		} else { // Et enfin la condition � else � s'occupe des dizaines que l'on peut qualifier de � normales �.

			tensOut = tens2Letters[tens];

		}

		/*
		* Derni�re �tape, � quatre-vingt � sans unit� prend un � s � � la fin:
		* � quatre-vingts �
		*/
		
		tensOut += (units === 0 && tens === 8 ? 's' : '');

		// Traitement des centaines

		/*
        * La conversion des centaines se fait en une ligne et trois ternaires.
        * Ces trois ternaires se chargent d'afficher un chiffre si n�cessaire avant 
        * d'�crire � cent � (exemple : � trois-cents �), d'afficher ou non la cha�ne 
        * � cent � (si il n'y a pas de centaines, on ne l'affiche pas, normal), et 
        * enfin d'ajouter un � s � � la cha�ne � cent � si il n'y a ni
        * dizaines, ni unit�s et que les centaines sont sup�rieures � 1.
		*/
		
		hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');

		// Retour du total

		/*
        * Cette ligne de code retourne toutes les valeurs converties en les 
        * concat�nant les unes aux autres avec un tiret.
        *  
        * Pourquoi y a-t-il besoin de ternaires ? 
        * Parce que si on n'en met pas alors on risque de retourner des valeurs du 
        * genre � -quatre-vingt- � juste parce qu'il n'y avait pas de centaines et
        * d'unit�s.
		*/
		
		return hundredsOut + (hundredsOut && tensOut ? '-': '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-': '') + unitsOut;
	}

}



var userEntry; // Contient le texte entr� par l'utilisateur

while (userEntry = prompt('Indiquez le nombre � �crire en toutes lettres (entre 0 et 999) :')) {
	/*
	* Dans la condition de la boucle, on stocke le texte de l'utilisateur dans la
	* variable � userEntry �. Ce qui fait que si l'utilisateur n'a rien entr� 
	* (valeur nulle, donc �quivalente � false) la condition ne sera pas valid�e.
    * Donc la boucle while ne s'ex�cutera pas et dans le cas contraire la boucle
    * s'ex�cutera.
    * 
    * On � parse � (en base 10) la cha�ne de caract�res de l'utilisateur pour 
    * l'envoyer ensuite � notre fonction de conversion qui renverra le r�sultat � 
    * la fonction alert().
	*/
	
	alert(num2Letters(parseInt(userEntry, 10)));

}