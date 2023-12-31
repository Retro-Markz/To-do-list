const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




app.get("/", function (req, res) {

    let today = new Date();
    
    const options = {
        weekday: "long",    
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);       
    

    res.render("list", { ListTitle: day, newListItems: items});

});


    app.post("/", function(req, res){
     let item = req.body.newItem;

    items.push(item);

      res.redirect("/");
     
    });



    app.get("/work", function (req, res) {

        res.render("list", {ListTitle: "Work List", newListItems: workItems});
    });

    app.post("/work", function(req, res){

        let item = req.body.newItem;
        workItems.push(item);
        res.redirect("/work");  
    })







app.listen(3000, function () {
    console.log("server is runing on port 3000");
});
