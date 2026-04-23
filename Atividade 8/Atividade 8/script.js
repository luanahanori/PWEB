let total = 0;
let somaIdades = 0;
let maiorIdade = 0;
let menorIdade = 999;

let qtdPessimo = 0;
let qtdOtimoBom = 0;

let mulheres = 0;
let homens = 0;
let outros = 0;

function adicionar() {
    if (total >= 45) {
        alert("Limite de 45 pessoas atingido!");
        return;
    }

    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = parseInt(document.getElementById("opiniao").value);

    if (!idade || !sexo || !opiniao) {
        alert("Preencha todos os campos!");
        return;
    }

    total++;
    somaIdades += idade;

    if (idade > maiorIdade) maiorIdade = idade;
    if (idade < menorIdade) menorIdade = idade;

    if (opiniao === 1) qtdPessimo++;
    if (opiniao === 3 || opiniao === 4) qtdOtimoBom++;

    if (sexo === "feminino") mulheres++;
    else if (sexo === "masculino") homens++;
    else outros++;

    document.getElementById("contador").innerText = "Pessoas registradas: " + total;

    document.getElementById("idade").value = "";
    document.getElementById("sexo").value = "";
    document.getElementById("opiniao").value = "";
}

function finalizar() {
    if (total === 0) {
        alert("Nenhum dado inserido!");
        return;
    }

    let media = somaIdades / total;
    let porcentagem = (qtdOtimoBom / total) * 100;

    document.getElementById("resultado").innerHTML = `
        <p><b>Média de idade:</b> ${media.toFixed(2)}</p>
        <p><b>Maior idade:</b> ${maiorIdade}</p>
        <p><b>Menor idade:</b> ${menorIdade}</p>
        <p><b>Péssimo:</b> ${qtdPessimo}</p>
        <p><b>% Ótimo/Bom:</b> ${porcentagem.toFixed(2)}%</p>
        <p><b>Mulheres:</b> ${mulheres}</p>
        <p><b>Homens:</b> ${homens}</p>
        <p><b>Outros:</b> ${outros}</p>
        
`}
