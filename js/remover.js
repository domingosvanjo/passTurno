
var botaoRemover = document.querySelector("#sMenos");

botaoRemover.addEventListener("click", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
    var avoDoAlvo = paiDoAlvo.parentNode;
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        avoDoAlvo.remove();
    },500);
    
})
