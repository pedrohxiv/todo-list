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

function salvarTarefas() {
  const item = document.querySelectorAll('li');
  const itens = [];
  const classe = [];
  for (let i = 0; i < item.length; i += 1) {
    itens.push(item[i].innerText);
    classe.push(item[i].className);
  }
  localStorage.setItem('salvarTarefas', JSON.stringify(itens));
  localStorage.setItem('salvarClasses', JSON.stringify(classe));
}

function carregarTarefas() {
  const itensSalvos = JSON.parse(localStorage.getItem('salvarTarefas'));
  const classesSalvas = JSON.parse(localStorage.getItem('salvarClasses'));
  if (localStorage.getItem('salvarTarefas')) {
    for (let i = 0; i < itensSalvos.length; i += 1) {
      listaTarefas.appendChild(document.createElement('li')).innerText = itensSalvos[i];
      document.querySelectorAll('li')[i].className = classesSalvas[i];
    }
  }
}

carregarTarefas();
document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
listaTarefas.addEventListener('click', alterarCorLi);
listaTarefas.addEventListener('dblclick', riscarItem);
document.getElementById('apaga-tudo').addEventListener('click', apagaTudo);
document
  .getElementById('remover-finalizados')
  .addEventListener('click', removerFinalizados);
document
  .getElementById('salvar-tarefas')
  .addEventListener('click', salvarTarefas);
