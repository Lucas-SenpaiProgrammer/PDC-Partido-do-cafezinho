(function () {
  'use strict';

  var STORAGE_KEY = 'pdc-membro';
  var form = document.getElementById('f');
  var doc = document.getElementById('doc');
  var clearBtn = document.getElementById('limpar');

  function mostrarCertidao(d, rolar) {
    document.getElementById('dn').textContent = d.nome;
    document.getElementById('dp').textContent = d.cafe;
    document.getElementById('dm').textContent = d.cargo;
    document.getElementById('dnum').textContent = d.num;
    document.getElementById('dd').textContent = d.data;
    doc.classList.remove('hidden');
    if (rolar) doc.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function salvar(d) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); } catch (err) { /* armazenamento indisponível */ }
  }

  function carregar() {
    try {
      var bruto = localStorage.getItem(STORAGE_KEY);
      return bruto ? JSON.parse(bruto) : null;
    } catch (err) {
      return null;
    }
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var agora = new Date();
    var dados = {
      nome: document.getElementById('n').value.trim(),
      cafe: document.getElementById('p').value,
      cargo: document.getElementById('m').value,
      num: 'PDC-' + (1987000 + Math.floor(Math.random() * 9000)) + '/' + agora.getFullYear(),
      data: agora.toLocaleDateString('pt-BR')
    };
    mostrarCertidao(dados, true);
    salvar(dados);
  });

  clearBtn.addEventListener('click', function () {
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignora */ }
    doc.classList.add('hidden');
    form.reset();
  });

  // Ao reabrir a página, a certidão emitida antes volta a aparecer
  var salvo = carregar();
  if (salvo && salvo.nome) mostrarCertidao(salvo, false);
})();
