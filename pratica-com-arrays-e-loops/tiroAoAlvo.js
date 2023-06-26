function solucao(disparos) {
  //seu codigo aqui
  let disparosBons = [];
  for (let bons of disparos) {
    if (bons > 70) {
      disparosBons.push(disparos);
    }
  }
  if (disparosBons.length > 2) {
    console.log(disparosBons.length);
  } else {
    console.log("ELIMINADO");
  }
}

function processData(input) {
  solucao(
    input
      .split(" ")
      .map((x) => Number(x))
      .filter((x) => x)
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
