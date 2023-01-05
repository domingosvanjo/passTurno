
var botaoRemover = document.querySelector("#tab-pass");

botaoRemover.addEventListener("click", function(event){
    if(event.target == "[object HTMLImageElement]"){
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode; // Tr = paciente = remover
        var avoDoAlvo = paiDoAlvo.parentNode;
        
        if(avoDoAlvo != "[object HTMLTableRowElement]") return;
        paiDoAlvo.parentNode.classList.add("fadeOut");
        
        setTimeout(function(){
            avoDoAlvo.remove();
            somaDprs();
            somaAhlsOhds();
        },250);
      
    }
});
