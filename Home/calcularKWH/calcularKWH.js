function mostra(frase) {
    document.write(frase);
}

function navegaHome(){
    window.location.href = "C:/Users/User/Desktop/Curso Alura/Projeto Safra/apl-internet-projeto-stag/Home/home.html";
}

function mostrarQuantoPagar() {
    var numero1 = parseInt(document.getElementById("numero1").value);
    console.log(numero1);
    var numero2 = parseInt(document.getElementById("numero2").value);
    var total = numero1 * numero2;
    return total
}

var total = mostrarQuantoPagar(numero1, numero2)

mostra("o valor pago em sua conta é " + total)

if (imc < 18.5) {
    mostra("Você está abixo do recomendado")
}
if (imc > 35) {
    mostra("Você está acima do recomendado")
}
if (imc >= 18.5 && imc <= 35) {
    mostra("Seu imc está ideal")
}