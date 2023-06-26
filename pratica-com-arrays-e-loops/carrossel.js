function solucao(sequencia) {
  //seu codigo aqui
  let soma = 0;

  for (let direcao of sequencia) {
    if (direcao === ">") {
      soma += 1;
    } else if (direcao === "<") {
      soma -= 1;
    }

    if (soma < 0) {
      soma = 6;
    } else if (soma > 6) {
      soma = 0;
    }
  }
  console.log(soma);
}

function processData(input) {
  solucao(input);
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
