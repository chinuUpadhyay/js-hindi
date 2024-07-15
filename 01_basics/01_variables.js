const accountId = 12343644
let accountEmail = "abcd@gmail.com"
var accountPassword = "546@vdfg"
accountCity = "delhi"
let accountState = "Bihar"


// accountId = 2 // not allowed

accountEmail = "fdy@gmail.com"
accountPassword ="gfeyf21543"
accountCity = "bhaglpur"


/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId,accountEmail, accountPassword, accountCity ,accountState])