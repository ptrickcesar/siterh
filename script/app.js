const express = require("/Users/patrickcesar/Projects/node_modules/express");
const app = express();

app.get("/", function(req, res){
  res.send("Welcome to my app!");
});

app.get("/test", function(req, res){
  res.send("Welcome to my app! aaaaaaaaaaaaaaaaaaa");
});

app.listen(8081,function(){
  console.log("Server on at http://localhost:8081");
});
