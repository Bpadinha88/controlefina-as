    const expense = document.getElementById('expenses');
function result(){

        const money = document.getElementsByClassName('cash');
    const nmoney = document.getElementById('numbercash');

    const money1 = document.getElementById('cash1').value;
    const money2 = document.getElementById('cash2').value;
    const subtracao = Number(money1)-Number(money2);
    
    const error = document.getElementById('any');

    const valueOption = expense.value;
    const textOption = expense.options[expense.selectedIndex].text;

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
    nmoney.innerHTML = `Com a sua ${textOption.toLowerCase()}, você ficará com ${subtracao}.`
    console.log(subtracao)
    }

}

const others = document.getElementById('other');
let otherscamp = document.getElementById('othercamp');

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


document.getElementById('btn').addEventListener('click', result);
document.getElementById('otherbtn').addEventListener('click', addtext);