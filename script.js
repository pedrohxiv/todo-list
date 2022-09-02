function criarTarefa() {
  const texto = document.getElementById('texto-tarefa').value;
  document
    .getElementById('lista-tarefas')
    .appendChild(document.createElement('li')).innerText = texto;
  document.getElementById('texto-tarefa').value = '';
}

document.getElementById('criar-tarefa').addEventListener('click', criarTarefa);
