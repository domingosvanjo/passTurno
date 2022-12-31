
var botaoRemover = document.querySelector("#tab-pass");

botaoRemover.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
    var avoDoAlvo = paiDoAlvo.parentNode;
    alvoEvento.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        avoDoAlvo.remove();
    },500);
    linhas -= 1;
})


