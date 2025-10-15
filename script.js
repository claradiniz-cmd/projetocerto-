/* Dados dos cursos (imagens Unsplash públicas) */
const cursosData = [
  {
    id: 'design',
    nome: 'Design Elegante para Web',
    preco: 'R$ 497,00',
    imagem: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=1111',
    descricao: 'Design minimalista, tipografia refinada e UI que transmite valor.',
    professor: 'Mariana Alves — Designer Senior',
    carga: '20 horas (10 módulos)',
    topicos: [
      { titulo: 'Teoria da Cor Clean', descricao: 'Paletas neutras e harmonia tonal.', foto: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800' },
      { titulo: 'Tipografia de Luxo', descricao: 'Combinações de fontes serif e sans.', foto: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800' },
      { titulo: 'Espaço Branco', descricao: 'Uso estratégico do negativo para valor.', foto: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800' }
    ],
    beneficios: ['Certificado digital', 'Acesso vitalício', 'Templates prontos'],
    depoimentos: [
      { nome: 'Ana M.', texto: 'Transformou meu portfólio e minha cobrança.' }
    ]
  },
  {
    id: 'fotografia',
    nome: 'Fotografia Minimalista e de Luxo',
    preco: 'R$ 697,00',
    imagem: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=2222',
    descricao: 'Iluminação, composição e pós-produção para imagem de alto padrão.',
    professor: 'Rafael Coelho — Fotógrafo Profissional',
    carga: '24 horas (12 módulos)',
    topicos: [
      { titulo: 'Iluminação Sofisticada', descricao: 'Softboxes e iluminação contínua.', foto: 'https://images.unsplash.com/photo-1526318472351-c75fcf0708d3?q=80&w=800' },
      { titulo: 'Composição', descricao: 'Regra dos terços e simetria elegante.', foto: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800' }
    ],
    beneficios: ['Presets profissionais', 'Acesso a comunidade', 'Mentoria em grupo'],
    depoimentos: [
      { nome: 'Carlos R.', texto: 'Didática impecável — meu trabalho ficou mais profissional.' }
    ]
  },
  {
    id: 'marketing',
    nome: 'Marketing Digital Sofisticado',
    preco: 'R$ 897,00',
    imagem: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=3333',
    descricao: 'Funis, conteúdo e posicionamento para marcas premium.',
    professor: 'Letícia Moraes — Estrategista',
    carga: '18 horas (9 módulos)',
    topicos: [
      { titulo: 'Conteúdo de Alto Valor', descricao: 'Estrutura de conteúdo que gera autoridade.', foto: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800' },
      { titulo: 'Lançamentos Premium', descricao: 'Modelos que aumentam percepção de valor.', foto: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800' }
    ],
    beneficios: ['Mentoria mensal', 'Planilhas e templates', 'Garantia 7 dias'],
    depoimentos: [
      { nome: 'Beatriz S.', texto: 'Aprendi táticas que realmente convertem.' }
    ]
  },
  {
    id: 'etiqueta',
    nome: 'Etiqueta Digital e Presença Online',
    preco: 'R$ 397,00',
    imagem: 'https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=4444',
    descricao: 'Comunicação, imagem e curadoria para presença elegante.',
    professor: 'Marcos Tavares — Consultor de Imagem',
    carga: '12 horas (6 módulos)',
    topicos: [
      { titulo: 'Imagem Pessoal', descricao: 'Postura e linguagem visual.', foto: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800' },
      { titulo: 'Curadoria de Conteúdo', descricao: 'O que postar e por quê.', foto: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800' }
    ],
    beneficios: ['Checklist pronta', 'Modelos de bio', 'Análise de perfil'],
    depoimentos: [
      { nome: 'Daniela F.', texto: 'Meu perfil passou a atrair clientes melhores.' }
    ]
  },
  {
    id: 'estilo',
    nome: 'Estilo de Vida Premium',
    preco: 'R$ 497,00',
    imagem: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=5555',
    descricao: 'Hábitos, etiqueta e cuidados estéticos para presença refinada.',
    professor: 'Camila Duarte — Coach de Imagem',
    carga: '10 horas (5 módulos)',
    topicos: [
      { titulo: 'Ritual Diário', descricao: 'Rotinas que elevam a presença.', foto: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800' },
      { titulo: 'Etiqueta Social', descricao: 'Dicas para eventos e networking.', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800' }
    ],
    beneficios: ['Guia de hábitos', 'Aulas bônus', 'Comunidade privada'],
    depoimentos: [
      { nome: 'Felipe N.', texto: 'Ferramentas práticas para o dia a dia.' }
    ]
  },
  {
    id: 'branding',
    nome: 'Branding Pessoal e Profissional',
    preco: 'R$ 647,00',
    imagem: 'https://images.unsplash.com/photo-1532634896-26909d0d51f9?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6666',
    descricao: 'Posicionamento, identidade e comunicação estratégica.',
    professor: 'Rosa Almeida — Brand Strategist',
    carga: '16 horas (8 módulos)',
    topicos: [
      { titulo: 'Posicionamento', descricao: 'Como se destacar no seu mercado.', foto: 'https://images.unsplash.com/photo-1520975912726-8f9b3ccf9546?q=80&w=800' },
      { titulo: 'Identidade Visual', descricao: 'Construção de presença consistente.', foto: 'https://images.unsplash.com/photo-1509099836639-18ba5f2a6c5d?q=80&w=800' }
    ],
    beneficios: ['Modelos de identidade', 'Sessão de avaliação', 'Templates'],
    depoimentos: [
      { nome: 'Mariana P.', texto: 'Minha marca ficou mais coerente e desejada.' }
    ]
  }
];

/* ---------- HOME: destaque ---------- */
function renderDestaque(){
  const cont = document.getElementById('destaque-list');
  if(!cont) return;
  const destaque = cursosData.slice(0,4);
  cont.innerHTML = destaque.map(c => `
    <article class="card-destaque">
      <img src="${c.imagem}" alt="${c.nome}">
      <div class="card-body">
        <h4>${c.nome}</h4>
        <p>${c.descricao}</p>
        <div class="card-actions">
          <a class="btn outline" href="curso.html?id=${c.id}">Ver curso</a>
          <a class="btn primary" href="curso.html?id=${c.id}">Inscrever-se</a>
        </div>
      </div>
    </article>
  `).join('');
  renderDepoimentos();
}

/* ---------- HOME: depoimentos ---------- */
function renderDepoimentos(){
  const wrap = document.getElementById('depoimentos-list');
  if(!wrap) return;
  // Pega um depoimento por curso (se tiver)
  const depo = cursosData.map(c => c.depoimentos[0]).slice(0,4);
  wrap.innerHTML = depo.map(d => `
    <div class="depo">
      <p>"${d.texto}"</p>
      <footer style="margin-top:10px;font-weight:700;color:#333">— ${d.nome}</footer>
    </div>
  `).join('');
}

/* ---------- CURSOS: grid ---------- */
function renderCursosGrid(){
  const grid = document.getElementById('grid-cursos');
  if(!grid) return;
  grid.innerHTML = cursosData.map(c => `
    <article class="curso-card" id="${c.id}">
      <div class="curso-media"><img src="${c.imagem}" alt="${c.nome}"></div>
      <div class="curso-content">
        <h3>${c.nome}</h3>
        <p class="meta">${c.descricao}</p>
        <div class="curso-meta">
          <strong>${c.preco}</strong>
          <div>
            <a class="btn outline" href="curso.html?id=${c.id}">Ver Detalhes</a>
            <a class="btn primary" href="curso.html?id=${c.id}">Inscrever-se</a>
          </div>
        </div>
      </div>
    </article>
  `).join('');
}

/* ---------- BUSCA em tempo real ---------- */
function setupBusca(){
  const input = document.getElementById('busca-curso');
  const btnLimpar = document.getElementById('limpar-busca');
  if(!input) return;
  input.addEventListener('input', ()=> {
    const q = input.value.trim().toLowerCase();
    const filtrado = cursosData.filter(c => (c.nome + ' ' + c.descricao + ' ' + c.professor).toLowerCase().includes(q));
    const grid = document.getElementById('grid-cursos');
    grid.innerHTML = filtrado.map(c => `
      <article class="curso-card" id="${c.id}">
        <div class="curso-media"><img src="${c.imagem}" alt="${c.nome}"></div>
        <div class="curso-content">
          <h3>${c.nome}</h3>
          <p class="meta">${c.descricao}</p>
          <div class="curso-meta">
            <strong>${c.preco}</strong>
            <div>
              <a class="btn outline" href="curso.html?id=${c.id}">Ver Detalhes</a>
              <a class="btn primary" href="curso.html?id=${c.id}">Inscrever-se</a>
            </div>
          </div>
        </div>
      </article>
    `).join('');
  });
  btnLimpar && btnLimpar.addEventListener('click', ()=> { input.value=''; input.dispatchEvent(new Event('input')); });
}

/* ---------- ABRE detalhes inline (cursos.html hash) ---------- */
function openDetailsFromHash(){
  const id = window.location.hash.replace('#','');
  if(!id) return;
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({behavior:'smooth', block:'center'});
}

/* ---------- PÁGINA DE DETALHE (curso.html) ---------- */
function renderCourseDetailsPage(){
  const root = document.getElementById('curso-detalhe-root');
  if(!root) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const curso = cursosData.find(c => c.id === id);
  if(!curso){
    root.innerHTML = '<p>Curso não encontrado. <a href="cursos.html">Voltar aos cursos</a></p>';
    return;
  }

  const topicosHTML = curso.topicos.map(t => `
    <div class="topico-aprendizado">
      <img src="${t.foto}" alt="${t.titulo}">
      <div>
        <h4>${t.titulo}</h4>
        <p class="muted">${t.descricao}</p>
      </div>
    </div>
  `).join('');

  const beneficiosHTML = curso.beneficios.map(b => `<li>${b}</li>`).join('');
  const depoimentosHTML = curso.depoimentos.map(d => `<div class="depo"><p>"${d.texto}"</p><footer style="margin-top:8px;font-weight:700">— ${d.nome}</footer></div>`).join('');

  root.innerHTML = `
    <article class="detalhes-panel">
      <div style="margin-bottom:12px"><a class="btn outline" href="cursos.html">← Voltar</a></div>
      <div class="detalhes-main">
        <div class="banner-detalhe">
          <img src="${curso.imagem}" alt="${curso.nome}">
          <div style="margin-top:12px">
            <div class="form">
              <h4>Inscreva-se no curso</h4>
              <p style="margin:6px 0;color:var(--muted)"><strong>${curso.preco}</strong></p>
              <form id="form-inscricao-curso">
                <label>Nome completo</label>
                <input name="nome" required>
                <label>E-mail</label>
                <input type="email" name="email" required>
                <input type="hidden" name="curso" value="${curso.nome}">
                <button class="btn primary" type="submit" style="margin-top:12px">Simular inscrição</button>
              </form>
              <p style="margin-top:8px;color:var(--muted);font-size:.95rem">*Inscrição simulada — em ambiente real, integraríamos um gateway de pagamento.</p>
            </div>
          </div>
        </div>

        <div>
          <h2>${curso.nome}</h2>
          <p class="muted">${curso.descricao}</p>
          <p style="margin-top:6px"><strong>Professor:</strong> ${curso.professor} • <strong>Carga:</strong> ${curso.carga}</p>

          <section style="margin-top:18px">
            <h3>O que você vai aprender</h3>
            ${topicosHTML}
          </section>

          <section style="margin-top:18px">
            <h3>O que está incluso</h3>
            <ul class="beneficios-lista">
              ${beneficiosHTML}
            </ul>
          </section>

          <section style="margin-top:18px">
            <h3>Depoimentos</h3>
            <div>${depoimentosHTML}</div>
          </section>
        </div>
      </div>
    </article>
  `;

  // submit do form (simulação)
  const f = document.getElementById('form-inscricao-curso');
  f && f.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = f.nome.value.trim();
    const email = f.email.value.trim();
    alert(`Inscrição SIMULADA realizada!\nCurso: ${curso.nome}\nNome: ${nome}\nE-mail: ${email}\n\n(Em uma versão real, aqui seria o checkout.)`);
    f.reset();
  });
}

/* ---------- Inicialização global ---------- */
window.addEventListener('DOMContentLoaded', () => {
  // render grid se existir
  renderCursosGrid();
  setupBusca();
  // Se estivermos na página curso.html, tenta renderizar (a função é chamada no próprio curso.html)
});
