function check(event) {
	// Get Values
	var name  = document.getElementById('name').value;
	var password  = document.getElementById('password').value;
	var role  = document.getElementById('role').value;
	var accno  = document.getElementById('accno').value;
	
	// Simple Check
	if(name.length == 0) {
		alert("Name must not be empty");
		event.preventDefault();
		event.stopPropagation();
		return false;
	} 

	if(password.length == 0) {
		alert("Password must not be empty");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}

	if(role.length == 0) {
		alert("Role must not be empty");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}

	if(accno.length == 0) {
		alert("Account number must not be empty");
		event.preventDefault();
		event.stopPropagation();
		return false;
	} else if (accno.length != 11) {
		alert("Account number must have 11 characters");
		event.preventDefault();
		event.stopPropagation();
		return false;
	}
	
}