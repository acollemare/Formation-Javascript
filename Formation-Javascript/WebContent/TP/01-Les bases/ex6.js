/**
 * Boucle do-while
 */

var nicks = '', nick,
    proceed = true;

do {
    nick = prompt('Entrez un prénom :');
  
    if (nick) {
        nicks += nick + '\n'; // Ajoute le nouveau prénom ainsi qu'un saut de ligne après
    } else {
        proceed = false; // Aucun prénom n'a été entré, donc on fait en sorte d'invalider la condition
    }
} while (proceed);

alert(nicks); // Affiche les prénoms à la suite