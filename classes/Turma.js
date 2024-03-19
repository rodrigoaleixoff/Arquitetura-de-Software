const Aluno = require('./Aluno')

class Turma{
    #codigo = 0
    #nota = 0

    constructor({codigo, nota, nome, login, ra}){
        this.#codigo = codigo
        this.#nota = nota
        //this.nome = nome
        //this.login = login
        //this.ra = ra
        this.aluno = new Aluno({nome, login, ra})
    }

    aprovado(){
        return this.#nota >= 6
    }

    get codigo(){
        return this.#codigo
    }

    get nota(){
        return this.#nota
    }
}

module.exports = Turma

