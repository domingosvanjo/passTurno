
var botaoRemover = document.querySelector("#tab-pass");

botaoRemover.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
    var avoDoAlvo = paiDoAlvo.parentNode;
    paiDoAlvo.parentNode.classList.add("fadeOut");
    alert(avoDoAlvo);
    
    if(avoDoAlvo != object HTMLTableRowElement) return;
    setTimeout(function(){
        avoDoAlvo.remove();
    },500);
    linhas -= 1;
})


