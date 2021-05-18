const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");

});

app.post("/",function(req,res){
  var n1=Number(req.body.num1);
  var n2=Number(req.body.num2);
  var n3=req.body.num3;
  var result;
  if(n3=='+')
  result=n1+n2;
  else if(n3=='-')
  result=n1-n2;
  else if(n3=='*')
  result=n1*n2;
  else if(n3=='/')
  result=n1/n2;


  res.send("The answer is"+" "+result);
});

app.listen(3000,function(){
 console.log("Sever has started on port 3000");

});
