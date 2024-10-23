// Função para modificar o nome do atendente, excluir a div conversation-details-container, e deletar a primeira messages-message
function modificarNomeAtendenteEExcluirDiv(html, novoNome) {
  // Criar um elemento temporário (div) para armazenar o HTML passado
  const div = document.createElement("div");
  div.innerHTML = html; // Definir o conteúdo HTML dentro do elemento div

  // 1. Identificar todos os spans pelo nome da classe 'atendente-nome' dentro da div.agent
  const atendentes = div.querySelectorAll("div.agent div.message-user");

  // Modificar o conteúdo de todos os spans encontrados
  atendentes.forEach(function (atendente) {
    atendente.textContent = novoNome;
  });

  // 2. Identificar e remover a div com a classe 'conversation-details-container'
  const divParaExcluir = div.querySelector(".conversation-details-container");

  if (divParaExcluir) {
    // Remover o elemento da árvore DOM
    divParaExcluir.remove();
  }

  // 3. Identificar e remover a primeira div com a classe 'messages-message'
  const primeiraMessage = div.querySelector(".messages-message");

  if (primeiraMessage) {
    //Remover a primeira div encontrada com a classe 'messages-message'
    primeiraMessage.remove();
  }

  // Retornar o HTML modificado
  return div.innerHTML;
}

// Exemplo de uso:
const codigoHTML = `
    <div class="chat-info">
      <div class="agent">
        <span class="atendente-nome">Atendente 1</span>
      </div>
      <div class="agent">
        <span class="atendente-nome">Atendente 2</span>
      </div>
      <div class="conversation-details-container">
        Detalhes da conversa aqui.
      </div>
    </div>
    <div class="messages-message">
      Primeira mensagem que será removida
    </div>
    <div class="messages-message">
      Segunda mensagem que será mantida
    </div>
    <div class="messages-message">
      Terceira mensagem que será mantida
    </div>
  `;

// Chamar a função e exibir o resultado no console
const novoHTML = modificarNomeAtendenteEExcluirDiv(codigoHTML, "Atendente");
