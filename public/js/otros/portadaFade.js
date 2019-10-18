function contactMe(){
  alert("Contacto Diseño y Programación web: cminnelli@gmail.com")
  }
  


/*ANIMACION LOADING*/

function loading(time){


	setTimeout( function(){


		$(".bodyMain , body").css({
			overflowY:"visible",
		})

		$("nav ,.navbar , .navbar-expand-md , .navbar-dark , .bg-primary").css({
			display:"block"
		})

    if (window.matchMedia("(min-width: 600px)").matches) {
      $(".portada").css({
        height:"380px",
      })
    } else {
      $(".portada").css({
        height:"100vh",
      })
    }
    $(".loading").fadeOut(1200)


    // alert("listo")

	} ,time)

}



loading(10);
