function getPin(){
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0]; //convert to string coz string has length and slice it
    if(pin.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin(){
    const getOutput = document.getElementById('get-output');
    getOutput.value = getPin();
}

// example of event  bubble 
function getDigit(){
    const digitInput = document.getElementById('digit-container');
    digitInput.addEventListener('click', function(event){
        const typedDigit = event.target.innerText;
        if(isNaN(typedDigit)){
            //handle backspace
            //handle clear
        }
        else{

           const typed = document.getElementById('get-input');
           typed.value = typed.value + typedDigit;

        }
    })
}
getDigit();

function submission(){
    const submitBtn = document.getElementById('submit-input');
    submitBtn.addEventListener('click', function(){
        const pinOutput = document.getElementById('get-output').value;
        const digitOutput = document.getElementById('get-input').value;
        if(digitOutput === pinOutput){
            return document.getElementById('success').style.display = 'block';
           
        }
        else{
            return  document.getElementById('failed').style.display = 'block';
        }
    });
}
submission();

