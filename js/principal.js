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

dataAtual.value = formatDate(data, 'aa-0mm-0dd');

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
    linhas += 1;
    var linha = montarTr();
    var tabela = document.querySelector("#tab-pass");
    tabela.appendChild(linha);
}

function montarTr(){
    var passTr = document.createElement("tr");
    passTr.classList.add("centralizar");

    
    passTr.appendChild(montaTdInpOcul("text", "oculto", "tru", "Clique duplo para excluir!"));
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

function montaTdInpOcul(tipo, classe, disable, placeholder){
    var td = document.createElement("td");
    var input = document.createElement("input");
    input.classList.add(classe);
    input.type = tipo;
    input.disabled = disable;
    input.placeholder = placeholder;
    td.appendChild(input);
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

var checkBoxA = document.querySelector("#autCh");
var textAreaA = document.querySelector("#aut");
var checkBoxF = document.querySelector("#faleCh");
var textAreaF = document.querySelector("#fale");
var checkBoxE = document.querySelector("#emailCh");
var textAreaE = document.querySelector("#email");
var checkBoxC = document.querySelector("#contCh");
var textAreaC = document.querySelector("#cont");
var checkBoxM = document.querySelector("#msfCh");
var optM = document.querySelector("#msf");

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
        optM.requerid = true;
    }else{
        optM.disabled = true;
        optM.placeholder = "";
        optM.value = "";
    }
})
