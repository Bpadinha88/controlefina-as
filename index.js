document.getElementById('btn').addEventListener('click', result);
document.getElementById('otherbtn').addEventListener('click', addtext);

document.getElementById("arrow").addEventListener("click", function () {
    document.getElementById("expenses").scrollIntoView({ behavior: "smooth" });
  });

let expense = document.getElementById('expenses');
let others = document.getElementById('other');
let otherscamp = document.getElementById('othercamp');
let money = document.getElementsByClassName('cash');
let nmoney = document.getElementById('result');
let error = document.getElementById('any');
function result(){ 
    const valueOption = expense.value;
    const textOption = expense.options[expense.selectedIndex].text;
    const money1 = document.getElementById('cash1').value;
    const money2 = document.getElementById('cash2').value;
    const subtracao = Number(money1)-Number(money2); 

    for(let i = 0; i < money.length; i++ ){
        if(money[i].value.length == 0 || Number(money[i].value) === 0){
             if(i === 0){
                    alert('[ERRO]Voce precisa adicionar um valor ao saldo!');
                    console.log('[ERRO]Voce precisa adicionar um valor ao saldo!');
                    return;
                }else if (i === 1){
                    alert('[ERRO]Voce precisa adicionar um valor a ser gasto!');
                    console.log('[ERRO]Voce precisa adicionar um valor a ser gasto!');
                    return;
            }
        }else{ 
            console.log(`Campo ${i} esta preenchido corretamente!`)
        }        
    }

    if(valueOption === error.value){ 
    alert('[ERRO] Selecione uma opção!')
    console.log('[ERRO] Selecione uma opção!')
    return;
    }else if(valueOption === others.value){
        console.log('[ERRO]Opção "outro" não pode ser selecionada')
    }else{
    console.log(`O gasto escolhido foi ${valueOption}`)
    console.log(subtracao)
    nmoney.innerHTML = `Com a sua ${textOption.toLowerCase()}, você ficará com ${subtracao}.`
    nmoney.style.display = 'block';
    }

}

expense.addEventListener('change', function(){
    if(expense.value === others.value){
            otherscamp.style.display = "block"
        }else {     
            otherscamp.style.display = "none"
        }
});  

function addtext(){
    const otherstext = document.getElementById('othertext');
    const textvalue = otherstext.value
        
    if(textvalue.length == 0){
        alert('[ERRO]Precisa escrever um gasto')
    }else if(Number(textvalue)){
        alert('[ERRO]Não pode escrever numeros')        
    }else{
        let textupper = textvalue.charAt(0).toUpperCase() + textvalue.slice(1);

        let newOption = new Option(textupper, textupper,);
        expense.add(newOption, other); 
    }
}


