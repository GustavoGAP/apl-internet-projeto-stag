function somar() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 + numero2;
    document.getElementById("total").value = total;
}

function subtrair() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 - numero2;
    document.getElementById("total").value = total;
}

function multiplicar() {
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

function navegaHome(){
    window.location.href = "C:/Users/User/Desktop/Curso Alura/Projeto Safra/apl-internet-projeto-stag/Home/home.html";
}