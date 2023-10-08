var numero1 = 0; 
var numero2 = 0; 

numero1=prompt("Ingrese el primer número:")
numero2=prompt("Ingrese el segundo número:")

if (numero1 > numero2) {
    var suma = numero1 + numero2;
    alert("La suma de los dos números es: " + suma);
} else if (numero2 > numero1) {
    var cuadrado1 = numero1 * numero1;
    var cuadrado2 = numero2 * numero2;
    var sumaCuadrados = cuadrado1 + cuadrado2;
    alert("La suma de los cuadrados es: " + sumaCuadrados);
} else {
    alert("Los números son iguales.");
}