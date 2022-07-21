function contar() {
  var contInicio = document.getElementById("inicio");
  var contFim = document.getElementById("fim");
  var contPasso = document.getElementById("passo");
  let res = document.getElementById("res");

  if (
    contInicio.value.length == 0 ||
    contFim.value.length == 0 ||
    contPasso.value.length == 0
  ) {
    res.innerHTML = 'Impossível contar'
    alert("Verifique os dados e tente novamente.");
  } else {
    res.innerHTML = `Contando: <br>`;
    let i = Number(contInicio.value);
    let f = Number(contFim.value);
    let p = Number(contPasso.value);

    if (p == 0){
        alert('Passo Inválido! Considerando passo 1')
        p = 1
    }
// contagem crescente
    if (f > i){
        for (let cont = i; cont <= f; cont += p) {
            res.innerHTML += `${cont} \u{1F449}`;
          }
// contagem regressiva
    } else if (i > f) {
        for (let cont = i; cont >= f; cont -= p ){
            res.innerHTML += `${cont} \u{1F449}`
        }
    } 
    res.innerHTML += `Contagem finalizada \u{1F3C1}`
}
}
