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

function apagaTudo() {
  const itens = document.querySelectorAll('li');
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].remove();
  }
}

function removerFinalizados() {
  const itens = document.querySelectorAll('.completed');
  for (let i = 0; i < itens.length; i += 1) {
    itens[i].remove();
  }
}

document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
listaTarefas.addEventListener('click', alterarCorLi);
listaTarefas.addEventListener('dblclick', riscarItem);
document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);
document
  .getElementById('remover-finalizados')
  .addEventListener('click', removerFinalizados);
