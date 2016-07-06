//Priprava knjižnic
var formidable = require("formidable");
var util = require('util');

if (!process.env.PORT)
  process.env.PORT = 8080;

// Priprava povezave na podatkovno bazo
var sqlite3 = require('sqlite3').verbose();
var database = new sqlite3.Database('database.sqlite');

var express = require("express");
var server = express();
server.set("view engine", "ejs");
server.use(express.static("public"));

server.get("/", function(request, response){
    database.all("SELECT * FROM imenik ORDER BY priimek", function(error, rows) {
        response.render('list', {vrstice: rows});
    });
});

server.get("/zaposleni/:id", function(request, response){
   var idKey = parseInt(request.params.id);
   database.get("SELECT * FROM imenik \
   WHERE key = " + idKey, function(error, row) {
      response.render('employee', {zaposleni: row});
   });
});

server.get("/filter/:oddelek", function(request, response){
   var oddelek = request.params.oddelek;
   console.log(oddelek);
   if(oddelek == null || oddelek == "Vsi"){ response.redirect("/"); return; }
   
   database.all("SELECT * FROM imenik \
   WHERE oddelek = \"" + oddelek + "\" ORDER BY priimek", function(error, rows) {
      response.render('list', {vrstice: rows, oddelek: oddelek});
   });
});

server.get("/zbrisi/:id", function(request, response) {
   var key = request.params.id;
   try {
        database.run("DELETE FROM imenik WHERE key = " + key);
   }
   catch(err) {
       console.log(err);
   }
   response.redirect("/");
});

server.post("/uredi", function(request, response){
    var form = new formidable.IncomingForm();

    form.parse(request, function (error, fields, files) {
        if(fields.key != -1) {
            try {
                database.run("UPDATE imenik\
                            SET ime=" + "'" + fields.ime + "', \
                            priimek=" + "'" + fields.priimek + "', \
                            oddelek=" + "'" + fields.oddelek + "', \
                            stevilka=" + "'" + fields.its + "' \
                            WHERE key=" + fields.key);
            }
            catch (err) {
                console.log(err);
            }
        }else {
            try {
                var stmt = database.prepare("INSERT INTO imenik\
                (ime, priimek, oddelek, stevilka) VALUES (?,?,?,?)");
                stmt.run(fields.ime, fields.priimek, fields.oddelek, fields.its);
                stmt.finalize();
            }
            catch (err) {
                console.log(err);
            }
        }
        response.redirect("/");
    });
});

// ce naslov ni prepoznan
server.use(function (request, response, next) {
  response.redirect("/");
});

server.listen(process.env.PORT, function(){
   console.log("Server is up and running!"); 
});