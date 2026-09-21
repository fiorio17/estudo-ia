/* Alterna claro/escuro e lembra a escolha.
   Sem escolha salva, as páginas seguem o tema do sistema pelo
   prefers-color-scheme, que já está no CSS de cada uma. */
(function () {
  "use strict";

  var CHAVE = "estudo-ia-tema";
  var raiz = document.documentElement;

  var salvo = null;
  try { salvo = localStorage.getItem(CHAVE); } catch (e) { /* modo privado */ }
  if (salvo === "dark" || salvo === "light") raiz.setAttribute("data-theme", salvo);

  function prefereEscuro() {
    return typeof window.matchMedia === "function" &&
           window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function atual() {
    var marcado = raiz.getAttribute("data-theme");
    if (marcado) return marcado;
    return prefereEscuro() ? "dark" : "light";
  }

  var botao = document.createElement("button");
  botao.type = "button";
  botao.id = "alternar-tema";
  botao.setAttribute("aria-label", "Alternar entre tema claro e escuro");

  function pintar() {
    var modo = atual();
    botao.textContent = modo === "dark" ? "☀" : "☾";
    botao.title = modo === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro";
  }

  botao.addEventListener("click", function () {
    var novo = atual() === "dark" ? "light" : "dark";
    raiz.setAttribute("data-theme", novo);
    try { localStorage.setItem(CHAVE, novo); } catch (e) { /* ignora */ }
    pintar();
  });

  var estilo = document.createElement("style");
  estilo.textContent =
    "#alternar-tema{position:fixed;top:12px;right:12px;z-index:60;" +
    "width:36px;height:36px;border-radius:50%;cursor:pointer;" +
    "background:var(--surface,#fff);color:var(--ink,#000);" +
    "border:1px solid var(--line,#ccc);font-size:15px;line-height:1;" +
    "box-shadow:0 2px 8px -2px rgba(0,0,0,.25);}" +
    "#alternar-tema:hover{border-color:var(--accent,#8A2D6E);color:var(--accent,#8A2D6E);}" +
    "#alternar-tema:focus-visible{outline:2px solid var(--accent,#8A2D6E);outline-offset:2px;}" +
    "@media print{#alternar-tema{display:none;}}";

  document.head.appendChild(estilo);
  document.body.appendChild(botao);
  pintar();
})();
