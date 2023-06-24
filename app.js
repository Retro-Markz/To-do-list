const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", function (req, res) {

    var today = new Date();
    var currentDay = today.getDay();
    var day = "";

    switch (currentDay) {
        case 0:
            day = "domingo";
            break;
        case 1:
            day = "lunes";
            break;
        case 2:
            day = "martes";
            break;
        case 3:
            day = "miercoles";
            break;
        case 4:
            day = "jueves";
            break;
        case 5:
            day = "viernes";
            break;
        case 6:
            day = "sabado";
            break;

        default:
            console.log("error: el dia es: " + currentDay);
           
    }
|
    res.render("list", { KindOfDay: day });

});

app.listen(3000, function () {
    console.log("server is }runing on port 3000");
});
