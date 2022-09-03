const listaTarefas = document.getElementById('lista-tarefas');

function criarTarefa() {
  const texto = document.getElementById('texto-tarefa').value;
  listaTarefas.appendChild(document.createElement('li')).innerText = texto;
  document.getElementById('texto-tarefa').value = '';
}

function alterarCorLi(event) {
  if (document.querySelector('.selecionado')) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  const eventTarget = event.target;
  eventTarget.classList.toggle('selecionado');
}

function riscarItem(event) {
  const eventTarget = event.target;
  eventTarget.classList.toggle('completed');
}

document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
listaTarefas.addEventListener('click', alterarCorLi);
listaTarefas.addEventListener('dblclick', riscarItem);
