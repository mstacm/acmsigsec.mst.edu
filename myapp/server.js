//Install this to update the javascript so you don't have to re-run the console
//npm install nodemon -g

console.log("server is starting.");
const keyPublishable = "pk_test_6pRNASCoBOKtIshFeQd4XMUh";
const keySecret = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";

//libraries
const express = require('express');
const app = express();
const stripe = require("stripe")(keySecret);
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//link to static folder webpage
app.use(express.static('website'));

app.get("/", (req, res) =>
<<<<<<< HEAD
  res.render("https://acmsigsec.mst.edu/myapp/website/index2.html", {keyPublishable}));

app.get('/success', function(req, res){
    res.render('https://acmsigsec.mst.edu/myapp/website/success.html',{
=======
  res.render("index.html", {keyPublishable}));

app.get('/success', function(req, res){
    res.render('success.html',{
>>>>>>> master

    });
});

app.post('/charge', function(req, res) {
    var token = req.body.stripeToken;
    var real_amount = 1000;


    charge = stripe.charges.create({
        amount: real_amount,
        currency: 'usd',
        description: 'charge for submission',
        token: token,
    },
    function(err, charge) {
        if (err) {
            res.send(500, err);
        } else {
            res.send(204);
        }
    });
    console.log("your payment passed");
    console.log("your amount was"+JSON.stringify(real_amount));
<<<<<<< HEAD
    res.redirect('/success');
=======
    res.redirect('/success.html');
>>>>>>> master
});
app.listen(3000);


// const server = app.listen(3000, listening);
// function listening(){
//     console.log("listening....");
// }