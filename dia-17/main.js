/* let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let parrafo = document.querySelector("#parrafo");
let contador = 0;

btn1.addEventListener("click" , function() {
    contador++
    parrafo.textContent = contador ;

});

btn2.addEventListener("click" , function() {
    contador--
    parrafo.textContent = contador ;

});
 */

/* let botoncito = document.querySelector("#botoncito");
let imagen = document.querySelector("#imagen");
let dia =true 

botoncito.addEventListener("click" , function() {
    dia = !dia;
    if (dia) {
        botoncito.textContent = "Lado de la fuerza";
        imagen.setAttribute(
            "src" ,
            "https://images4.fanpop.com/image/photos/17100000/Anakin-Skywalker-anakin-skywalker-17136865-905-1488.jpg"
        );
    } else {
        botoncito.textContent = "lado oscuro";
        imagen.setAttribute(
            "src",
            "https://images.hdqwalls.com/wallpapers/darth-vader-minimal-in-fiery-red-7w.jpg"
        )
    }
    
}); */


let botoncito = document.querySelector("#botoncito");
let imagen = document.querySelector("#imagen");
let estado = 0; // 0 = día, 1 = noche, 2 = equilibrio

botoncito.addEventListener("click", function () {
    estado = (estado + 1) % 3; // Cicla entre 0, 1 y 2

    if (estado === 0) {
        botoncito.textContent = "Lado de la fuerza";
        imagen.setAttribute(
            "src",
            "https://vignette.wikia.nocookie.net/star-wars-lego/images/2/24/Anakin-LSW3.png/revision/latest?cb=20131222180532&path-prefix=es"
        );
    } else if (estado === 1) {
        botoncito.textContent = "Lado oscuro";
        imagen.setAttribute(
            "src",
            "https://wallpapercave.com/wp/wp11273619.png"
        );
    } else {
        botoncito.textContent = "Equilibrio";
        imagen.setAttribute(
            "src",
            "https://img1.wikia.nocookie.net/__cb20080722182251/legogames/es/images/9/91/Anakin_Skywalker_(fantasma).JPG"
        );
    }
});
