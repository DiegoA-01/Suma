console.log("Hola, este es el sistema matematico inicial");


let opcion = prompt("Ingrese 1 para sumas \n Ingrese 2 para restar \n Ingrese 3 para multiplicar \n Ingrese 4 para dividir")
let numero1 = parseFloat(prompt("Ingrese el primer numero"))
let numero2 = parseFloat(prompt("Ingrese el segundo numero"))
let resultado;

if (opcion == "1"){
    resultado = numero1 + numero2
    console.log("El resultado de la suma es: " + resultado)
}else if (opcion == "2"){
    resultado = numero1 - numero2
    console.log("El resultado de la resta es: " + resultado)
}else if (opcion == "3"){
    resultado = numero1 * numero2
    console.log("El resultado de la multiplicacion es: " + resultado)
}else if (opcion == "4"){
    if (numero2 !== 0){
        resultado = numero1 / numero2
        console.log("El resultado de la division es: " + resultado)
    } else {
        console.log("Error: No se puede dividir por cero.")
    }
}