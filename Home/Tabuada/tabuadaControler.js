function navegaHome() {
    window.location.href = "../home.html";
}

function calcularTabuada() {
    var numeroMultiplicado = parseInt(document.getElementById("numeroMultiplicado").value);
    var numeroInicio = parseInt(document.getElementById("numeroInicio").value);
    var numeroFim = parseInt(document.getElementById("numeroFim").value);

    var tabuada = "";

    for (var i = numeroInicio; i <= numeroFim; i++) {
        tabuada += numeroMultiplicado + " x " + i + " = " + (numeroMultiplicado * i) + "<br>";
    }

    document.getElementById("resultado").innerHTML = tabuada;
}
