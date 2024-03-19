// TurmaPresencial.js
const Turma = require('./Turma');

class TurmaPresencial extends Turma {
    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.frequencia = frequencia;
    }
    aprovado() {
        return this.frequencia > 7 ? "Aprovado" : "Reprovado" 
    }
}

module.exports = TurmaPresencial;