let randomNumber = Math.round(Math.random() * 10);
// Selecionando elementos HTML pelo seletor de Classe
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnTry = document.querySelector('#btnTry');
const btnReset = document.querySelector('#btnReset');
let attemptsCount = 1;


// Eventos
btnTry.addEventListener('click', handleTryClick);
btnReset.addEventListener('click', handleResetClick);
document.addEventListener('keydown', playAgain);


// Funções
// Função Callback -> Uma função como argumento de outra função que mais tarde será executada.


function handleTryClick (event)
{
  event.preventDefault(); // Cancelando a ação do formulário / Padrão
  const inputNumber = document.querySelector('#inputNumber'); // Pegando o elemento HTML
  const numberizedInput = Number(inputNumber.value);

  if (numberizedInput == randomNumber) {
    toggleScreen();
    screen2.querySelector('h2').innerText = `Acertou em ${attemptsCount} tentativas`;
  }
  else if (numberizedInput < 0 || numberizedInput > 10)
  {
    alert('Digite um número entre 0 e 10');
  }
  else {
    alert('Digite um número');
  }


  //Pegando o conteúdo de um Input
  // console.log(inputNumber.value);
  attemptsCount++;
  inputNumber.value = '';
};

function handleResetClick (event) {
  toggleScreen();
  attemptsCount = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen (event)
{
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
};

function playAgain(event) {
  if (event.key == 'Enter' && screen1.classList.contains('hide'))
  {
    handleResetClick();
  }
}