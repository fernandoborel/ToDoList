var endFilme = document.getElementById("endFilme");

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var legendaFilmes = document.getElementById("legenda").value;
    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito, legendaFilmes);
    } else {
        endFilme.innerHTML = "Endereço inválido!";
    }
  document.getElementById("filme").value = "";
  document.getElementById("legenda").value = "";
}

function listarFilmesNaTela(filme, legenda) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    var elementoLegenda = "<figcaption>" + legenda + "</figcaption>";
    var legendaInTela = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito + elementoLegenda;
    var filmesAdicionados = [elementoListaFilmes];
}

function limparFilme() {
  var limparFilme = document.getElementById("listaFilmes");
  limparFilme.innerHTML = "";
  endFilme.innerHTML = "";
}
