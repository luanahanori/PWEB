function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    };
}

function calcularArea() {

    let base = Number(document.getElementById("base").value);
    let altura = Number(document.getElementById("altura").value);

    let retangulo = new Retangulo(base, altura);

    let area = retangulo.calcularArea();

    document.getElementById("resultado").innerHTML =
        "Área do retângulo: " + area;
}