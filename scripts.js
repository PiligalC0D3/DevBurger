const btnMostrar = document.querySelector('.container-button button:nth-child(1)');
const btnMapear = document.querySelector('.container-button button:nth-child(2)');
const btnSomar = document.querySelector('.container-button button:nth-child(3)');
const btnFiltrar = document.querySelector('#btn-filter');

btnMostrar.addEventListener('click', mostrarTudo);
btnMapear.addEventListener('click', mapearNomes);
btnSomar.addEventListener('click', somarTudo);
btnFiltrar.addEventListener('click', filtrarVeganos);

const menu = document.querySelector('.menu');




function mostrarTudo() {
  menuOptions.forEach(item => {
    console.log(`${item.name} - R$ ${item.price}`);
  });
}

function mapearNomes() {
  const nomes = menuOptions.map(item => item.name);
  console.log(nomes);
}

function somarTudo() {
  const total = menuOptions.reduce((acc, item) => acc + item.price, 0);
  console.log(`Total: R$ ${total}`);
}

btnFiltrar.addEventListener('click', filtrarVeganos);
function filtrarVeganos() {
  const veganos = menuOptions.filter(item => item.vegan);
  console.log(veganos);
}
