
app.controller("chacinadoController" , function($scope , $http , googleService , myService){

	console.log("iniciando controlador chacinado");

	$scope.categoriasEleccion = [];
	$scope.backCategory = "que"

	$scope.activateProd = function(){

		var h = window.screen.height;
		var y = window.scrollY;
		console.log(y);
		if (y > (h*2) && y < (h*3)){
			console.log("arranca")
			$(".categoriaModulo").addClass("myFix")
			$(".productoModulo").addClass("myMargin")
			$(".titulosain").hide(1000); 

		}else{
			// $(".categoriaModulo").height("0px");
			$(".categoriaModulo").removeClass("myFix");
			$(".productoModulo").removeClass("myMargin")
			$(".titulosmain").show(1000); 
		}		
	}

	window.onscroll = function(){
		$scope.activateProd()
	}

	var timeInit = 0.2;

	$scope.categorias = [ 
	{nombre:"Quesos" , catId:"que" ,  img:"https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
	{nombre:"Bebidas" , catId:"vin" , img:"https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
	{nombre:"Frutos" , catId:"fru" , img:"https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
	{nombre:"Extras" , catId:"ext" , img:"https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"},
	{nombre:"Oliva" , catId:"oli" , img:"https://images.pexels.com/photos/821365/pexels-photo-821365.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"}
	]

	$scope.direcciones = [{lugar: "Plaza de las Carretas" , localidad: "Muñiz, San Miguel", direccion:"Av. Presidente peron esquina San José" , horario:"Sábado y Domingo 10:00hs-21:00hs" , mapUrl:"https://goo.gl/maps/N9RMAkzQpbtkMdTHA"},
	{lugar: "Parque Palacio municipal " , localidad:"Malvinas Argentinas" , direccion:"Av Presidente. Juan Domingo Peron 4276" , horario:"Sábado y Domingo 10:00hs-21:00hs" , mapUrl:"https://goo.gl/maps/N9RMAkzQpbtkMdTHA"}
	]

	$scope.productos = [
		{nombre:"Guda" , marca:"Sancor",  um:"10kg" , color:"Beige",  cat:"Quesos" , catId:"que" , des:"Queso de cabra y con un tinte beige, excelente gust" , img:"https://previews.123rf.com/images/simicv/simicv1809/simicv180900035/109202324-sliced-fresh-emmental-cheese-on-white-background-cow-cheese.jpg" , celiaco:true },
		{nombre:"Mardel" , marca:"Veronica",  um:"13kg" , color:"Beige",  cat:"Quesos" , catId:"que" , des:"Degustar este queso, es el mejor queso de todos" ,  celiaco:false , sal:true ,  img:"https://tcs.imgix.net/2015/06/GOUDA-CUMIN-STACKED-TOP.jpg?auto=compress%2Cformat&ixlib=php-1.2.1"},
		{nombre:"Regianatto" , marca:"Sancor",  um:"13kg" , color:"Purpura",  cat:"Quesos" , catId:"que" , des:"Degustar este queso, es el mejor queso de todos" ,  celiaco:false , sal:true ,  img:"https://tcs.imgix.net/2015/06/GOUDA-CUMIN-STACKED-TOP.jpg?auto=compress%2Cformat&ixlib=php-1.2.1"},
		{nombre:"Regianatto" , marca:"Sancor",  um:"13kg" , color:"Purpura",  cat:"Quesos" , catId:"que" , des:"Degustar este queso, es el mejor queso de todos" ,  celiaco:false , sal:true ,  img:"https://tcs.imgix.net/2015/06/GOUDA-CUMIN-STACKED-TOP.jpg?auto=compress%2Cformat&ixlib=php-1.2.1"},
		{nombre:"test" , marca:"Sancor",  um:"13kg" , color:"Purpura",  cat:"Quesos" , catId:"que" , des:"Degustar este queso, es el mejor queso de todos" ,  celiaco:false , sal:true ,  img:"https://tcs.imgix.net/2015/06/GOUDA-CUMIN-STACKED-TOP.jpg?auto=compress%2Cformat&ixlib=php-1.2.1"},
		{nombre:"Salame" , marca:"ferragio",   um:"10kg" , color:"Rosa" ,  cat:"Quesos" , catId:"emb" , des:"lorem	ipsum ipsum ipsum lorem lorem test",  celiaco:true , sal:true , img:"https://thumbs.dreamstime.com/z/different-sorts-cheese-white-background-45703789.jpg"},
		{nombre:"Jamon Serrano" , marca:"Paladini",   um:"10kg" , color:"Rosado" ,  catId:"emb" , cat:"Quesos" , des:"Jamon de cabra y ..", celiaco:true , img:"https://www.consumer.es/wp-content/uploads/2019/07/img_lonchas-pavo-pollo-jamon-hd.jpg"},
		{nombre:"Mendocino" , marca:"Malbec",   um:"1l" , color:"te" , catId:"vin" , cat:"Vinos y bebidas"  , des:"Queso de cabra y ..", celiaco:true , sal:true , img:"https://soloporgusto.com/wp-content/uploads/2018/06/gran-enemigo-Catena-Zapata-Adrianna.jpg"},
		{nombre:"Nocturno" , marca:"Mendocino",   um:"1l" , color:"te" ,  cat:"Vinos y bebidas" , catId:"vin" , des:"Vino de calidad, mendocino de cepa" , celiaco:false , sal:true , img:"https://cdn.shopify.com/s/files/1/0005/4634/0925/products/marlodulce_2048x2048.jpg?v=1556299447"},
		{nombre:"Nuez" , marca:"grandax",   um:"1l" , color:"Marron" ,  cat:"Frutos secos" , catId:"fru" , des:"Vino de calidad, mendocino de cepa" , celiaco:false , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
		{nombre:"Avellana" , marca:"grandax",   um:"120" , color:"Marron" ,  cat:"Frutos secos" , catId:"fru" , des:"Vino de calidad, mendocino de cepa" , celiaco:false , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
		{nombre:"Oliva" , marca:"El Sol",   um:"120" , color:"verde" ,  cat:"Aceitunas" , catId:"oli" , des:"aceite de oliva sin igual" , celiaco:false , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
		{nombre:"Oliva" , marca:"El Sol",   um:"120" , color:"verde" ,  cat:"Aceitunas" , catId:"oli" , des:"aceite de oliva sin igual" , celiaco:false , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
		{nombre:"Oliva" , marca:"El Sol",   um:"120" , color:"verde" ,  cat:"Aceitunas" , catId:"oli" , des:"aceite de oliva sin igual" , celiaco:false , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
		{nombre:"Oliva" , marca:"El Sol",   um:"120" , color:"verde" ,  cat:"Aceitunas" , catId:"oli" , des:"aceite de oliva sin igual" , celiaco:false , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
		{nombre:"Aceituna" , marca:"El Sol",   um:"120" , color:"verde" ,  cat:"Extras" , catId:"ext" , des:"Las mejores aceitunas del condado" , celiaco:true , sal:true , img:"https://www.frutosare.com.ar/wp-content/uploads/2017/04/nuez-con-cascara.jpg"},
	]
	$scope.init = function(){
			$scope.categoriasEleccion = $scope.productos.filter(function(item){
				return item.catId == "que"
			});

	}

	$scope.whatsapp = function(txt , tp){
		var msg;

		if(txt == undefined){
			alert("Insertar nombre");
		}else{
			if(tp == "new"){
				msg = "Hola! Quisiera que agreguen mi mail "+ txt + " al newsletter de Chacinados el Condor!"

			}else{
				msg = "Hola, soy "+ txt + " me interesaria saber más acerca como emprender en Chacinados el Condor!"
			}

			window.location = "https://api.whatsapp.com/send?phone=5491136486047&text=" + msg;
		}
	}


	$scope.tiempowow = function(){
		timeInit = timeInit * 1.2;
		// alert(timeInit)
		var t = timeInit;
		var tm = t * 1.2;
		return String(tm) + "s"
	}



	$scope.propertyTest = function(bol , type){
		if (bol==true && type =="cel"){
			return "http://fumdellum.com/wp-content/uploads/2015/07/CELIACOS-FUM-LARGE.png"
		}else if(bol==true && type =="sal"){
			return ""
		}
	}

	$scope.showProducts= function(cat){
		$scope.backCategory = cat;
		$scope.categoriasEleccion = $scope.productos.filter(function(item){
			return item.catId == cat;
		})
		console.log(cat)
		console.log($scope.categoriasEleccion)
	}



})

