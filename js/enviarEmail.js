
// const nodemailer = require("nodemailer");
// let transporter = nodemailer.createTransport({
//   host: "smtp.elasticemail.com",
//   port: 2525,
//   secure: false,
//   auth: {
//     user: "domingos.cavalcante@latam.com",
//     pass: "7E0D337AD758E2DA5B17156EA26188F9B665"
//   }
// });

// function enviarEmail(){
// transporter.sendMail({
//   from: "Domingos Vanjo <domingos.cavalcante@latam.com>",
//   to: "domingosvanjo@gmail.com",
//   subject: "Oi mensagem de teste",
//   text: "Esse é um teste de envio",
//   html: "<!DOCTYPE html><html lang='pt-br'><head><title>Passagem de turno GYNLL</title><meta charset='UTF-8'>        <meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link href='img/malas.png' rel='icon' type='image/x-icon'/></head><body style='font-family: verdana'><header><div style='display: flex; align-items:center; justify-content: space-evenly'><img width='270px' height='60px' src='img/logo.png' alt='Logo da LATAM'><h1 style='color: blueviolet'>Passagem de turno GYNLL</h1></div><table border='0'><tbody><tr style='text-align-last: center'><td><label for='data' id='lblData' >Data</label></td><td><input type='date' id='data' disabled min='2023-01-01' style='border-radius: 4px; padding: 5px; font-family: verdana; border-width: 1px;' value=" + dataA.value + "></input></td><td><label for='turno' id='lblTurno'>Turno</label></td><td><select name='turno' id='turno' disabled style='border-radius: 4px; padding: 5px border-width: 1px;'><option>"+ T + "</option></td><td><input type='text' class='oculto' disabled style='border-radius: 4px; padding: 5px; border: none; width: 162px; background-color: white'> </td><td class='links'><p style='text-align: center' ><a href='https://docs.google.com/spreadsheets/d/19-5MNR8ZN8WDTIKY-DkpnG9eV-ZhGlsRlBASuXOQzKY/edit#gid=2491524'>Verificar as informações do 4DX dos voos </a></p></td><td> | </td><td class='links'><p style='text-align: center'><a href='https://datastudio.google.com/u/0/reporting/1hOK8pAFeOqtK8ECBkcahUjLAJ6QQPkUZ/page/Mv1k'>Painel de bagagens Priority</a></p></td></tr></tbody></table></header><fieldset id='fild1' style='width: 1365px; margin: 0 auto; border-radius: 10px; background-color: white; box-shadow: 2px 2px 8px gray' disabled><table border='0'><tbody><tr style='background-color:cornflowerblue; text-align: center'><td id='ribsTd' colspan='3'><label for='ribs' id='lblRibs' >RIBs abertos no turno</label><br/><label for='dpr'>DPR------</label><label for='ahl'>AHL-----</label><label for='ohd'>OHD</label></td><td id='QdxTd' colspan='3'><label for='Qdx' id='lblVoos' >4DX enviados </br>dos voos</label></td><td id='cttPenTd' colspan='2'><label for='cttPen' id='lblContatos' >Contatos<br/>pendentes</label></td><td id='rushTd'><label for='rush' id='lblRush' >Rush p/ envio</label></td><td id='bagsTd' colspan='2'><label for='bags' id='lblBags' >Bags sobrantes <br />TNs</label></td><td id='bdosTd' colspan='2'><label for='bdos' id='lblBdos' >BDOs para <br />LogsUP</label></td><td id='ahlsTd' colspan='2'><label for='ahls' id='lblAhls'>AHLs outras <br />empresas</label></td><td><label for='qcelular' id='lblQcelular'>Qtd<br />celular<br /> GYNLL</label></td><td><label for='qradios' id='lblQradios' >Qtd<br /> rádios</label></td></tr><tr class='centralizar' style='text-align-last: center'><td><input type='number' class='dpr' id='dpr' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + dprs[0].value +"></input></td><td><input type='number' class='ahlOhd' id='ahl' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ahls[0].value + "></input></td><td><input type='number' class='ahlOhd' id='ohd' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ohds[0].value + "></input></td><td><input type='text' name='Qdx1' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[0].value + "></input></td><td><input type='text' name='Qdx2' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[1].value + "></input></td><td><input type='text' name='Qdx3' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[2].value + "></input></td><td><input type='text' name='cttPen1' id='cttPen' maxlength='10' placeholder='Nenhum' style='border-radius: 4px; padding: 5px; width: 90px;border-width: 1px; ' value=" + cttPens[0].value +"></input></td><td><input type='text' name='cttPen2' id='cttPen' maxlength='10' placeholder='Nenhum' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + cttPens[1].value + "></input></td><td><textarea name='rush' id='rush' style='border-radius: 4px; padding: 5px;' rows='1' cols='20'>" + rushs[0].value + "</textarea></td><td><input type='text' name='bags1' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value=" + bags[0].value + "></input></td><td><input type='text' name='bags2' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value="+ bags[1].value + "></input></td><td><input type='text' name='bdos1' id='bdos' maxlength='10' placeholder='GYNLA12345' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + bdos[0].value + "></input></td><td><input type='text' name='bdos2' id='bdos' maxlength='10' placeholder='GRULA12345' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value="+ bdos[1].value + "></input></td><td><input type='text' name='ahls1' id='ahls' maxlength='10' placeholder='Nenhuma' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + ahlss[0].value + "></input></td><td><input type='text' name='ahls2' id='ahls' maxlength='10' placeholder='Nenhuma' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + ahlss[1].value + "></input></td><td><input type='number' id='qcelular' value=" + qCelular.value + " style='border-radius: 4px; padding: 5px; width: 40px; border-width: 1px;'></input></td><td><input type='number' id='qradios' value="+ qRadios.value + " required style='border-radius: 4px; padding: 5px; border-width: 1px; width: 40px;'></input></td></tr><tr class='centralizar' style='text-align-last: center'><td><input type='number' class='dpr' id='dpr' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + dprs[1].value + "></input></td><td><input type='number' class='ahlOhd' id='ahl' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ahls[1].value +"></input></td><td><input type='number' class='ahlOhd' id='ohd' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ohds[1].value + "></input></td><td><input type='text' name='Qdx4' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[3].value + "></input></td><td><input type='text' name='Qdx5' id='Qdx' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value="+ qdxs[4].value + "></input></td><td><input type='text' name='Qdx6' id='Qdx' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[5].value + "></input></td><td><input type='text' name='cttPen3' id='cttPen' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + cttPens[2].value + "></input></td><td><input type='text' name='cttPen4' id='cttPen' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + cttPens[3].value + "></input></td><td><textarea name='rush' id='rush' style='border-radius: 4px; padding: 5px;' rows='1' cols='20'>" + rushs[1].value + "</textarea></td><td><input type='text' name='bags3' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value=" + bags[2].value + "></input></td><td><input type='text' name='bags4' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value= " + bags[3].value + "></input></td><td><input type='text' name='bdos3' id='bdos' maxlength='10' placeholder='GYNLA12345' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + bdos[2].value + "></input></td><td><input type='text' name='bdos4' id='bdos' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + bdos[3].value + "></input></td><td><input type='text' name='ahls3' id='ahls' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value="+ ahlss[2].value + "></input></td><td><input type='text' name='ahls4' id='ahls' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + ahlss[3].value + "></input></td></tr></tbody></table><table id='tab-pass'><tbody id='body-pass'>" + htmlExt + "</tbody></table></fieldset><fieldset style='width: 1365px; margin: 0 auto; border-radius: 10px; background-color: white; box-shadow: 2px 2px 8px gray' disabled><table border='0'><tr> <td><label for='autCh' id='lblAut' >Autorização pendente da supervisão:</label></td><td><input type='checkbox' name='aut' id='autCh'></input></td><td><textarea name='aut' id='aut' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + aut.value + "</textarea></td></tr><tr><td><label for='faleCh' id='lblFale'>Fale pendente de resposta:</label></td><td><input type='checkbox' name='fale' id='faleCh'></input></td><td><textarea name='fale' id='fale' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + fale.value + "</textarea></td></tr><tr><td><label for='emailCh' id='lblEmail'>E-mails pendentes de respostas:</label></td><td><input type='checkbox' name='email' id='emailCh'></input></td><td><textarea name='email' id='email' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + email.value + "</textarea></td></tr><tr><td><label for='contCh' id='lblCont'>Contestação pendente de resposta:</label></td><td><input type='checkbox' name='cont' id='contCh'></input></td><td><textarea name='cont' id='cont' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + cont.value + "</textarea></td></tr><tr><td><label for='msfCh' id='lblMsf' >MSF enviado hoje?</label></td><td><input type='checkbox' name='msf' id='msfCh'></input></td><td><select name='turnoMsf' id='turnoMsf' disabled='true' style='border-radius: 4px; padding: 5px'><option>" + tM + "</option></td></tr><tr><td><label for='obs' id='lblObs' >Observações:</label></td><td></td><td><textarea name='obs' id='obs' rows='3' cols='162' style='border-radius: 4px; padding: 5px'>" + obs.value + "</textarea></td></tr></table><p style='text-align: center'><div><a href='https://docs.google.com/spreadsheets/d/1mqF0EPZ2XH8X051tS9JsrSTBl92roHcilhzJvsT0LrE/edit?usp=sharing'>Planilha de acompanhamento das carretas de bagagens</a></div></p></fieldset><p></p><p></p><!-- Check-list --><fieldset id='checklist' style='width: 500px; margin: 0 auto; border-radius: 10px; background-color: white; box-shadow: 2px 2px 8px gray' disabled><table border='0'><tr class='rotuloAzul' style='background-color: cornflowerblue; text-align: center'><td><h3 style='text-align: center; color: whitesmoke; width: 465px;'>Check-list do turno</h3></td></tr></table><table border='0'><tr class='rotuloAzul' style='background-color:cornflowerblue; text-align: center'><td><label for='itens' id='itens'><b>Itens verificados</b></label></td><td><label for='qtd' id='qtd0'><b>Qtd</b></label></td><td><label for='qtdCorrig' id='qtdc'><b>Qtd <br/>corrigida</b></label></td></tr><tr><td><label for='qtd' id='qtd00' style='font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent'> AHLs e OHDs abertos hoje:</label></td><td><input type='number' id='qtd' disabled style='border-radius: 4px; padding: 5px;font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent;font-family: verdana; width: 65px;' value=" + qtdCk[0].value + "></input></td><td><input type='number' id='qtdCorrig' disabled style='border-radius: 4px; padding: 5px;border-color: transparent; width: 65px;' value="+ qtdCk[1].value + "></input></td></tr><tr><td><label for='qtd2'>Quantas tiveram comunicação proativa?</label></td><td><input type='number' id='qtd2' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[2].value + "></input></td><td><input type='number' id='qtd2Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[3].value + "></input></td></tr><tr><td><label for='qtd3'>Quantas foram feitas com qualidade?</label></td><td><input type='number' id='qtd3' style='border-radius: 4px; padding: 5px; text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[4].value + "></input></td><td><input type='number' id='qtd3Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[5].value + "></input></td></tr><tr><td><label for='qtd4'>Qtd inserida na planilha de controle de RIBs?</label></td><td><input type='number' id='qtd4' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[6].value + "></input></td><td><input type='number' id='qtd4Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[7].value + "></input></td></tr><tr><td><label for='qtd5' id='qtd00' style='font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent'>DPRs abertas hoje:</label></td><td><input type='number' id='qtd5' disabled style='border-radius: 4px; padding: 5px;font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[8].value + "></input></td><td><input type='number' id='qtdCorrig' disabled style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'></input></td></tr><tr><td><label for='qtd6'>Quantas aceitaram voucher?</label></td><td><input type='number' id='qtd6' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[10].value + "></input></td><td><input type='number' id='qtd6Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[11].value + "></input></td></tr><tr><td><label for='qtd7'>Quantas estão em negociação?</label></td><td><input type='number' id='qtd7' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[12].value + "></input></td><td><input type='number' id='qtd7Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[13].value + "></input></td></tr><tr><td><label for='qtd8'>Quantas derivadas?</label></td><td><input type='number' id='qtd8' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[14].value + "></input></td><td><input type='number' id='qtd8Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[15].value + "></input></td></tr><tr><td><label for='qtd9'>Quantas negadas(resolução 400)?</label></td><td><input type='number' id='qtd9' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px'; value="+ qtdCk[16].value + "></input></td><td><input type='number' id='qtd9Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[17].value + "></input></td></tr><tr><td><label for='qtd10'>QTD inserida na planilha de controle de RIBs:</label></td><td><input type='number' id='qtd10' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[18].value + "></input></td><td><input type='number' id='qtd10Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[19].value + "></input></td></tr><tr><td><label for='qtd11'>CXF lido e feito manutenção hoje?</label></td><td><select id='qtd11' name='qtd11' style='border-color: transparent; font-family: verdana; width: 65px;'><option>" + qtdCk[20].value + "</option></td></tr></table></fieldset></body> </html>"
// }).then(message =>{
//   console.log(message);
// }).catch(err =>{
//   console.log(err);
// })
// }

