function result(){
    const money = document.getElementsByClassName('cash');
    const money1 = document.getElementById('cash1').value;
    const money2 = document.getElementById('cash2').value;
    const subtracao = Number(money1)-Number(money2);
    const nmoney = document.getElementById('numbercash');
    const expense = document.getElementById('expenses');
    const valueoption = expense.value;
    const textoption = expense.options[expense.selectedIndex].text;
    const error = document.getElementById('any')


    for(let i = 0; i < money.length; i++ ){
        if(money[i].value.length == 0 || Number(money[i].value) === 0){
             if(i === 0){
                alert('[ERRO]Voce precisa adicionar um valor ao saldo');
                }else if (i === 1){
                alert('[ERRO]Voce precisa adicionar um valor a ser gasto');
                }
                } else { 
                nmoney.innerHTML = `Voce ficará com ${subtracao}`
                console.log(subtracao)
                }
            }

        if(valueoption == error.value){
            alert('Selecione uma opção')
        }

            
    }
document.getElementById('btn').addEventListener('click', result);