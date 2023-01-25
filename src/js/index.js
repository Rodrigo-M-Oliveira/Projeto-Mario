/*
OBJETIVO 1 - quando o usuário clicar no botão de veja o trailer, devemos abrir a modal com o video do trailer.
  -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o JS.
  -passo 2 - dar um jeito de identificar quando o usuário clicar no botão.
  -passo 3 - dar um jeito de pegar o elemnto da modal no JS
  -passo 4 - abrir o modal na tela

OBJETIVO 2 - quando o usuário clicar no X, devemos fechar a modal.
  -passo 1 - dar um jeito de pegar o elemento de fechar a modal usando o JS.
  -passo 2 - dar um jeito de identificar quando o usuário clicar no X.
  -passo 3 - fechar a modal. 

*/

//OBJETIVO 1
const botaoTrailer = document.querySelector(".botao-trailer");

botaoTrailer.addEventListener("click", () => {
  //passo 4
  modal.classList.add("aberto");
  video.setAttribute("src", linkDoVideo);
});

const modal = document.querySelector(".modal");


//OBJETIVO 2
const botaoFecharModal = document.querySelector(".fechar-modal");

botaoFecharModal.addEventListener("click", () => {
  //passo 3
  modal.classList.remove("aberto");
  video.setAttribute("src", "");
});

//ULTIMO PASSO, ENCERRAR O VIDEO

const video = document.getElementById("video");

const linkDoVideo = video.src;

