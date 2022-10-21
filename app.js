var inputText=document.querySelector('#input-text');
var checkBtn=document.querySelector('#convert-btn');
var outputPra=document.querySelector('#output');



function converttoKm(){
    
    console.log(inputText.value);
    var input=Math.abs(inputText.value);
  
    var result=input/1000;
    console.log(input);
    outputPra.innerText=result;
}

checkBtn.addEventListener('click',converttoKm);