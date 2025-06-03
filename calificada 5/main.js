
let opcionMenu =prompt("Ingresa una opcion de area 1)Cuadrado 2)Rectangulo 3)Triangulo");

if (opcionMenu === "1") {
    let ladoCuadrado = parseFloat(prompt("ingresa solo un lado lado (puede ser decimal)"));
    let areaCuadrado = (ladoCuadrado) * (ladoCuadrado);
    alert("El area del cuadrado es: " + areaCuadrado) 

}else if (opcionMenu === "2"){
    let ladoRectangulo1 = parseFloat(prompt("Imgresa el primer lado del rectangulo (puede ser decimal)"));
    let ladoRectangulo2 = parseFloat(prompt("Imgresa el segundo lado del rectangulo (puede ser decimal)"));
    let areaRectangulo = (ladoRectangulo1) * (ladoRectangulo2);
    alert("El area del rectangulo es: " + areaRectangulo)
}else if (opcionMenu === "3") {
    let baseTriangulo = parseFloat(prompt("Ingresa la base del Triangulo (puede ser decimal) "));
    let alturaTriangulo = parseFloat(prompt("Ingresa la altura del Triangulo (puede ser decimal)"));
    let areaTriangulo = (baseTriangulo) * (alturaTriangulo) / 2 ;
    alert("El area de tu triangulo es: " + areaTriangulo)
}else {
    alert("Opcion invalida... Tas menso :D pero tienes que volver a escoger otra opcion.... Por eso tas menso :D")
}
