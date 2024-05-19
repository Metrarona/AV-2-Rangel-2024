const cursos = [
  { nome: "Sistemas de Informação", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { nome: "Ciências contábeis", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { nome: "Nutrição", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { nome: "Farmácia", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { nome: "Enfermagem", descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
];

function preencherTabelaCursos(cursos) {
  const tabelaCursos = document.getElementById('tabelaCursos');
  cursos.forEach(curso => {
      const tr = document.createElement('tr');
      const td = document.createElement('td');
      td.textContent = curso.nome;
      // Adiciona um evento de clique para selecionar o curso
      td.addEventListener('click', () => selecionarCurso(curso));
      tr.appendChild(td);
      tabelaCursos.appendChild(tr);
  });
}

function selecionarCurso(curso) {
  document.getElementById('nomeCursoSelecionado').textContent = curso.nome;
  document.getElementById('descricaoCursoSelecionado').textContent = curso.descricao;
}

document.addEventListener('DOMContentLoaded', function() {
  preencherTabelaCursos(cursos);
});