function sendEmail() {
  Email.send({
    SecureToken : "7dfc5731-1506-4b02-8a6b-a538f5586b70",
    To : "domingosvanjo@gmail.com",
    From : "domingos.cavalcante@latam.com",
    Subject: "Passagem de turno GYNLL " + dataA.value + " " + T + " - teste",
    Body: "<!DOCTYPE html><html lang='pt-br'><head><title>Passagem de turno GYNLL</title><meta charset='UTF-8'>        <meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link href='img/malas.png' rel='icon' type='image/x-icon'/></head><body style='font-family: verdana'><header><div style='display: flex; align-items:center; justify-content: space-evenly'><img width='270px' height='60px' src='img/logo.png' alt='Logo da LATAM'><h1 style='color: blueviolet'>Passagem de turno GYNLL</h1></div><table border='0'><tbody><tr style='text-align-last: center'><td><label for='data' id='lblData' >Data</label></td><td><input type='date' id='data' disabled min='2023-01-01' style='border-radius: 4px; padding: 5px; font-family: verdana; border-width: 1px;' value=" + dataA.value + "></input></td><td><label for='turno' id='lblTurno'>Turno</label></td><td><select name='turno' id='turno' disabled style='border-radius: 4px; padding: 5px border-width: 1px;'><option>"+ T + "</option></td><td><input type='text' class='oculto' disabled style='border-radius: 4px; padding: 5px; border: none; width: 162px; background-color: white'> </td><td class='links'><p style='text-align: center' ><a href='https://docs.google.com/spreadsheets/d/19-5MNR8ZN8WDTIKY-DkpnG9eV-ZhGlsRlBASuXOQzKY/edit#gid=2491524'>Verificar as informações do 4DX dos voos </a></p></td><td> | </td><td class='links'><p style='text-align: center'><a href='https://datastudio.google.com/u/0/reporting/1hOK8pAFeOqtK8ECBkcahUjLAJ6QQPkUZ/page/Mv1k'>Painel de bagagens Priority</a></p></td></tr></tbody></table></header><fieldset id='fild1' style='width: 1365px; margin: 0 auto; border-radius: 10px; background-color: white; box-shadow: 2px 2px 8px gray' disabled><table border='0'><tbody><tr style='background-color:cornflowerblue; text-align: center'><td id='ribsTd' colspan='3'><label for='ribs' id='lblRibs' >RIBs abertos no turno</label><br/><label for='dpr'>DPR------</label><label for='ahl'>AHL-----</label><label for='ohd'>OHD</label></td><td id='QdxTd' colspan='3'><label for='Qdx' id='lblVoos' >4DX enviados </br>dos voos</label></td><td id='cttPenTd' colspan='2'><label for='cttPen' id='lblContatos' >Contatos<br/>pendentes</label></td><td id='rushTd'><label for='rush' id='lblRush' >Rush p/ envio</label></td><td id='bagsTd' colspan='2'><label for='bags' id='lblBags' >Bags sobrantes <br />TNs</label></td><td id='bdosTd' colspan='2'><label for='bdos' id='lblBdos' >BDOs para <br />LogsUP</label></td><td id='ahlsTd' colspan='2'><label for='ahls' id='lblAhls'>AHLs outras <br />empresas</label></td><td><label for='qcelular' id='lblQcelular'>Qtd<br />celular<br /> GYNLL</label></td><td><label for='qradios' id='lblQradios' >Qtd<br /> rádios</label></td></tr><tr class='centralizar' style='text-align-last: center'><td><input type='number' class='dpr' id='dpr' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + dprs[0].value +"></input></td><td><input type='number' class='ahlOhd' id='ahl' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ahls[0].value + "></input></td><td><input type='number' class='ahlOhd' id='ohd' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ohds[0].value + "></input></td><td><input type='text' name='Qdx1' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[0].value + "></input></td><td><input type='text' name='Qdx2' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[1].value + "></input></td><td><input type='text' name='Qdx3' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[2].value + "></input></td><td><input type='text' name='cttPen1' id='cttPen' maxlength='10' placeholder='Nenhum' style='border-radius: 4px; padding: 5px; width: 90px;border-width: 1px; ' value=" + cttPens[0].value +"></input></td><td><input type='text' name='cttPen2' id='cttPen' maxlength='10' placeholder='Nenhum' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + cttPens[1].value + "></input></td><td><textarea name='rush' id='rush' style='border-radius: 4px; padding: 5px;' rows='1' cols='20'>" + rushs[0].value + "</textarea></td><td><input type='text' name='bags1' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value=" + bags[0].value + "></input></td><td><input type='text' name='bags2' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value="+ bags[1].value + "></input></td><td><input type='text' name='bdos1' id='bdos' maxlength='10' placeholder='GYNLA12345' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + bdos[0].value + "></input></td><td><input type='text' name='bdos2' id='bdos' maxlength='10' placeholder='GRULA12345' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value="+ bdos[1].value + "></input></td><td><input type='text' name='ahls1' id='ahls' maxlength='10' placeholder='Nenhuma' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + ahlss[0].value + "></input></td><td><input type='text' name='ahls2' id='ahls' maxlength='10' placeholder='Nenhuma' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + ahlss[1].value + "></input></td><td><input type='number' id='qcelular' value=" + qCelular.value + " style='border-radius: 4px; padding: 5px; width: 40px; border-width: 1px;'></input></td><td><input type='number' id='qradios' value="+ qRadios.value + " required style='border-radius: 4px; padding: 5px; border-width: 1px; width: 40px;'></input></td></tr><tr class='centralizar' style='text-align-last: center'><td><input type='number' class='dpr' id='dpr' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + dprs[1].value + "></input></td><td><input type='number' class='ahlOhd' id='ahl' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ahls[1].value +"></input></td><td><input type='number' class='ahlOhd' id='ohd' min='0' max='50000' style='border-radius: 4px; padding: 5px; width: 60px; border-width: 1px;' value=" + ohds[1].value + "></input></td><td><input type='text' name='Qdx4' id='Qdx' maxlength='4' placeholder='voo' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[3].value + "></input></td><td><input type='text' name='Qdx5' id='Qdx' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value="+ qdxs[4].value + "></input></td><td><input type='text' name='Qdx6' id='Qdx' style='border-radius: 4px; padding: 5px; width: 35px; border-width: 1px;' value=" + qdxs[5].value + "></input></td><td><input type='text' name='cttPen3' id='cttPen' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + cttPens[2].value + "></input></td><td><input type='text' name='cttPen4' id='cttPen' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + cttPens[3].value + "></input></td><td><textarea name='rush' id='rush' style='border-radius: 4px; padding: 5px;' rows='1' cols='20'>" + rushs[1].value + "</textarea></td><td><input type='text' name='bags3' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value=" + bags[2].value + "></input></td><td><input type='text' name='bags4' id='bags' maxlength='8' style='border-radius: 4px; padding: 5px; width: 75px; border-width: 1px;' value= " + bags[3].value + "></input></td><td><input type='text' name='bdos3' id='bdos' maxlength='10' placeholder='GYNLA12345' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + bdos[2].value + "></input></td><td><input type='text' name='bdos4' id='bdos' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + bdos[3].value + "></input></td><td><input type='text' name='ahls3' id='ahls' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value="+ ahlss[2].value + "></input></td><td><input type='text' name='ahls4' id='ahls' style='border-radius: 4px; padding: 5px; width: 90px; border-width: 1px;' value=" + ahlss[3].value + "></input></td></tr></tbody></table><table id='tab-pass'><tbody id='body-pass'>" + htmlExt + "</tbody></table></fieldset><fieldset style='width: 1365px; margin: 0 auto; border-radius: 10px; background-color: white; box-shadow: 2px 2px 8px gray' disabled><table border='0'><tr> <td><label for='autCh' id='lblAut' >Autorização pendente da supervisão:</label></td><td><input type='checkbox' name='aut' id='autCh'></input></td><td><textarea name='aut' id='aut' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + aut.value + "</textarea></td></tr><tr><td><label for='faleCh' id='lblFale'>Fale pendente de resposta:</label></td><td><input type='checkbox' name='fale' id='faleCh'></input></td><td><textarea name='fale' id='fale' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + fale.value + "</textarea></td></tr><tr><td><label for='emailCh' id='lblEmail'>E-mails pendentes de respostas:</label></td><td><input type='checkbox' name='email' id='emailCh'></input></td><td><textarea name='email' id='email' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + email.value + "</textarea></td></tr><tr><td><label for='contCh' id='lblCont'>Contestação pendente de resposta:</label></td><td><input type='checkbox' name='cont' id='contCh'></input></td><td><textarea name='cont' id='cont' rows='1' cols='162' disabled='true' style='border-radius: 4px; padding: 5px'>" + cont.value + "</textarea></td></tr><tr><td><label for='msfCh' id='lblMsf' >MSF enviado hoje?</label></td><td><input type='checkbox' name='msf' id='msfCh'></input></td><td><select name='turnoMsf' id='turnoMsf' disabled='true' style='border-radius: 4px; padding: 5px'><option>" + tM + "</option></td></tr><tr><td><label for='obs' id='lblObs' >Observações:</label></td><td></td><td><textarea name='obs' id='obs' rows='3' cols='162' style='border-radius: 4px; padding: 5px'>" + obs.value + "</textarea></td></tr></table><p style='text-align: center'><div><a href='https://docs.google.com/spreadsheets/d/1mqF0EPZ2XH8X051tS9JsrSTBl92roHcilhzJvsT0LrE/edit?usp=sharing'>Planilha de acompanhamento das carretas de bagagens</a></div></p></fieldset><p></p><p></p><!-- Check-list --><fieldset id='checklist' style='width: 500px; margin: 0 auto; border-radius: 10px; background-color: white; box-shadow: 2px 2px 8px gray' disabled><table border='0'><tr class='rotuloAzul' style='background-color: cornflowerblue; text-align: center'><td><h3 style='text-align: center; color: whitesmoke; width: 465px;'>Check-list do turno</h3></td></tr></table><table border='0'><tr class='rotuloAzul' style='background-color:cornflowerblue; text-align: center'><td><label for='itens' id='itens'><b>Itens verificados</b></label></td><td><label for='qtd' id='qtd0'><b>Qtd</b></label></td><td><label for='qtdCorrig' id='qtdc'><b>Qtd <br/>corrigida</b></label></td></tr><tr><td><label for='qtd' id='qtd00' style='font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent'> AHLs e OHDs abertos hoje:</label></td><td><input type='number' id='qtd' disabled style='border-radius: 4px; padding: 5px;font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent;font-family: verdana; width: 65px;' value=" + qtdCk[0].value + "></input></td><td><input type='number' id='qtdCorrig' disabled style='border-radius: 4px; padding: 5px;border-color: transparent; width: 65px;' value="+ qtdCk[1].value + "></input></td></tr><tr><td><label for='qtd2'>Quantas tiveram comunicação proativa?</label></td><td><input type='number' id='qtd2' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[2].value + "></input></td><td><input type='number' id='qtd2Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[3].value + "></input></td></tr><tr><td><label for='qtd3'>Quantas foram feitas com qualidade?</label></td><td><input type='number' id='qtd3' style='border-radius: 4px; padding: 5px; text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[4].value + "></input></td><td><input type='number' id='qtd3Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[5].value + "></input></td></tr><tr><td><label for='qtd4'>Qtd inserida na planilha de controle de RIBs?</label></td><td><input type='number' id='qtd4' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[6].value + "></input></td><td><input type='number' id='qtd4Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[7].value + "></input></td></tr><tr><td><label for='qtd5' id='qtd00' style='font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent'>DPRs abertas hoje:</label></td><td><input type='number' id='qtd5' disabled style='border-radius: 4px; padding: 5px;font-weight: bold; font-style: italic; font-size: 12pt; text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[8].value + "></input></td><td><input type='number' id='qtdCorrig' disabled style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'></input></td></tr><tr><td><label for='qtd6'>Quantas aceitaram voucher?</label></td><td><input type='number' id='qtd6' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;'value="+ qtdCk[10].value + "></input></td><td><input type='number' id='qtd6Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[11].value + "></input></td></tr><tr><td><label for='qtd7'>Quantas estão em negociação?</label></td><td><input type='number' id='qtd7' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[12].value + "></input></td><td><input type='number' id='qtd7Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[13].value + "></input></td></tr><tr><td><label for='qtd8'>Quantas derivadas?</label></td><td><input type='number' id='qtd8' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[14].value + "></input></td><td><input type='number' id='qtd8Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[15].value + "></input></td></tr><tr><td><label for='qtd9'>Quantas negadas(resolução 400)?</label></td><td><input type='number' id='qtd9' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px'; value="+ qtdCk[16].value + "></input></td><td><input type='number' id='qtd9Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[17].value + "></input></td></tr><tr><td><label for='qtd10'>QTD inserida na planilha de controle de RIBs:</label></td><td><input type='number' id='qtd10' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[18].value + "></input></td><td><input type='number' id='qtd10Corrig' style='border-radius: 4px; padding: 5px;text-align: center; border-color: transparent; font-family: verdana; width: 65px;' value="+ qtdCk[19].value + "></input></td></tr><tr><td><label for='qtd11'>CXF lido e feito manutenção hoje?</label></td><td><select id='qtd11' name='qtd11' style='border-color: transparent; font-family: verdana; width: 65px;'><option>" + qtdCk[20].value + "</option></td></tr></table></fieldset></body> </html>"
   })
   .then(function () {
     alert("Email enviado com sucesso")
     enviar.disabled=false;
     
})
}