function Account (username,passWord){
	this.username=username;
	this.passWord=passWord;
	this.progress = 0;
	
};

var users = new Array();//Nutzerverzeichnis

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