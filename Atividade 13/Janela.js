let quebrada = false;
 
function abrirJanela() {
 
    if (quebrada == false) {
 
        document.getElementById("janela").src = "JanelaAberta.png";
 
        document.getElementById("titulo").innerText =
            "Janela Aberta";
    }
}
 
function fecharJanela() {
 
    if (quebrada == false) {
 
        document.getElementById("janela").src = "JanelaFechada.png";
 
        document.getElementById("titulo").innerText =
            "Janela Fechada";
    }
}
 
function quebrarJanela() {
 
    document.getElementById("janela").src = "JanelaQuebrada.png";
 
    document.getElementById("titulo").innerText =
        "Janela Quebrada";
 
    quebrada = true;
}
 