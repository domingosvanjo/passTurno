
var botaoRemover = document.querySelector("#tab-pass");

botaoRemover.addEventListener("click", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        paiDoAlvo.remove();
    },500);
    
})
