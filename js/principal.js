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

function adicionarTr(){
    acrescentar();
    var linha = montarTr();
    var tabela = document.querySelector("#tab-pass");
    var tbody = document.querySelector("#body-pass");
    tabela.appendChild(tbody);
    tbody.appendChild(linha);
    part1.push(p1);
    part2.push(p2);
    part3.push(p3);
    part4.push(p4);
    part5.push(p5);
    part6.push(p6);
    part7.push(p7);
    part8.push(p8);
    part9.push(p9);
    part10.push(p10);
    part11.push(p11);
    part12.push(p12);
    part13.push(p13);
    part14.push(p14);
    part15.push(p15);
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
    if (chDpr.checked && classe=="dpr"){
        d++;
        input.value = d;
    }
    if (chAhl.checked && classe=="ahl"){
        a++;
        input.value = a;
    }
    if (chOhd.checked && classe=="ohd"){
        o++;
        input.value = o;
    }
    
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
        textAreaA.classList.remove('erro');
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
        textAreaF.classList.remove('erro');
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
        textAreaE.classList.remove('erro');
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
        textAreaC.classList.remove('erro');
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
        optM.classList.remove('erro');
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
var qdxs;
var cttPens;
var rushs;
var bags;
var bdos;
var ahlss;
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
var p1 = "<tr class='centralizar' style='text-align-last: center'><td><input type='number' class='dpr' id='dpr' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=";
var p2 = "></input></td><td><input type='number' class='ahlOhd' id='ahl' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=";
var p3 = "></input></td><td><input type='number' class='ahlOhd' id='ohd' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=";
var p4 = "></input></td><td><input type='text' name='Qdx4' id='Qdx' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=";
var p5 = "></input></td><td><input type='text' name='Qdx5' id='Qdx' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=";
var p6 = "></input></td><td><input type='text' name='Qdx6' id='Qdx'  style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=";
var p7 = "></input></td><td><input type='text' name='cttPen3' id='cttPen' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=";
var p8 = "></input></td><td><input type='text' name='cttPen4' id='cttPen' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=";
var p9 = "></input></td><td><textarea name='rush' id='rush' style='border-radius: 4px; padding: 5px' rows='1' cols='20'>";
var p10 = "</textarea></td><td><input type='text' name='bags3' id='bags' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value=";
var p11 = "></input></td><td><input type='text' name='bags4' id='bags' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value=";
var p12 = "></input></td><td><input type='text' name='bdos3' id='bdos' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=";
var p13 = "></input></td><td><input type='text' name='bdos4' id='bdos' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=";
var p14 = "></input></td><td><input type='text' name='ahls3' id='ahls' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=";
var p15 = "></input></td><td><input type='text' name='ahls4' id='ahls' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=";
var part1 = [p1];
var part2 = [p2];
var part3 = [p3];
var part4 = [p4];
var part5 = [p5];
var part6 = [p6];
var part7 = [p7];
var part8 = [p8];
var part9 = [p9];
var part10 = [p10];
var part11 = [p11];
var part12 = [p12];
var part13 = [p13];
var part14 = [p14];
var part15 = [p15];
var htmlExt = "";


qtdCk[6].addEventListener('blur', function(){
    qtdCk[7].value = (qtdCk[0].value)-(qtdCk[6].value);
})

qtdCk[18].addEventListener('blur', function(){
    qtdCk[19].value = (qtdCk[8].value)-(qtdCk[18].value);
})

enviar.addEventListener('click', function(){
    enviar.disabled=true;
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
    qdxs = document.querySelectorAll(".qdx");
    cttPens = document.querySelectorAll(".cttPen");
    rushs = document.querySelectorAll(".rush");
    bags = document.querySelectorAll(".bags");
    bdos = document.querySelectorAll(".bdos");
    ahlss = document.querySelectorAll(".ahls");
    linExtras();
    if (validate()){
        sendEmail();
    }else{
        enviar.disabled=false;
    }
})

function linExtras(){

    for(var i = 2; i < dprs.length; i++){
        if (part1.length > 0){
            if (i == 2){
                htmlExt = (part1[i-2] + dprs[i].value + part2[i-2] + ahls[i].value + part3[i-2] + ohds[i].value + part4[i-2] + qdxs[i+4].value + part5[i-2] + qdxs[i+5].value + part6[i-2] + qdxs[i+6].value + part7[i-2] + cttPens[i+2].value + part8[i-2] + cttPens[i+3].value + part9[i-2] + rushs[i].value + part10[i-2] + bags[i+2].value + part11[i-2] + bags[i+3].value + part12[i-2] + bdos[i+2].value + part13[i-2] + bdos[i+3].value + part14[i-2] + ahlss[i+2].value + part15[i-2] + ahlss[i+3].value + "></input></td></tr>");
            }else if(i > 2){
                htmlExt = htmlExt + (part1[i-2] + dprs[i].value + part2[i-2] + ahls[i].value + part3[i-2] + ohds[i].value + part4[i-2] + qdxs[i*3].value + part5[i-2] + qdxs[(i*3)+1].value + part6[i-2] + qdxs[(i*3)+2].value + part7[i-2] + cttPens[i*2].value + part8[i-2] + cttPens[(i*2)+1].value + part9[i-2] + rushs[i].value + part10[i-2] + bags[i*2].value + part11[i-2] + bags[(i*2)+1].value + part12[i-2] + bdos[i*2].value + part13[i-2] + bdos[(i*2)+1].value + part14[i-2] + ahlss[i*2].value + part15[i-2] + ahlss[(i*2)+1].value + "></input></td></tr>");
            }
           //alert(part1.length);
        }
    }
    return htmlExt;
}

var d = 0;
var a = 0;
var o = 0;
var chDpr = document.querySelector("#chDpr");
var chAhl = document.querySelector("#chAhl");
var chOhd = document.querySelector("#chOhd");

function acrescentar(){
    dprs = document.querySelectorAll(".dpr");
    ahls = document.querySelectorAll(".ahl");
    ohds = document.querySelectorAll(".ohd");
    
    if (chDpr.checked){
        d = 0;
        for(var i = 0; i < dprs.length; i++){
            if(dprs[i].value > 0 ){
                if(dprs[i].value > d){
                    d = dprs[i].value;
                }
            }
        }
    }

    if (chAhl.checked){
        a = 0;
        for(var i = 0; i < dprs.length; i++){
            if(ahls[i].value > 0 ){
                if(ahls[i].value > a){
                    a = ahls[i].value;
                }
            }
        }
    }

    if (chOhd.checked){
        o = 0;
        for(var i = 0; i < dprs.length; i++){
            if(ohds[i].value > 0 ){
                if(ohds[i].value > o){
                    o = ohds[i].value;
                }
            }
        }
    }
}