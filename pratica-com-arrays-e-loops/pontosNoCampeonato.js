function solucao(resultados) {
  //seu codigo aqui
  let vitoria = 0;
  let empate = 0;

  let pontos = 0;

  for (let item of resultados) {
    if (item === "V") {
      vitoria += 1;
    } else if (item === "E") {
      empate += 1;
    }
  }
  pontos = vitoria * 3 + empate * 1;

  console.log(pontos);
}

function processData(input) {
  const resultados = JSON.parse(input);
  solucao(resultados);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
