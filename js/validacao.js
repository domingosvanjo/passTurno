function validate(){
    var valPass = true;

    if(dataA.value ==""){
        valPass = false;
        dataA.classList.add('erro');
        alert('Data inválida!');
        return valPass;
    }else{
        dataA.classList.remove('erro');
    }

    qdxs = document.querySelectorAll(".qdx");
    var q = 0;
    for(var i = 0; i < qdxs.length; i++){
        if(qdxs[i].value > 0){
            q = q + qdxs[i].value;
        }
    }
    if (q <=0){
        valPass = false;
        alert('É preciso indicar ao menos um voo atendido!' );
        for(var i = 0; i < qdxs.length; i++){
            qdxs[i].classList.add('erro');
        }
        return valPass;
    }else{
        for(var i = 0; i < qdxs.length; i++){
            qdxs[i].classList.remove('erro');
        }
    }

    if(checkBoxA.checked){
        if (textAreaA.value == ''){
            valPass = false;
            alert('É preciso preencher o campo em vermelho!')
            textAreaA.classList.add('erro');
            return valPass;
        }else{
            textAreaA.classList.remove('erro');
            valPass = true;
        }
    }

    if(checkBoxF.checked){
        if (textAreaF.value == ''){
            valPass = false;
            alert('É preciso preencher o campo em vermelho!')
            textAreaF.classList.add('erro');
            return valPass;
        }else{
            textAreaF.classList.remove('erro');
            valPass = true;
        }
    }

    if(checkBoxE.checked){
        if (textAreaE.value == ''){
            valPass = false;
            alert('É preciso preencher o campo em vermelho!')
            textAreaE.classList.add('erro');
            return valPass;
        }else{
            textAreaE.classList.remove('erro');
            valPass = true;
        }
    }

    if(checkBoxC.checked){
        if (textAreaC.value == ''){
            valPass = false;
            alert('É preciso preencher o campo em vermelho!')
            textAreaC.classList.add('erro');
            return valPass;
        }else{
            textAreaC.classList.remove('erro');
            valPass = true;
        }
    }

    if(checkBoxM.checked){
        if (optM.value == ''){
            valPass = false;
            alert('É preciso preencher o campo em vermelho!');
            optM.classList.add('erro');
            return valPass;
        }else{
            optM.classList.remove('erro');
            valPass = true;
        }
    }

    if (totAhlsOhds > 0){
        if (qtdCk[6].value == 0){
            valPass=false;
            alert('Informe quantas AHLs foram inseridas no controle de RIBs!');
            qtdCk[6].classList.add('erro');
            return valPass;
        }else{
            qtdCk[6].classList.remove('erro'); 
        }
    }

    if (totDprs > 0){
        if (qtdCk[18].value == 0){
            valPass = false;
            alert('Informe quantas DPRs foram inseridas no controle de RIBs!');
            qtdCk[18].classList.add('erro');
            return valPass;
        }else{
            qtdCk[18].classList.remove('erro'); 
        }
        if ((qtdCk[10].value)+(qtdCk[12].value)+(qtdCk[14].value) != qtdCk[8].value){
            valPass = false;
            qtdCk[10].classList.add('erro');
            qtdCk[12].classList.add('erro');
            qtdCk[14].classList.add('erro');
            alert('A soma dos três campos em vermelho não pode ser diferente da quantidade de DPRs abertas no turno!');
            return valPass;
        }else{
            qtdCk[10].classList.remove('erro');
            qtdCk[12].classList.remove('erro');
            qtdCk[14].classList.remove('erro');
        }

    }
    return valPass;
}