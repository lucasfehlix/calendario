var data = new Date()
var dia = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'}).substr(0,2) 
var ano = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'}).substr(6,4)
var mesNumeral = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'}).substr(3,2)
var mesDescricao = ['','Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
var mes = mesDescricao[parseInt(mesNumeral)]
var semanaDiaPrimeiro = new Date(`${mesNumeral}/01/${ano}`).getDay()
var diaFuncao = 1

document.getElementById('titulo').innerHTML = `${mes} ${ano}`
var espaco = 0
while ( espaco <= 35 ){
    var isDate = (new Date(`${mesNumeral}/${diaFuncao}/${ano}`)).toLocaleDateString('pt-BR', {timeZone: 'UTC'}).substr(2,1)
    if (espaco < semanaDiaPrimeiro) {
        document.getElementById(`espaco-${espaco}`).innerHTML = ""
        if(dia != diaFuncao) {
            document.getElementById(`espaco-${espaco}`).classList.remove('hoje')
        }
        espaco++
    }else if (isDate === '/') {
        document.getElementById(`espaco-${espaco}`).innerHTML = diaFuncao
        if(dia == diaFuncao){
            document.getElementById(`espaco-${espaco}`).classList.add('hoje')
        }
        diaFuncao++
        espaco++
    } else {
        document.getElementById(`espaco-${espaco}`).innerHTML = ""
        if(dia != diaFuncao){
            document.getElementById(`espaco-${espaco}`).classList.remove('hoje')
        }
        espaco++
    }
 }