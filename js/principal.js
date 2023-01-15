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

dataAtual.value = formatDate(data, 'aa-0mm-dd');

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

function adicionarTbody(){

}

function adicionarTr(){
    var linha = montarTr();
    var tabela = document.querySelector("#tab-pass");
    var tbody = document.querySelector("#body-pass");
    tabela.appendChild(tbody);
    tbody.appendChild(linha);
}

function montarTr(){
    var passTr = document.createElement("tr");
    passTr.classList.add("centralizar");

    
    //passTr.appendChild(montaTdInpOcul("text", "oculto", "tru", "Clique duplo para excluir!"));
    
    passTr.appendChild(montarTd("number", "dpr", "dpr", "0","50000", ""));
    passTr.appendChild(montarTd("number", "ahlOhd", "ahl", "0","50000", ""));
    passTr.appendChild(montarTd("number", "ahlOhd", "ohd", "0","50000", ""));
    passTr.appendChild(montarTd("text", "Qdx","Qdx", "0","4", "voo"));
    passTr.appendChild(montarTd("text", "Qdx", "Qdx","0", "4", "voo"));
    passTr.appendChild(montarTd("text", "Qdx", "Qdx","0","4", "voo"));
    passTr.appendChild(montarTd("text", "cttPen","cttPen", "0","10", "Nenhum"));
    passTr.appendChild(montarTd("text", "cttPen", "cttPen","0","10", "Nenhum"));
    passTr.appendChild(montarTd("text", "rush","rush", "0","", "Nenhuma"));
    passTr.appendChild(montarTd("text", "bags", "bags","0","8", ""));
    passTr.appendChild(montarTd("text", "bags", "bags","0","8", ""));
    passTr.appendChild(montarTd("text", "bdos","bdos", "0","10", "GYNLA12345"));
    passTr.appendChild(montarTd("text", "bdos", "bdos","0","10", "GRULA12345"));
    passTr.appendChild(montarTd("text", "ahls", "ahls","0","10", "Nenhuma"));
    passTr.appendChild(montarTd("text", "ahls", "ahls","0","10", "Nenhuma"));
    passTr.appendChild(montarTdImg("sMenos", "sMenos", "img/menos.png", "Sinal de remover", "Remover linha."));
    return passTr;
}
//<td><img class="sMenos" id="sMenos" src="img/menos.png" alt="Sinal de remover" title="Remover linha."></td>

function montarTdImg(classe, id, src, alt, title){
    var td = document.createElement("td");
    var img = document.createElement("img");
    img.classList.add(classe);
    img.id = id;
    img.src = src;
    img.alt = alt;
    img.title = title;
    td.appendChild(img);
    return td;
}

function montarTd(tipo, classe, id, min, maxlength, placeholder){
    var td = document.createElement("td");
    
    td.appendChild(montaTag(tipo, classe, id, min, maxlength, placeholder));
    return td;
}

function montaTag(tipo, classe, id, min, maxlength, placeholder){
    var input = document.createElement("input");
    input.type = tipo;
    input.id = id;
    input.classList.add(classe);
    input.min = min;
    input.max = maxlength;
    input.maxLength = maxlength;
    input.placeholder = placeholder;
    return input;
}

var checkBoxA = document.querySelector("#autCh");
var textAreaA = document.querySelector("#aut");
var checkBoxF = document.querySelector("#faleCh");
var textAreaF = document.querySelector("#fale");
var checkBoxE = document.querySelector("#emailCh");
var textAreaE = document.querySelector("#email");
var checkBoxC = document.querySelector("#contCh");
var textAreaC = document.querySelector("#cont");
var checkBoxM = document.querySelector("#msfCh");
var optM = document.querySelector("#turnoMsf");

checkBoxA.addEventListener("click", function(){
    if(checkBoxA.checked){
        textAreaA.disabled = false;
        textAreaA.placeholder = "Informe o assunto do e-mail aqui";
        textAreaA.requerid = true;
    }else{
        textAreaA.disabled = true;
        textAreaA.placeholder = "";
        textAreaA.value = "";
    }
})

checkBoxF.addEventListener("click", function(){
    if(checkBoxF.checked){
        textAreaF.disabled = false;
        textAreaF.placeholder = "Informe o assunto do e-mail e o número do ticket aqui";
        textAreaF.requerid = true;
    }else{
        textAreaF.disabled = true;
        textAreaF.placeholder = "";
        textAreaF.value = "";
    }
})

checkBoxE.addEventListener("click", function(){
    if(checkBoxE.checked){
        textAreaE.disabled = false;
        textAreaE.placeholder = "Informe o assunto do e-mail e a justificativa da não resposta";
        textAreaE.requerid = true;
    }else{
        textAreaE.disabled = true;
        textAreaE.placeholder = "";
        textAreaE.value = "";
    }
})

checkBoxC.addEventListener("click", function(){
    if(checkBoxC.checked){
        textAreaC.disabled = false;
        textAreaC.placeholder = "Informe o assunto do e-mail e a justificativa da não resposta";
        textAreaC.requerid = true;
    }else{
        textAreaC.disabled = true;
        textAreaC.placeholder = "";
        textAreaC.value = "";
    }
})

checkBoxM.addEventListener("click", function(){
    if(checkBoxM.checked){
        optM.disabled = false;
        optM.value = "M"
        optM.requerid = true;
    }else{
        optM.disabled = true;
        optM.placeholder = "";
        optM.value = "";
    }
})

var dprs;
var ahlsOhds;
var dpr = document.querySelector("#qtd5");
var ahlOhd = document.querySelector("#qtd");
var totDprs = 0;
var totAhlsOhds = 0;

function somaDprs(){
    dprs = document.querySelectorAll(".dpr");
    totDprs = 0;
    
    for(var i = 0; i < dprs.length; i++){
        if(dprs[i].value > 13000 ){
            totDprs ++;
        }
    }
    dpr.value = totDprs;
    
}

function somaAhlsOhds(){
    ahlsOhds = document.querySelectorAll(".ahlOhd");
    totAhlsOhds = 0;

    for(var i = 0; i < ahlsOhds.length; i++){
        if(ahlsOhds[i].value > 13000 ){
            totAhlsOhds ++;
        }
    }
    ahlOhd.value = totAhlsOhds;
}

var fild = document.querySelector("#fild1");

fild.addEventListener('click', function(){
    somaDprs();
    somaAhlsOhds();
});



