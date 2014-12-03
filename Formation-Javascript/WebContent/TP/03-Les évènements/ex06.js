/**
 * 
 */

(function() { // On utilise une IEF pour ne pas polluer l'espace global
	
	// Variable qui indique si le champ est correctement renseign�
	var nomValide = false, 
		prenomValide = false, 
		ageValide = false, 
		pseudoValide = false, 
		pwd1Valide = false, 
		pwd2Valide = false;
		pwdChoisi = "";

	// Fonction pour g�rer les �v�nements sous tous les navigateurs
	function addEvent(element, event, func) {
		if (element.attachEvent) {
			element.attachEvent('on' + event, func);
		} else {
			element.addEventListener(event, func, true);
		}
	}

	// Fonction d'initialisation
	function init() {
        var myForm = document.getElementById('monFormulaire');
        var maListeChamps = document.getElementsByClassName("champtxt");

        // Definition des contr�les du bouton Submit
        addEvent(
        		myForm,
            	'submit', 
            	function(e) {
        			if (nomValide && prenomValide && ageValide && pseudoValide && pwd1Valide && pwd2Valide) {
        				alert("Formulaire valid�");
        			} else {
        				alert("Formulaire incorrect");
        				e.preventDefault(); // L'envoi du formulaire est bloqu� 
        			}
        		});
        
        // Definition des contr�les du bouton Reset
        addEvent(
        		myForm,
            	'reset', 
            	function(e) {
        			nomValide = false; 
        			prenomValide = false; 
        			ageValide = false;
        			pseudoValide = false; 
        			pwd1Valide = false;
        			pwd2Valide = false;
        	        for (var i=0; i < maListeChamps.length; i++) {
        	        	maListeChamps[i].style.backgroundColor = "yellow";
        	        }
       				alert("Formulaire r�initialis�");
        		});

        // Definition de la validit� des champs textes
        for (var i=0; i < maListeChamps.length; i++) {
			if ((maListeChamps[i].name === "nom") || (maListeChamps[i].name === "prenom")) {
				// Contr�le du nom et du pr�nom
		        addEvent(
		        		maListeChamps[i], 
		        		'change',
		            	function(e) {
		        			if (e.currentTarget.value.length >= 2) {
		        				(e.currentTarget.name === "nom") ? nomValide = true : prenomValide = true;
		        				e.currentTarget.style.backgroundColor = "green";
		        			} else {
		        				(e.currentTarget.name === "nom") ? nomValide = false : prenomValide = false;
		        				e.currentTarget.style.backgroundColor = "red";
		        			}
		        		});
		        
			} else if (maListeChamps[i].name === "age") {
				// Contr�le de l'age
				addEvent(
						maListeChamps[i], 
						'change',
						function(e) {
							if (!isNaN (e.currentTarget.value) && (e.currentTarget.value >= 5) && (e.currentTarget.value <= 140)) {
								ageValide = true;
								e.currentTarget.style.backgroundColor = "green";
							} else {
								ageValide = false;
								e.currentTarget.style.backgroundColor = "red";
							}
						});
				
			} else if (maListeChamps[i].name === "pseudo") {
				// Contr�le du pseudo
		        addEvent(
		        		maListeChamps[i], 
		        		'change',
		            	function(e) {
		        			if (e.currentTarget.value.length >= 4) {
		        				pseudoValide = true;
		        				e.currentTarget.style.backgroundColor = "green";
		        			} else {
		        				pseudoValide = false;
		        				e.currentTarget.style.backgroundColor = "red";
		        			}
		        		});
				
			} else if (maListeChamps[i].name === "pwd1") {
				// Contr�le du 1ier mot de passe
		        addEvent(
		        		maListeChamps[i], 
		        		'change',
		            	function(e) {
		        			if (e.currentTarget.value.length >= 6) {
		        				pwd1Valide = true;
		        				pwdChoisi = e.currentTarget.value;
		        				e.currentTarget.style.backgroundColor = "green";
		        			} else {
		        				pwd1Valide = false;
		        				pwdChoisi = "";
		        				e.currentTarget.style.backgroundColor = "red";
		        			}
		        		});
				
			} else if (maListeChamps[i].name === "pwd2") {
				// Contr�le du 2i�me mot de passe
		        addEvent(
		        		maListeChamps[i], 
		        		'change',
		            	function(e) {
		        			if ((e.currentTarget.value.length >= 6) && (e.currentTarget.value === pwdChoisi)) {
		        				pwd2Valide = true;
		        				e.currentTarget.style.backgroundColor = "green";
		        			} else {
		        				pwd2Valide = false;
		        				e.currentTarget.style.backgroundColor = "red";
		        			}
		        		});
				
			}
		}
	}
	
    // On initialise le code avec notre fonction toute pr�te  
    init(); 
})();
