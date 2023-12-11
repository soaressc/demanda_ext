// Logo na guia do site
var link = document.querySelector("link[rel~='icon']");
link.href = "images/logoNexten.png";

window.addEventListener('scroll', function() {
  var menu = document.querySelector('.menu');

  if (window.pageYOffset > 0) {
    menu.style.display = 'flex';
  } else {
    menu.style.display = 'none';
  }
});

// Evita que o form atualize a página.
function coletaDados(event) {
  event.preventDefault();
  const formulario = event.target;
};

// carrossel 

// Adiciona a classe "active" ao primeiro item
document.querySelector('.carrossel-item').classList.add('active');

// Detecta quando o scroll para no carrossel e atualiza a classe "active" do item visível
document.querySelector('.carrossel-container').addEventListener('scroll', function() {
  const items = document.querySelectorAll('.carrossel-item');
  const carrossel = document.querySelector('.carrossel-container');

  items.forEach(function(item) {
    const rect = item.getBoundingClientRect();
    if (rect.left >= 0 && rect.right <= carrossel.offsetWidth) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
});

// Mensagens do Forms
function coletaDados() {
  // Exibir a mensagem "Enviando..."
  document.getElementById("mensagem").innerHTML = "Enviando...";

  // Envio do formulário
  setTimeout(function() {
    // Exibir a mensagem "Mensagem Enviada" após 2 segundos 
    document.getElementById("mensagem").innerHTML = "Mensagem Enviada!";
  }, 2000);
}


window.onload = init;