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
	
	var userName = prompt ("Geben Sie hier den gewünschten Benutzernamen ein: ");
		
	var takenUserName = false; //Nutzername benutzt
	
	for (var i =0; i<users.length; i++){ //prüfen ob der Benutzername schon in unserem Array ist
		if (users[i].username===userName){
			takenUserName = true;
		}
	}
	if (!takenUserName && userName != ""){
		
		var passWord = prompt ("Geben Sie hier Ihr Passwort ein: ") ;
		var passWordVal = prompt ("Geben Sie zur Validation Ihr Passwort noch Einmal ein: ");
	
		//neuen Nutzer anlegen
		if (passWord===passWordVal){						//passwörter stimmen überein ?
			users[i]= new Account(userName,passWord);
			console.log(users[i]);
			
		}
		else {
			alert ("Die Passwörter stimmen nicht überein!");
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

Das ist zwar ein schöner Anfang, um eine User-Registrierung zu realisieren,
allerdings ist das wichtigste bei einer dynamischen Webanwendung, dass die Elemente
der Anwendung eine Nutzerinteraktion ermöglichen.

Dazu müssten Sie Funktionen programmieren, die von den Containern in HTML aufgerufen werden
und die dann die Inhalte der Anwendung ändern.

=== Feedback Alpers, Ende ===
*/