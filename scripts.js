const btnMostrar = document.querySelector('.container-button button:nth-child(1)');
const btnMapear = document.querySelector('.container-button button:nth-child(2)');
const btnSomar = document.querySelector('.container-button button:nth-child(3)');
const btnFiltrar = document.querySelector('#btn-filter');

btnMostrar.addEventListener('click', mostrarTudo);
btnMapear.addEventListener('click', mapearNomes);
btnSomar.addEventListener('click', somarTudo);
btnFiltrar.addEventListener('click', filtrarVeganos);

const menuList = document.querySelector('.menu');

// Lista de produtos do menu//

function renderMenu( productsArray ) {
  menuList.innerHTML = ''; // Limpa o menu

  productsArray.forEach(item => {
    const li = document.createElement('li');

    li.innerHTML = `
      <img src="${item.src}" alt="${item.name}" />
      <p>${item.name}</p>
      <p class="preco">R$ ${item.price},00</p>
    `;

    menuList.appendChild(li);
  });
}

// Função para mostrar o menu completo//

function mostrarTudo() {
  menuList.classList.add('show'); // Adiciona a classe para mostrar o menu
  renderMenu(menuOptions); // Só mostra ao clicar no botão
}

// Função para mapear os nomes e aplicar desconto//
// e atualizar a lista de preços//

function mapearNomes() { 
  const novoPreco = menuOptions.map((product) => ({
    ...product, // Mantém as outras propriedades do produto. Isso é um SPREAD OPERATOR//
    price: product.price * 0.9,
    //name: product.name.toUpperCase(), // Converte o nome para maiúsculas SEM O SPREAD OPERATOR//
    //src: product.src // Mantém a imagem original SEM O SPREAD OPERATOR//
    // Converte o nome para maiúsculas COM O SPREAD OPERATOR//
  }));

  renderMenu(novoPreco);
}

// Função para somar todos os preços e exibir o total//


function somarTudo() {
  const total = menuOptions.reduce((acc, item) => acc + item.price, 0);

  menuList.innerHTML = `
    <li><p>Total dos produtos: <strong>R$ ${total},00</strong></p></li>
  `;
}

// Função para filtrar os produtos veganos e renderizar a lista//
// Exibe apenas os produtos veganos//

function filtrarVeganos() {
  const veganos = menuOptions.filter(item => item.vegan);
  renderMenu(veganos);
}
