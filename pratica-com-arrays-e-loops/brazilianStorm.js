function solucao(notas) {
  //seu codigo aqui
  let maior = notas[0];
  let menor = notas[0];

  let soma = 0;
  let media = 0;

  for (let nota of notas) {
    if (nota > maior) {
      maior = nota;
    }
  }
  for (let nota of notas) {
    if (nota < menor) {
      menor = nota;
    }
  }
  for (let nota of notas) {
    soma += nota;
  }
  media = (soma - menor - maior) / (notas.length - 2);

  console.log(media);
}

function processData(input) {
  solucao(
    input
      .trim()
      .split(" ")
      .filter((x) => x)
      .map((x) => parseInt(x, 10))
  );
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
