
// This is the only function that will be called by the endpoint.
function print(req, res){
    res.send("Hello world!!");
}

//GET /home: prints "This is the home page"
function home(req, res){
    res.send("This is the home page");
}

//POST /user: gets a user object (name, email, password) and prints the name and email
function user(req, res){
    const user = req.body;
    res.send(`Name: ${user.name}, Email: ${user.email}`);
}

/* module.exports = print;
module.exports = home;
module.exports = user; */

module.exports = {
    print,
    home,
    user
};