// index.js
const Aluno = require('./models/Aluno');
const Turma = require('./models/Turma');
const TurmaPresencial = require('./models/TurmaPresencial');

const aluno1 = new Aluno('João', 'joao123', '12345');
const turma1 = new Turma('T1', 8.5);
const turmaPresencial1 = new TurmaPresencial('T2', 7.0, 5);

console.log(aluno1);
console.log("Aprovado por nota:", turma1.aprovado());
console.log("Aprovado por presença:",turmaPresencial1.aprovado());