const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", function(req, res){
    
    var today = new Date();
    var currentDay = today.getDay();

    if(currentDay === 6 || currentDay === 0){
            res.write("<h1>oh si! fin de semana paps'</h1>");
    }
    else{
            res.write("<h1>chale! a chambear</h1>");
            res.send();
    }
 

});

app.listen(3000, function(){
    console.log("server is }runing on port 3000");
});
