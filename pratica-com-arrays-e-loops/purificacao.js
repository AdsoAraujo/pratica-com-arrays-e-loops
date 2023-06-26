function solucao(stringCorrompida) {
  // seu codigo aqui
  let dadoPurificado = "";
  for (let letra of stringCorrompida) {
    if (
      letra === "!" ||
      letra === "@" ||
      letra === "#" ||
      letra === "$" ||
      letra === "%" ||
      letra === "&" ||
      letra === "*" ||
      letra === "(" ||
      letra === ")"
    ) {
    } else {
      dadoPurificado = dadoPurificado + letra;
    }
  }
  console.log(dadoPurificado);
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
