const display1El = document.querySelector('.display1');
const display2El = document.querySelector('.display2');
const display3El = document.querySelector('.display3');
const figuresEl = document.querySelectorAll('.fig');
const operatorEl = document.querySelectorAll('.operator');
const equalEl = document.querySelector('.equalSign');
const clearAllEl = document.querySelector('.clearAll');
const clearLastEl = document.querySelector('.clearLastInput');
const dot = document.querySelector('.dot')

let dis1Fig = '';
let dis2Fig = '';
let dis3Fig = null;
let lastOperation = '';
let showDot = false;

figuresEl.forEach(fig => {
    fig.addEventListener('click', (e)=> {
    dis2Fig += e.target.innerText;
    display2El.innerText = dis2Fig;
  })
});


dot.addEventListener('click', (e)=> {
    if(e.target.innerText === '.' && !showDot){
    showDot = true;
    dis2Fig += e.target.innerText;
    display2El.innerText = dis2Fig;
  } else if(e.target.innerText === '.' && showDot){
    return;
  }
})

operatorEl.forEach(operator => {
  operator.addEventListener('click', (e)=> {
    if(!dis2Fig) dis3Fig;
    showDot = false;
    const operationName = e.target.innerText;
    if(dis1Fig && dis2Fig && lastOperation){
      mathOperation();
    } else {
      dis3Fig = parseFloat(dis2Fig);
    }
    clearVar(operationName);
    lastOperation = operationName;
  })
});

function clearVar (name = ''){
  dis1Fig += dis2Fig+ ' ' + name + ' ';
  display1El.innerText = dis1Fig;
  display2El.innerText = '';
  dis2Fig = '';
  display3El.innerText = dis3Fig;
}

function mathOperation(){
  if(lastOperation === 'x'){
    dis3Fig = parseFloat(dis3Fig) * parseFloat(dis2Fig);
  } else if (lastOperation === '+'){
    dis3Fig = parseFloat(dis3Fig) + parseFloat(dis2Fig);
  } else if (lastOperation === '-'){
    dis3Fig = parseFloat(dis3Fig) - parseFloat(dis2Fig);
  } else if (lastOperation === '/'){
    dis3Fig = parseFloat(dis3Fig) / parseFloat(dis2Fig);
  } else if (lastOperation === '%'){
    dis3Fig = parseFloat(dis3Fig) % parseFloat(dis2Fig);
  }
}

equalEl.addEventListener('click', (e)=>{
  if (!dis1Fig || !dis2Fig) return;
  showDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = dis3Fig;
  display3El.innerText = '';
  dis2Fig = dis3Fig;
  dis1Fig = '';
});

clearAllEl.addEventListener('click', (e)=> {
  display1El.innerText = '0';
  display2El.innerText = '0';
  dis1Fig = '0';
  dis2Fig = '0';
  dis3Fig.innerText = '0';
});

clearLastEl.addEventListener('click', (e)=>{
  display2El.innerText = '';
  dis2Fig = '';
});

