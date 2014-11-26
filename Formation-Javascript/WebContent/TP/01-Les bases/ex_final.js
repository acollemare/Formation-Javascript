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

// Fonction qui demande a l'utilisateur de lui fournir un nombre
function askNumber() {
	var maValeur;
	do {
		do {
			maValeur=prompt("Entrez un nombre entre 0 et 999: ");
		} while(isNaN(maValeur)); // isNaN() renvoie true quand la variable n'est pas un nombre, et false dans le cas contraire
	} while (maValeur<0 || maValeur>999);
	return maValeur;
}

// Fonction qui éclate le nombre en unité, dizaine et centaine
function eclateNombre(nbr) {
	var uniteNbr = nbr%10,
		dizaineNbr = ((nbr - uniteNbr)/10)%10,
		centaineNbr = ((nbr - (dizaineNbr*10) - uniteNbr)/100)%10;
	return {unite: uniteNbr, dizaine: dizaineNbr, centaine: centaineNbr};
}

// Fonction qui converti un chiffre en lettres
function chiffre2Lettres (nbr) {
	switch (nbr) {
	case 1:
		return "un";
		break;
	case 2:
		return "deux";
		break;
	case 3:
		return "trois";
		break;
	case 4:
		return "quatre";
		break;
	case 5:
		return "cinq";
		break;
	case 6:
		return "six";
		break;
	case 7:
		return "sept";
		break;
	case 8:
		return "huit";
		break;
	case 9:
		return "neuf";
		break;
	default:
		return "erreur";
		break;
	}
}

// fonction qui retourne en lettre le nombre de centaines
// (pour les nbr qui ne sont pas à 0)
function centaineLettre (nbr) {
	if (nbr === 1) {
		return "cent";
	} else {
		return chiffre2Lettres (nbr) + "-cent";
	}
}

//fonction qui retourne en lettre le nombre de dizaines
function dizaineLettre (nbr) {
	switch (nbr) {
	case 1:
		return "dix";
		break;
	case 2:
		return "vingt";
		break;
	case 3:
		return "trente";
		break;
	case 4:
		return "quarante";
		break;
	case 5:
		return "cinquante";
		break;
	case 6:
		return "soixante";
		break;
	case 7:
		return "soixante-dix";
		break;
	case 8:
		return "quatre-vingt";
		break;
	case 9:
		return "quatre-vingt-dix";
		break;
	default:
		return null;
		break;
	}
}

// Fonction qui retourne le mot simple des chiffres en dizaine (11 à 16) 
function motSimpleDizaine (nbr) {
	switch (nbr) {
	case 1:
		return "onze";
		break;
	case 2:
		return "douze";
		break;
	case 3:
		return "treize";
		break;
	case 4:
		return "quatorze";
		break;
	case 5:
		return "quinze";
		break;
	case 6:
		return "seize";
		break;
	}
}

// Fonction qui retourne en lettre les chiffres de dizaine et d'unité
function motDizaineEtUnite(nbrEclate) {
	if (nbrEclate.dizaine === 0) {
		if (nbrEclate.unite === 0) {
			// Cas d'un nombre à 00
			return "";
		} else {
			// Cas d'un nombre à 0x
			return chiffre2Lettres (nbrEclate.unite);
		}
	} else if ((nbrEclate.dizaine === 1) && (nbrEclate.unite <= 6)) {
		// Cas d'un nombre compris entre 11 et 16
		return motSimpleDizaine (nbrEclate.unite);
	} else if ((nbrEclate.dizaine <= 6) || (nbrEclate.dizaine === 8)) {
		// Cas d'un nombre compris entre [17 et 69] ou entre [80 et 89]
		return dizaineLettre (nbrEclate.dizaine)
				+ (nbrEclate.unite === 1 ? "-et-" : "") 
				+ (nbrEclate.unite === 0 ? (nbrEclate.dizaine === 8 ? "s" : "") : "-" + chiffre2Lettres (nbrEclate.unite));
	} else {
		if (nbrEclate.unite <= 6) {
			// Cas d'un nombre compris entre [70 et 76] ou entre [90 et 96]
			return dizaineLettre (nbrEclate.dizaine-1)
					+ (nbrEclate.unite === 1 ? "-et-" : "-")
					+ motSimpleDizaine (nbrEclate.unite);
		} else {
			// Cas d'un nombre compris entre [77 et 77] ou entre [97 et 99]
			return dizaineLettre (nbrEclate.dizaine)
					+ "-"
					+ chiffre2Lettres (nbrEclate.unite);
		}
	}
}

// Récupération du nombre au clavier et éclatement en centaine, dizaine et unité
monNombre=eclateNombre(parseInt(askNumber(),10));

// Conversion de ce nombre en lettres
laCentaine = (monNombre.centaine === 0 ? "" : centaineLettre (monNombre.centaine));
laDizaineEtUnite = motDizaineEtUnite (monNombre);

// Affichage du résultat
alert (laCentaine + ((laDizaineEtUnite.length === 0) && (laCentaine != "cent") ? "s" : "") + (laDizaineEtUnite.length > 0 ? "-" : "") + laDizaineEtUnite);