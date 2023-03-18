let cpf = document.getElementById("cpf");
let btn = document.getElementById("btn");
let h1 = document.getElementById("h1");

let primeiroDigt, segundoDigt;

function verificar(cpf){
    if(cpf.length === 11){
      return true  
    }else{
        return false
    }
}

function calculoDig1(cpf){

    let m1 = [
        parseInt(cpf[0]) * 10,
        parseInt(cpf[1]) * 9,
        parseInt(cpf[2]) * 8,
        parseInt(cpf[3]) * 7,
        parseInt(cpf[4]) * 6,
        parseInt(cpf[5]) * 5,
        parseInt(cpf[6]) * 4,
        parseInt(cpf[7]) * 3,
        parseInt(cpf[8]) * 2
    ]
    
    let r = 0;
    for( var i = 0; i < m1.length; i++){
        r = r + m1[i]
    }
    
    
    if(r%11 < 2){
        return 0;
    }else{
        let digito1 = (r%11)-11
        return parseInt(Math.abs(digito1))
    }

}

function calculoDig2(cpf, priDig){

    var m2 = [
        parseInt(cpf[0]) * 11,
        parseInt(cpf[1]) * 10,
        parseInt(cpf[2]) * 9,
        parseInt(cpf[3]) * 8,
        parseInt(cpf[4]) * 7,
        parseInt(cpf[5]) * 6,
        parseInt(cpf[6]) * 5,
        parseInt(cpf[7]) * 4,
        parseInt(cpf[8]) * 3,
                  priDig * 2,
    ]
    
    var r = 0;
    for( var i = 0; i < m2.length; i++){
        r = r+m2[i]
    }
    
    
    if(r%11 < 2){
        return 0;
    }else{
        let digito2 = (r%11)-11
        return parseInt(Math.abs(digito2))
    }

}

function verificarCpf(){
    let cpfSplit = cpf.value.split("");
    if(verificar(cpfSplit)){

        primeiroDigt = calculoDig1(cpfSplit)
        segundoDigt  = calculoDig2(cpfSplit,primeiroDigt)

        if(parseInt(cpfSplit[9]) === primeiroDigt && parseInt(cpfSplit[10]) === segundoDigt){
            h1.innerHTML = "CPF Valido"
            h1.style.color = "green";
        }else{
            h1.innerHTML = "CPF invalido"
            h1.style.color = "red";
        }
    }else{
        h1.innerHTML = "CPF invalido"
        h1.style.color = "red";
    }

 
}

