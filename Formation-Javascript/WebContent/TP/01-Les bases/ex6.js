/**
 * Boucle do-while
 */

var nicks = '', nick,
    proceed = true;

do {
    nick = prompt('Entrez un pr�nom :');
  
    if (nick) {
        nicks += nick + '\n'; // Ajoute le nouveau pr�nom ainsi qu'un saut de ligne apr�s
    } else {
        proceed = false; // Aucun pr�nom n'a �t� entr�, donc on fait en sorte d'invalider la condition
    }
} while (proceed);

alert(nicks); // Affiche les pr�noms � la suite