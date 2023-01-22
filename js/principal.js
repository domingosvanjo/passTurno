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

var linhas = 3;
var qdx = 9;
var demais = 6;
var rush = 3;

function montarTr(){
    var passTr = document.createElement("tr");
    passTr.classList.add("centralizar");
    linhas++;
    qdx++;
    demais++;
    rush++;
    
    passTr.appendChild(montarTd("number", "dpr", "dpr" + linhas, "0","50000", ""));
    passTr.appendChild(montarTd("number", "ahl", "ahl" + linhas, "0","50000", ""));
    passTr.appendChild(montarTd("number", "ohd", "ohd" + linhas, "0","50000", ""));
    passTr.appendChild(montarTd("text", "qdx","Qdx" + qdx, "0","4", "voo"));
    qdx++;
    passTr.appendChild(montarTd("text", "qdx", "Qdx" + qdx,"0", "4", "voo"));
    qdx++;
    passTr.appendChild(montarTd("text", "qdx", "Qdx" + qdx,"0","4", "voo"));
    passTr.appendChild(montarTd("text", "cttPen","cttPen" + demais, "0","10", "Nenhum"));
    demais++;
    passTr.appendChild(montarTd("text", "cttPen", "cttPen" + demais,"0","10", "Nenhum"));
    passTr.appendChild(montaTagTexAr("rush","rush" + rush, "1","20", "Nenhuma"));
    demais = demais-1;
    passTr.appendChild(montarTd("text", "bags", "bags" + demais,"0","8", ""));
    demais++;
    passTr.appendChild(montarTd("text", "bags", "bags" + demais,"0","8", ""));
    demais = demais-1;
    passTr.appendChild(montarTd("text", "bdos","bdos" + demais, "0","10", "GYNLA12345"));
    demais++;
    passTr.appendChild(montarTd("text", "bdos", "bdos" + demais,"0","10", "GRULA12345"));
    demais = demais-1;
    passTr.appendChild(montarTd("text", "ahls", "ahls" + demais,"0","10", "Nenhuma"));
    demais++;
    passTr.appendChild(montarTd("text", "ahls", "ahls" + demais,"0","10", "Nenhuma"));
    passTr.appendChild(montarTdImg("sMenos", "sMenos", "img/menos.png", "Sinal de remover", "Remover linha"));
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

function montaTagTexAr(classe, id, rows, cols, placeholder){
    var td = document.createElement("td");
    var input = document.createElement("textarea");
    input.id = id;
    input.classList.add(classe);
    input.rows = rows;
    input.cols = cols;
    input.placeholder = placeholder;
    td.appendChild(input);
    return td;
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
var ahls;
var ohds;
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
    ahls = document.querySelectorAll(".ahl");
    ohds = document.querySelectorAll(".ohd");
    totAhlsOhds = 0;

    for(var i = 0; i < ahls.length; i++){
        if(ahls[i].value > 13000 ){
            totAhlsOhds ++;
        }
    }

    for(var i = 0; i < ohds.length; i++){
        if(ohds[i].value > 13000 ){
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


var enviar = document.querySelector('#enviar');
var dataA = document.querySelector("#data");
var turno = document.querySelector("#turno");
var qdxs = document.querySelectorAll(".qdx");
var cttPens = document.querySelectorAll(".cttPen");
var rushs = document.querySelectorAll(".rush");
var bags = document.querySelectorAll(".bags");
var bdos = document.querySelectorAll(".bdos");
var ahlss = document.querySelectorAll(".ahls");
var T;
var aut = document.querySelector("#aut");
var fale = document.querySelector("#fale");
var email = document.querySelector("#email");
var cont = document.querySelector("#cont");
var turnoMsf = document.querySelector("#turnoMsf");
var tM = "";
var obs = document.querySelector("#obs");
var qRadios = document.querySelector("#qradios");
var qCelular = document.querySelector("#qcelular");
var qtdCk = document.querySelectorAll(".qtdCk");

enviar.addEventListener('click', function(){
    //enviar.disabled=true;
    switch (turno.value){
        case 'M':
            T = 'T2';
            break;
        case 'V':
            T = 'T3';
            break;
        case 'N':
            T = 'T4';
            break;
    }
    switch (turnoMsf.value){
        case 'M':
            tM = 'No turno matutino'
            break;
        case 'V':
            tM = 'No turno vespertino'
            break;
        case 'N':
            tM = 'No turno noturno'
            break;
    }

    dprs = document.querySelectorAll(".dpr");
    ahls = document.querySelectorAll(".ahl");
    ohds = document.querySelectorAll(".ohd");
    sendEmail();
    
})

