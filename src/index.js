const linguagem = document.querySelector("#linguagem_programacao");
const areaDoCodigo = document.querySelector(".editor_codigo");
const backgroundCor = document.querySelector(".editor__codigo");
const descricao = document.querySelector("#descricao_projeto");
const botao = document.querySelector(".botao_highlight");
const btnCorBackground = document.querySelectorAll(".btn_background");

function aplicaHighlight() {
  const codigo = areaDoCodigo.innerText;
  areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"</code>`;
  areaDoCodigo.querySelector("code").textContent = codigo;
  hljs.highlightElement(areaDoCodigo.querySelector("code"));
}

botao.addEventListener("click", () => {
  aplicaHighlight();
});

function mudaCorEditor(cor) {
  switch (cor) {
    case 'azul':
      removeBotaoSelecionado();
      backgroundCor.style.backgroundColor = "#6bd1ff"
      selecionaBotao();
      break;
    case 'verde':
      removeBotaoSelecionado();
      backgroundCor.style.backgroundColor = "#27C93F"
      selecionaBotao();
      break;
    case 'rosa':
      removeBotaoSelecionado();
      backgroundCor.style.backgroundColor = "#FF6BCD"
      selecionaBotao();
      break;
  }
}

function removeBotaoSelecionado() {
  btnCorBackground.forEach(btn => {
    btn.classList.remove('botao_selecionado')
  });
}

function selecionaBotao(){
  btnCorBackground.forEach(btn => {
    btn.addEventListener('click', function(){
      this.classList.add('botao_selecionado');
    })
  })
}