// Selecione o botão animado
const animatedButton = document.querySelector('.animated-button');

// Adicione um ouvinte de evento para rastrear quando o mouse entra no botão
animatedButton.addEventListener('mouseenter', () => {
  // Quando o mouse entra, aplique um estilo de destaque ao botão
  animatedButton.style.backgroundColor = '#23238E'; // Altere a cor de fundo
  animatedButton.style.transform = 'translateY(-10px)'; // Mova o botão para cima
});

// Adicione um ouvinte de evento para rastrear quando o mouse sai do botão
animatedButton.addEventListener('mouseleave', () => {
  // Quando o mouse sai, restaure o estilo original do botão
  animatedButton.style.backgroundColor = '#23238E'; // Cor original de fundo
  animatedButton.style.transform = 'translateY(0)'; // Volte à posição original
});


