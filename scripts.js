var un = document.getElementById("un");
var pw = document.getElementById("pw");

function validate(){
	if(un.value.length==0&&pw.value.length==0){
		document.getElementById("alert").innerHTML = "Please enter your username and password.";
		un.focus();
		console.log("Log in error.");
	}
	else if(un.value.length==0&&pw.value.length!=0){
		document.getElementById("alert").innerHTML = "Please enter your username.";
		un.focus();
		console.log("Log in error.");
	}
	else if(un.value.length!=0&&pw.value.length==0){
		document.getElementById("alert").innerHTML = "Please enter your password.";
		pw.focus();
		console.log("Log in error.");
	}
	else{
		console.log("Log in successful.");
		alert("You have successfully logged in.");
	}
}