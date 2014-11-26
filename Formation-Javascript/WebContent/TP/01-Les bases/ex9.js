/**
 * Les objets JavaScript {}
 */

// Exemple de déclaration d'objets
var myObject1 = {};

var family = {
	    self:     'Sébastien',
	    sister:   'Laurence',
	    brother:  'Ludovic',
	    cousin_1: 'Pauline',
	    cousin_2: 'Guillaume'
	};

// Exemple de parcours des attributs d'un objet
for (var id in family) { // On stocke l'identifiant dans "id" pour parcourir l'objet "family".
	alert(family[id]);
}

// On peut retourner un objet dans une fonction
function getCoords() {
    /* Script incomplet, juste pour l'exemple */
    return { x: 12, y: 21 };
}

var coords = getCoords();

alert(coords.x); // 12
alert(coords.y); // 21

