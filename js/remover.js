
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
        linhas--;
        if (part1.length > 0){
            part1.pop();
            part2.pop();
            part3.pop();
            part4.pop();
            part5.pop();
            part6.pop();
            part7.pop();
            part8.pop();
            part9.pop();
            part10.pop();
            part11.pop();
            part12.pop();
            part13.pop();
            part14.pop();
            part15.pop();
        }
    }
});
