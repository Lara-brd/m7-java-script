//3 elementos principales
const screenOperation = document.getElementById('screen-operation');
const screenResult = document.getElementById('screen-result');
const buttons = document.getElementById('buttons');



//////////////////////////////////
///////////////////////////////////
//custom



const main = document.getElementById('main');
const cold = document.getElementById('cold');
console.log(cold)
const warm = document.getElementById('warm');
const button = document.querySelectorAll('.button');
const btnDifColor = document.querySelectorAll('.dif-color');
const customize = document.getElementById('customize');
console.log(customize)


setTimeout(function(){customize.style.display = 'none'}, 4000);





//btn cold event
cold.addEventListener('click', (e)=> {
  if(main.classList.contains('img-warm')){
    main.classList.remove('img-warm');
    main.classList.add('img-cold');
  }else main.classList.add('img-cold');

  if(document.body.classList.contains('fondo-warm')){
    document.body.classList.remove('fondo-warm');
    document.body.classList.add('fondo-cold');
  }else document.body.classList.add('fondo-cold');


  for(let i =0; i<button.length; i++){
    button[i].classList.add('bg-dark');
  }

  for(let i =0; i<btnDifColor.length; i++){
    btnDifColor[i].style.background = '#51cdd1d0';
  }

  
})

// const pointer = document.querySelectorAll('.pointer');
// for(let i = 0; i<pointer.length; i++){

//   pointer[i].onmouseover = function(){pointer[i].style.background='#94e4b7e3'};
//   pointer[i].onmouseout = function(){pointer[i].style.background='rgba(255, 255, 255, 0.781)'};
// }

warm.addEventListener('click', (e) =>{
  if(main.classList.contains('img-cold')){
    main.classList.remove('img-cold');
    main.classList.add('img-warm');
  }else main.classList.add('img-warm');

  if(document.body.classList.contains('fondo-cold')){
    document.body.classList.remove('fondo-cold');
    document.body.classList.add('fondo-warm');
  }else document.body.classList.add('fondo-warm');

  
  for(let i =0; i<btnDifColor.length; i++){
    btnDifColor[i].style.background = '#eba8a89a';
  }

});





////////////////////////////////
////Functions

//6 nos ayuda a saber si la operación está acabada
let operationComplete = false;

//4 devuelve el ultimo valor de la pantalla operación
const lastValue = () => screenOperation.textContent.substring(screenOperation.textContent.length-1);

const writeOperation = text => {
  //3 que me borre el contenido cuando escribo
  //tb quiero que evalue si empiezo x punto para que no me borre el 0
  if(screenOperation.textContent == '0' && text != '.') screenOperation.textContent = '';

  if(operationComplete && isNaN(text)){
    screenOperation.textContent = screenResult.textContent;
    operationComplete = false;
  }

    //7 si pulsamos numero significa una nueva operación necesiamos otro comprobante
    if(operationComplete && !isNaN(text)){
      screenOperation.textContent = '';
      screenResult.textContent = '0';
      //hemos empezado una operación nueva
      operationComplete = false;

    }
    //buscando si es operador para no introducir más de uno
    if(isNaN(lastValue())&& isNaN(text)){
      //substring desde el operador 0 al último
      screenOperation.textContent = screenOperation.textContent.substring(0, screenOperation.textContent.length-1);
    }else if(screenOperation.textContent.length < 24){
      //else para asegurarnos de que se va a escribir cuando la condición anterior no se cumpla
      screenOperation.textContent += text;
    }
  }

const writeResult = ()=> {

  //cuando lo conviertes a negativo nos elimina el último paréntesis hay que añadir si no es parentesis
  if(isNaN(lastValue()) && lastValue()!== ')') screenOperation.textContent = screenOperation.textContent.substring(0, screenOperation.textContent.length-1);
  //eval funcion que recibe string y si es op matemática la resuelve
  screenResult.textContent = eval(screenOperation.textContent);
  //tenemos resultado cuando damos al = y se convierte en true
  operationComplete = true;

  //para que no se nos desborde el texto
  if(screenResult.textContent.length > 9){
    screenResult.style.fontSize = '2em';
    screenResult.style.marginTop = '1em';
  }
}

const changeSign = () => {
  let lastNumber ='';
  let position = 0;
  //solo tiene que funcionar en el caso de que el último caracter sea un número
  if(!isNaN(lastValue())){
    for(let i = screenOperation.textContent.length-1; i>0; i--){
      //recorro la cadena de atras hacia adelante y buscará un símbolo, necesitamos contar a partir de un símbolo
      if(isNaN(screenOperation.textContent[i])){
        position = i +1; //+1 necesitamos contar después del símbolo
        break; //ya no necesitamos que siga buscando

      }
    }
  }
  lastNumber = screenOperation.textContent.substring(position);
  screenOperation.textContent = screenOperation.textContent.replace(lastNumber,`(${lastNumber*-1})`)
}

const resetScreen = () => {
  screenOperation.textContent = '0';
  screenResult.textContent = '0';
}



////////////////////////////////
////Event

buttons.addEventListener('click', e => {
  //1 primero compruebo si clico en un boton vacio
  if(e.target.textContent !== ''){

    //2 -que ocurrirá en cada caso
    switch(e.target.textContent){
      case '=': writeResult();break;
      case 'C': resetScreen(); break;
      case '+/-': changeSign(); break;
      case ',': writeOperation('.'); break;
      //default seria pasar el target a la función write operation
      default: writeOperation(e.target.textContent); break;
    }

  }
});
