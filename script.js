function criarTarefa() {
  const texto = document.getElementById('texto-tarefa').value;
  document
    .getElementById('lista-tarefas')
    .appendChild(document.createElement('li')).innerText = texto;
  document.getElementById('texto-tarefa').value = '';
}

function alterarCorLi(event) {
  if (document.querySelector('.selecionado')) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  const eventTarget = event.target;
  eventTarget.classList.add('selecionado');
}

document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
document
  .getElementById('lista-tarefas')
  .addEventListener('click', alterarCorLi);
