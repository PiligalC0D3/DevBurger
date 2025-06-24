const btnMostrar = document.querySelector('.container-button button:nth-child(1)');
const btnMapear = document.querySelector('.container-button button:nth-child(2)');
const btnSomar = document.querySelector('.container-button button:nth-child(3)');
const btnFiltrar = document.querySelector('#btn-filter');


btnMostrar.addEventListener('click', mostrarTudo);
btnMapear.addEventListener('click', mapearNomes);
btnSomar.addEventListener('click', somarTudo);
btnFiltrar.addEventListener('click', filtrarVeganos);

const menu = document.querySelector('.menu');


const menuList = document.querySelector('.menu');

function renderMenu(products) {
  menuList.innerHTML = ''; // Limpa o menu

  products.forEach(item => {
    const li = document.createElement('li');

    li.innerHTML = `
      <img src="${item.src}" alt="${item.name}" />
      <p>${item.name}</p>
      <p class="preco">R$ ${item.price},00</p>
    `;

    menuList.appendChild(li);
  });
}





function mostrarTudo() {
  menuOptions.forEach(item => {
    renderMenu(menuOptions);
  });
}

function mapearNomes() {
  const nomes = menuOptions.map(item => item.name);

  menuList.innerHTML = ''; // Limpa a lista

  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.innerHTML = `<p>${nome}</p>`;
    menuList.appendChild(li);
  });
}


function somarTudo() {
  const total = menuOptions.reduce((acc, item) => acc + item.price, 0);

  menuList.innerHTML = `
    <li><p>Total dos produtos: <strong>R$ ${total},00</strong></p></li>
  `;
}


function filtrarVeganos() {
  const veganos = menuOptions.filter(item => item.vegan);
  renderMenu(veganos);
}

document.querySelector('.container-button button:nth-child(1)').addEventListener('click', mostrarTudo);
document.querySelector('.container-button button:nth-child(2)').addEventListener('click', mapearNomes);
document.querySelector('.container-button button:nth-child(3)').addEventListener('click', somarTudo);
document.querySelector('#btn-filter').addEventListener('click', filtrarVeganos);
