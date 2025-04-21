
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello world!!");
}

//GET /home: prints "This is the home page"
function home(req, res){
    res.send("This is the home page");
}

const xss = require('xss');
//POST /user: gets a user object (name, email, password) and prints the name and email
function user(req, res){
    const user = req.body;
    const checkedName = xss(user.name || '');
    const checkedEmail = xss(user.email || '');
    res.send(`Name: ${checkedName}, Email: ${checkedEmail}`);
}

/* module.exports = print;
module.exports = home;
module.exports = user; */

module.exports = {
    print,
    home,
    user
};