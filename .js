

function loadpk() {
let url = "https://pokeapi.co/api/v2/pokemon/chansey";
fetch(url)
.then((response) => {
return response.json();
})
.then((data) => {


console.clear();
console.log(data);
document.getElementById("nome").innerHTML = data["name"];
document.getElementById("numero").innerHTML = data["id"];
let img = data ["sprites"] ["front_shiny"];
document.getElementById("pic").setAttribute("src", img);
})

.catch((erro) => {
console.log("Erro: " + erro);
});
}
const botaoMudarCor = document.getElementById("btn-mudar-cor");
let corFundoBranco = true;

botaoMudarCor.addEventListener("click", function() {
  if (corFundoBranco) {
    document.body.style.backgroundColor = "black";
    corFundoBranco = false;
  } else {
    document.body.style.backgroundColor = "white";
    corFundoBranco = true;
  }
});

document.getElementById("btn1").onclick= loadpk;