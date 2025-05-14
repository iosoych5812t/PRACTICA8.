function sumar(){
    var res = eval(document.calc.txtnumero1.value) + eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
    var mensaje = "Se ha sumado " + document.calc.txtnumero1.value + " + " + document.calc.txtnumero2.value;
    alert(mensaje);
}
function restar(){
    var res = eval(document.calc.txtnumero1.value) - eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
    var mensaje = "Se ha restado " + document.calc.txtnumero1.value + " - " + document.calc.txtnumero2.value;
    alert(mensaje);
}
function multiplicar(){
    var res = eval(document.calc.txtnumero1.value) * eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
    var mensaje = "Se ha multiplicado " + document.calc.txtnumero1.value + " * " + document.calc.txtnumero2.value;
    alert(mensaje);
}
function dividir(){
    var res = eval(document.calc.txtnumero1.value) / eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
    var mensaje = "Se ha dividido " + document.calc.txtnumero1.value + " / " + document.calc.txtnumero2.value;
    alert(mensaje);
}
function modulo(){
    var res = eval(document.calc.txtnumero1.value) % eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
    var mensaje = "Se ha sacado el residuo de la division " + document.calc.txtnumero1.value + " % " + document.calc.txtnumero2.value;
    alert(mensaje);
}
function elevar(){
    var res = eval(document.calc.txtnumero1.value) ** eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
    var mensaje = "Se ha elevado un numero a una potencia " + document.calc.txtnumero1.value + " ** " + document.calc.txtnumero2.value;
    alert(mensaje);
}