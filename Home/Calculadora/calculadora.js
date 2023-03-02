function add() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 + numero2;
    document.getElementById("total").value = total;
}

function subtract() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 - numero2;
    document.getElementById("total").value = total;
}

function multiply() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 * numero2;
    document.getElementById("total").value = total;
}

function divide() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 / numero2;
    document.getElementById("total").value = total;
}
