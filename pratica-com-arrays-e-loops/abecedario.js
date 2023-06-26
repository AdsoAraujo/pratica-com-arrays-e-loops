function solucao(letra, palavras) {
  //seu codigo aqui
  let acertaram = [];
  let erraram = [];
  for (let inicial of palavras) {
    if (inicial[0] !== letra) {
      erraram.push(inicial);
    }
  }
  console.log(erraram.length);
}

function processData(input) {
  const { letra, palavras } = JSON.parse(input)[0];
  solucao(letra, palavras);
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
