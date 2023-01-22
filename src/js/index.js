const modal = document.querySelector(".modal");//Pegamos a modal
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const botaoTrailer = document.querySelector(".botao-trailer"); //Variavel é assim que se faz em JS
const linkDoVideo = video.src;

//Abrir Modal:
botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto")//Adicionamos mais uma classe no JS
    video.setAttribute("src", linkDoVideo);
});//Identificador de clique

//Fechar Modal:
botaoFecharModal.addEventListener("click", () => {
    modal.classList.remove("aberto")//Remove mais uma classe no JS
    video.setAttribute("src", "");
});

