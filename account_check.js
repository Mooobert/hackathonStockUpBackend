var users = require("./users.js")

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("Enter username here: ", function(username) {
    rl.question("Enter password here: ", function(password) {
        if(username in users){
            if(password == users[username]){
                console.log(`${username} is in the database and pwd is correct`);
            }
            else{
                console.log(`Wrong password to ${username}`)
            }
        }
        else{
            console.log(`User "${username}" does not exist`)
        }
    rl.close();
    });
});
