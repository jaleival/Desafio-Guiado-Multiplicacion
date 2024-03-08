let numero = prompt("Ingresa un número desde el 1 al 20");
let resultado = 0;
let verificar = (numero) => {  
    do {
        if (numero < 1 || numero > 20){
            alert('Número fuera de rango');
        }; 
    } while (numero < 1 || numero > 20);

    document.write("<h2>Multiplicación: </h2>");
    for (let i = 1; i <= numero; i++) {
        document.write(`<br>${i} X ${numero} = ${numero * i}`);
    }

    document.write("<hr>");
    document.write("<h2>Factorial: </h2>");
    for (let i = 1; i <= numero; i++) {
        factorial = 1;
        for (let j = 1; j <= i; j++) {
            factorial *= j;
        };
        document.write(`<br>El factorial de ${i} es: ${factorial}`);
    };
};
verificar(parseInt(numero));