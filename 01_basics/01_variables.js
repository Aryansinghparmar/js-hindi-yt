const accountId = 144553
let accountEmail ="aryan@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState;

// accountId = 2 //not allowed

accountEmail = "anime@anime.com"
accountPassword = "232323"
accountCity = "jehanabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
