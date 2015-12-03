function Account (username,passWord){
	this.username=username;
	this.passWord=passWord;
	this.progress = 0;
	
};

var users = new Array();//Nutzerverzeichnis

/*
=== Feedback Alpers, Dez 3 ===

Wenn Sie so vorgehen, dann gibt es jedes Mal, wenn die Webanwendung gestartet wird
keine User-Accounts. Denn hier beginnen Sie ja mit einem leeren Array.

Die Anbindung von Datenbanken in JS ist leider nicht so einfach zu realisieren
wie in PHP. Deshalb hatte ich Ihnen auch davon abgeraten.

=== Feedback Alpers, Ende ===
*/

var createAccount = function(){
	
	var userName = prompt ("Geben Sie hier den gew�nschten Benutzernamen ein: ");
		
	var takenUserName = false; //Nutzername benutzt
	
	for (var i =0; i<users.length; i++){ //pr�fen ob der Benutzername schon in unserem Array ist
		if (users[i].username===userName){
			takenUserName = true;
		}
	}
	if (!takenUserName && userName != ""){
		
		var passWord = prompt ("Geben Sie hier Ihr Passwort ein: ") ;
		var passWordVal = prompt ("Geben Sie zur Validation Ihr Passwort noch Einmal ein: ");
	
		//neuen Nutzer anlegen
		if (passWord===passWordVal){						//passw�rter stimmen �berein ?
			users[i]= new Account(userName,passWord);
			console.log(users[i]);
			
		}
		else {
			alert ("Die Passw�rter stimmen nicht �berein!");
		}
	}
	else if (userName === ""){
		alert ("Sie brauen einen Nutzernamen!");
		createAccount();
	}
	else {
		alert ("Dieser Nutzername ist bereits belegt! Bitte Versuchen sie etwas Anderes!");
		createAccount();
	}
}

/*
=== Feedback Alpers, Dez 3 ===

Das ist zwar ein sch�ner Anfang, um eine User-Registrierung zu realisieren,
allerdings ist das wichtigste bei einer dynamischen Webanwendung, dass die Elemente
der Anwendung eine Nutzerinteraktion erm�glichen.

Dazu m�ssten Sie Funktionen programmieren, die von den Containern in HTML aufgerufen werden
und die dann die Inhalte der Anwendung �ndern.

=== Feedback Alpers, Ende ===
*/