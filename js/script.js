//pegando o elemento nome e atribuindo na variavel
const nome = document.getElementById('name');
//pegando o elemento e-mail e atribuindo na variavel
const email = document.getElementById('email');
//pegando o elemento telefone e atribuindo na variavel
const telephone = document.getElementById('telephone');
//pegando o elemento mensagem e atribuindo na variavel
const message = document.getElementById('message');
//pegando o elemento botao de enviar e atribuindo na variavel
const button = document.getElementById('buttonFormulary');

button.addEventListener('click', function(evento) {
  evento.preventDefault();
  if (nome.value === undefined ||
    nome.value === null ||
    nome.value.trim() === "" ||
    nome.value.length<0) {
      nome.focus();
      alert('Preencha o nome corretamente.');
      return false;
  } else if (email.value === undefined ||
    email.value === null ||
    email.value.trim() === "" ||
    email.value.length<0 ||
    email.value.indexOf('@') === -1) {
      email.focus();
      alert('Preencha o e-mail corretamente.')
      return false;
  } else if (telephone.value === undefined ||
    telephone.value === null ||
    telephone.value.trim() === "" ||
    telephone.value.length<11) {
      telephone.focus();
      alert('Preencha o telefone corretamente.')
      return false;
  } else if (message.value === undefined ||
    message.value === null ||
    message.value.trim() === "" ||
    message.value.length<10) {
      message.focus();
      alert('Preencha a mensagem corretamente.')
      return false;
  } else (
    alert('Mensagem enviada com sucesso!')
  )
})