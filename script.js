var database = [
	{
		username:"Onur",
		password:"1234"
	}
]

var newsFeed = [
	{
		name: "onur",
		timeline:"today is so bored!!!"
	},
	{
		name: "ozan",
		timeline:"i am so funny!!!"
	},
	{
		name: "ali",
		timeline:"The World is normal!!!"
	}
]
function isUserValid(){
	for (var i =0; i < database.length; i++) {
		if(database[i].username===document.getElementById("user").value
		 && database[i].password === document.getElementById("pass").value) {
			return true;
		}
	
	}
	return false;
}
function signIn() {
	if (isUserValid()){
		alert("Welcome \n You are sign in now" + "\n" +  newsFeed.join('\n'));
	}
	else 
	{
		alert("Your Username or password are incorrect!!!");
	}
} 

function register() {
	database.push({
		username:document.getElementById("user").value,
		password:document.getElementById("pass").value
	})
	console.log(database);
	return true;
}
