
var express = require("express");
var app = express();
const port = process.env.PORT || 3000  
var path = require("path");
var fs = require("fs");
var mail = require("./node_aux/nodeMailer.js")


/*BODY PARSER MIDDLEWARE*/
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*SERVE STATIC FILES*/
app.use(express.static(path.join(__dirname, 'public')));



/*APP ROUTES*/
app.listen(port, function(req , res){
	console.log("Listening Chacinados el Condor en puerto: " + port);
})


app.get("/" , function(req , res){
	res.sendFile(path.join(__dirname ,"index.html"));

})

app.get("/ingenieria" , function(req,res){
	res.sendFile(path.join(__dirname ,"index_in.html"));
})

app.get("/it" , function(req,res){
	res.sendFile(path.join(__dirname ,"index_it.html"));
})


app.get("/admin" , function(req,res){
	res.sendFile(path.join(__dirname ,"admin.html"));
})

app.get("/mailcontacto" , function(req,res){
	res.sendFile(path.join(__dirname ,"contactomsj2.html"));
})

app.get("/mailcontacto2" , function(req,res){
	res.sendFile(path.join(__dirname ,"contactomsj.html"));
})


var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
var Busboy = require('busboy');




app.post("/sendMail" , upload.single('adjunto'),  function(req, res, next){
	var pt = req.file;
		var bd = req.body;
var mailOptions = {};
try{
	mailOptions = {
	  from: req.body.mail ,
	  to: mailingenio,
	   attachments: [{
	    filename: pt.originalname,
	    path: pt.path,
	   contentType: 'application/pdf'
	  }],

	  subject: 'Usuario: ' + req.body.nombre +' - Mail: ' + req.body.mail + " - Asunto: " + req.body.asunto,
	  text: req.body.comentario
	};
	
}

catch(e){

	mailOptions = {
		from: req.body.mail,
		to: mailingenio,
		subject: 'Usuario: ' + req.body.nombre + ' - Mail: ' + req.body.mail + " - Asunto: " + req.body.asunto,
		text: req.body.comentario
	};
}


mail.enviar(mailOptions , function(data){
	console.log(data);
	var check =data.indexOf("OK")
	console.log("check: " + check)
	if (check > 0){
		res.sendFile(path.join(__dirname ,"contactomsj.html"));
	}else{
		res.sendFile(path.join(__dirname, "contactomsj2.html"));	
	}
})
})




