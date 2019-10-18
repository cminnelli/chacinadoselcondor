
app.controller("chacinadoController" , function($scope , $http , googleService , myService){

	console.log("iniciando controlador chacinado");

	$scope.categorias = [ "Quesos" ,  "Vinos y bebidas" , "Frutos secos" , "Aceitunas y Pickles" , "Aceite de Oliva" ]
	$scope.categoriasEleccion = [];

	$scope.productos = [
		{nombre:"Guda" ,  peso:"10kg" , color:"Beige", curación:5 , cat:"Quesos" , des:"Queso de cabra y con un tinte beige" , img:"https://previews.123rf.com/images/simicv/simicv1809/simicv180900035/109202324-sliced-fresh-emmental-cheese-on-white-background-cow-cheese.jpg"},
		{nombre:"Mardel" ,  peso:"13kg" , color:"Beige", curación:5 , cat:"Quesos" , des:"Degustar este queso, es el mejor queso de todos" , img:"https://tcs.imgix.net/2015/06/GOUDA-CUMIN-STACKED-TOP.jpg?auto=compress%2Cformat&ixlib=php-1.2.1"},
		{nombre:"Veronica" ,  peso:"13kg" , color:"Rosa" , curación:5 , cat:"Quesos" , des:"lorem	ipsum ipsum ipsum lorem lorem test", img:"https://thumbs.dreamstime.com/z/different-sorts-cheese-white-background-45703789.jpg"},
		{nombre:"Jamon Serrano" ,  peso:"10kg" , color:"Rosado" , curación:5 , cat:"Embutidos" , des:"Jamon de cabra y .."},
		{nombre:"Mendocino" ,  peso:"1l" , color:"te" , curación:3 , cat:"Vinos y bebidas"  , des:"Queso de cabra y ..", img:"https://soloporgusto.com/wp-content/uploads/2018/06/gran-enemigo-Catena-Zapata-Adrianna.jpg"},
		{nombre:"Nocturno" ,  peso:"1l" , color:"te" , curación:4 , cat:"Vinos y bebidas"  , des:"Queso de cabra y .."},
		{nombre:"Guda" ,  peso:"23kg" , color:"te" , curación:5 , cat:"quesos" , des:"Queso de cabra y .."},
		{nombre:"Guda" ,  peso:"23kg" , color:"te" , curación:5 , cat:"quesos" , des:"Queso de cabra y .."}
	]

	$scope.showProducts= function(cat){
		$scope.categoriasEleccion = $scope.productos.filter(function(item){
			return item.cat == cat;
		})
		console.log($scope.categoriasEleccion)
	}


})

