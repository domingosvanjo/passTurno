
var botaoRemover = document.querySelector("#tab-pass");

botaoRemover.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
    var avoDoAlvo = paiDoAlvo.parentNode;
    avoDoAlvo.parentNode.classList.add("fadeOut");
    alert(avoDoAlvo);
    setTimeout(function(){
        avoDoAlvo.remove();
    },500);
    linhas -= 1;
})


