const Turma = require("./Turma")

class TurmaPresencial extends Turma{

    constructor({codigo, nota, nome, login, ra, frequencia}){
        super({codigo, nota, nome, login, ra})
        this.frequencia = frequencia
    }

    aprovado(){
        return this.frequencia >= 75
    }
}

module.exports = TurmaPresencial