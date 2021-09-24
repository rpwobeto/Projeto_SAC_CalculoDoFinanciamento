//encontra os valores no html
let valor = document.getElementById("inputValor");
let simularBtn = document.getElementById("simularBtn");

//função adicionada ao click
simularBtn.addEventListener("click", function () {
  //calcula prazo em meses e juros ao mês e valor da amortização
  let resultadoPrazoMes =
    document.getElementById("inputPrazo").valueAsNumber * 12;

  let inputJuros = document.getElementById("inputJuros");
  let resultadoJurosMes = Math.pow(1 + inputJuros.valueAsNumber, 1 / 12) - 1;

  let amortizacao = valor.valueAsNumber / resultadoPrazoMes;
  // imprimi os resultados
  document.getElementById("inputPrazoMeses").value = resultadoPrazoMes;
  document.getElementById("inputJuroMes").value = resultadoJurosMes;

  //declara o valor de juros acumulados
  var total = 0;

  //cria um loop para calcular o valor de 5 prestações
  for (let i = 0; i < resultadoPrazoMes; i++) {
    //calcula os juros e o total para apresentar na tabela
    let juros = (valor.valueAsNumber - i * amortizacao) * resultadoJurosMes;
    total =
      (valor.valueAsNumber - i * amortizacao) * resultadoJurosMes + amortizacao;

    //cria as linhas e células para o tbody do HTML
    let tabelaParcelas = document.getElementById("tabelaParcelas");
    let row = tabelaParcelas.insertRow();
    let cellPrestacoes = row.insertCell();
    let cellamortizacao = row.insertCell();
    let cellJuros = row.insertCell();
    let cellTotal = row.insertCell();
    cellPrestacoes.style = "text-align: center;";
    cellamortizacao.style = "text-align: center;";
    cellJuros.style = "text-align: center;";
    cellTotal.style = "text-align: center;";

    //constroi a tabela com os valores 
    cellPrestacoes.innerHTML = i + 1;
    cellamortizacao.innerHTML = +amortizacao.toFixed(2);
    cellJuros.innerHTML = juros.toFixed(2) + "&nbsp &nbsp";
    cellTotal.innerHTML = total.toFixed(2);
  }

  //calcula os juros acumulados
  var totalj = 0;
  for (var i = 0; i < resultadoPrazoMes; i++) {
    var saldoDevedor = valor.valueAsNumber - i * amortizacao;
    var jurosP = saldoDevedor * resultadoJurosMes;
    totalj += jurosP;
  }
  //imprimi na tela do usuário o resultado dos juros acumulados
  document.getElementById("inputJurosAcumulados").value = totalj.toFixed(2);
});
