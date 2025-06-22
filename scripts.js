const btnFilter = document.getElementById('btn-filter');
const menuContainer = document.querySelector('.menu');

btnFilter.addEventListener('click', () => {
  // Limpa o conteúdo atual
  menuContainer.innerHTML = '';

  // Filtra apenas os produtos veganos
  const veganos = menuOptions.filter(item => item.vegan);

  // Exibe os produtos veganos
  veganos.forEach(item => {
    menuContainer.innerHTML += `
      <li>
        <img src="${item.src}" alt="${item.name}" />
        <p>${item.name}</p>
        <p class="preco">R$ ${item.price},00</p>
      </li>
    `;
  });
});
