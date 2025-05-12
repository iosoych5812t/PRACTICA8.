function sumar(){
    var res = eval(document.calc.txtnumero1.value) + eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
}
function restar(){
    var res = eval(document.calc.txtnumero1.value) - eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
}
function multiplicar(){
    var res = eval(document.calc.txtnumero1.value) * eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
}
function dividir(){
    var res = eval(document.calc.txtnumero1.value) / eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
}
function modulo(){
    var res = eval(document.calc.txtnumero1.value) % eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
}
function elevar(){
    var res = eval(document.calc.txtnumero1.value) ** eval(document.calc.txtnumero2.value);
    document.calc.resultado.value = res;
}