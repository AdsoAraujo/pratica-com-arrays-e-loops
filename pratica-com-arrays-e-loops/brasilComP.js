function solucao(primeiraLetra, segundaLetra, palavras) {
  //seu codigo aqui
  let primeiraLista = [];
  let segundaLista = [];

  for (let primeira of palavras) {
    if (primeira[0] === primeiraLetra) {
      primeiraLista.push(primeira);
    }
  }
  for (segunda of primeiraLista) {
    if (segunda[1] === segundaLetra) {
      segundaLista.push(segunda);
      console.log(segunda);
    }
  }

  if (segundaLista.length === 0) {
    console.log("NENHUMA");
  }
}

function processData(input) {
  const { primeiraLetra, segundaLetra, palavras } = JSON.parse(input);
  solucao(primeiraLetra, segundaLetra, palavras);
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
