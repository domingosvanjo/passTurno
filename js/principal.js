var data = new Date();

var dataAtual = document.querySelector("#data");

function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        aa: date.getFullYear().toString().slice(-4),
        aaaa: date.getFullYear()
    }
    return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
}

dataAtual.value = formatDate(data, 'aa-mm-dd');

var botaoAddLinha1 = document.querySelector("#sMais1");
var botaoAddLinha2 = document.querySelector("#sMais2");
var botaoAddLinha3 = document.querySelector("#sMais3");
var botaoAddLinha4 = document.querySelector("#sMais4");
var botaoAddLinha5 = document.querySelector("#sMais5");
var botaoAddLinha6 = document.querySelector("#sMais6");
var botaoAddLinha7 = document.querySelector("#sMais7");

botaoAddLinha1.addEventListener("click", function(){
    adicionarTr();
})
botaoAddLinha2.addEventListener("click", function(){
    adicionarTr();
})
botaoAddLinha3.addEventListener("click", function(){
    adicionarTr();
})
botaoAddLinha4.addEventListener("click", function(){
    adicionarTr();
})
botaoAddLinha5.addEventListener("click", function(){
    adicionarTr();
})
botaoAddLinha6.addEventListener("click", function(){
    adicionarTr();
})
botaoAddLinha7.addEventListener("click", function(){
    adicionarTr();
})



function adicionarTr(){
    var linha = montarTr();
    var tabela = document.querySelector("#tab-pass");
    tabela.appendChild(linha);
}

function montarTr(){
    var passTr = document.createElement("tr");
    passTr.classList.add("centralizar");

    passTr.appendChild(montarTd1());
    
    passTr.appendChild(montaTdImg("sMenos", "img/menos.png", "Sinal de remover","Remover linha",));
    passTr.appendChild(montarTd("number", "dpr", "0","50000", ""));
    passTr.appendChild(montarTd("number", "ahl", "0","50000", ""));
    passTr.appendChild(montarTd("number", "ohd", "0","50000", ""));
    passTr.appendChild(montarTd("text", "Qdx", "0","4", "voo"));
    passTr.appendChild(montarTd("text", "Qdx", "0", "4", "voo"));
    passTr.appendChild(montarTd("text", "Qdx", "0","4", "voo"));
    passTr.appendChild(montarTd("text", "cttPen", "0","10", "Nenhum"));
    passTr.appendChild(montarTd("text", "cttPen", "0","10", "Nenhum"));
    passTr.appendChild(montarTd("text", "rush", "0","", "Nenhuma"));
    passTr.appendChild(montarTd("text", "bags", "0","8", ""));
    passTr.appendChild(montarTd("text", "bags", "0","8", ""));
    passTr.appendChild(montarTd("text", "bdos", "0","10", "GYNLA12345"));
    passTr.appendChild(montarTd("text", "bdos", "0","10", "GRULA12345"));
    passTr.appendChild(montarTd("text", "ahls", "0","10", "Nenhuma"));
    passTr.appendChild(montarTd("text", "ahls", "0","10", "Nenhuma"));

    return passTr;
}
//<img id="sMais1" src="img/sinal-de-mais.png" alt="Sinal de mais" title="Adicionar linha.">

function montarTd1(){
    var td = document.createElement("td");
    return td
}

function montaTdImg(id, src, alt, title){
    var td = document.createElement("td");
    var img = document.createElement("img");
    img.id = id;
    img.src = src;
    img.alt = alt;
    img.title = title;
    td.appendChild(img);
    return td;
}

function montarTd(tipo, id, min, maxlength, placeholder){
    var td = document.createElement("td");
    
    td.appendChild(montaTag(tipo, id, min, maxlength, placeholder));
    return td;
}

function montaTag(tipo, id, min, maxlength, placeholder){
    var input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.min = min;
    input.max = maxlength;
    input.maxLength = maxlength;
    input.placeholder = placeholder;
    return input;
}