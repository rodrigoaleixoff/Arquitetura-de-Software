class Aluno{
    constructor({nome, login, ra}){
        this._nome = nome
        this._login = login
        this._ra = ra
    }

    set nome(nome){
        this._nome = nome
    }

    get nome(){
        return this._nome
    }

    set login(login){
        this._login = login
    }

    get login(){
        return this._login
    }

    set ra(ra){
        this._ra = ra
    }

    get ra(){
        return this._ra
    }

}

module.exports = Aluno