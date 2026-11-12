/* Utilidades compartilhadas pelas páginas novas. */
(function (w) {
  "use strict";

  /* Monta os flashcards (pergunta clicável → resposta) dentro de #id. */
  w.montarCards = function (id, lista) {
    var alvo = document.getElementById(id);
    if (!alvo) return;
    lista.forEach(function (par) {
      var d = document.createElement("div");
      d.className = "card";
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-expanded", "false");
      b.innerHTML = par[0];
      var a = document.createElement("div");
      a.className = "ans";
      a.innerHTML = par[1];
      b.addEventListener("click", function () {
        var aberto = d.classList.toggle("open");
        b.setAttribute("aria-expanded", aberto ? "true" : "false");
      });
      d.appendChild(b);
      d.appendChild(a);
      alvo.appendChild(d);
    });
  };

  /* Cores do tema atual (para canvas). */
  w.corTema = function (nome) {
    return getComputedStyle(document.documentElement).getPropertyValue(nome).trim();
  };

  w.sorteio = function (n) { return Math.floor(Math.random() * n); };

  w.embaralhar = function (a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  };

  /* Liga o slider ao <output> vizinho. */
  w.ligarSliders = function (raiz) {
    (raiz || document).querySelectorAll(".slider").forEach(function (s) {
      var inp = s.querySelector("input"), out = s.querySelector("output");
      if (!inp || !out) return;
      var fmt = inp.getAttribute("data-fmt");
      function atualiza() {
        var v = parseFloat(inp.value);
        out.textContent = fmt === "pct" ? Math.round(v * 100) + "%" : (fmt === "dec" ? v.toFixed(2) : v);
      }
      inp.addEventListener("input", atualiza);
      atualiza();
    });
  };

  /* Realça no sumário a seção visível. */
  w.sumarioAtivo = function () {
    var links = [].slice.call(document.querySelectorAll("nav.rail a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in w)) return;
    var mapa = {};
    links.forEach(function (a) { mapa[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (ents) {
      ents.forEach(function (e) {
        if (e.isIntersecting && mapa[e.target.id]) {
          links.forEach(function (a) { a.style.color = ""; a.style.borderLeftColor = ""; });
          mapa[e.target.id].style.color = "var(--accent)";
          mapa[e.target.id].style.borderLeftColor = "var(--accent)";
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    Object.keys(mapa).forEach(function (k) {
      var s = document.getElementById(k);
      if (s) io.observe(s);
    });
  };
})(window);
