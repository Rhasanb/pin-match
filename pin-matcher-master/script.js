


let buttons =Array.from( document.getElementsByClassName ('button'));

let pinGenerate = document.getElementById('pin-generate');




    document.getElementById('submit-button').addEventListener('click', function(){
        const displayPinField = document.getElementById('random-number');
        const currentPin = displayPinField.value;

        const display = document.getElementById('display');
        const TypedNumber = display.innerText;
        const inputPin = parseInt(TypedNumber);

        const pinSuccessMessage = document.getElementById('notify-success');
        const pinFailureMessage = document.getElementById('notify-failed');

        if(currentPin === inputPin){
            pinSuccessMessage.style.display = 'none';
            pinFailureMessage.style.display = 'block';
        }
        else{
            pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
        }

    



    
})

pinGenerate.addEventListener("click", function  (){

    
        const Input = document.getElementById('random-number');
        Input.value=Math.floor(1000 + Math.random() * 9000);

    const inputRandom = Input.value;

    
    
    

    
})






buttons.map(button =>{
    button.addEventListener('click', (e)=>{
       switch(e.target.innerText){
        case 'C':
            display.innerText = '';
            break;

            case '←':
               if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
                
               }
               break;

               
                
            


        default:
            display.innerText += e.target.innerText;
       }
    

    });
});




