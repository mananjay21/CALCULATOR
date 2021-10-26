// now here we are going to code for connecting different things 

//selects all buttons
const buttons=document.querySelectorAll('button');
//select the <input type="text" class ="display" disabled> element
const display = document.querySelector('.display');

//add eventListener to each button
buttons.forEach(function(button){
    button.addEventListener('click',calculate);
});

//calculate functions 
function calculate(event){
    //current clicked value
    const clickedButtonValue = event.target.value;

    if(clickedButtonValue === '='){
        //check if the display is not empty then only do the claculation 
        if(display.value !== ''){
            //calculate and show the answer to be display
            display.value =eval(display.value);
        }
    }
    else if(clickedButtonValue === 'C'){
        //clear everthing...
        display.value = '';
    }
    else{
        //otherwise concatenate it to the display
        display.value+= clickedButtonValue;
    }
}


