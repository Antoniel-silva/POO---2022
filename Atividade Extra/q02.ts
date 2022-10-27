class Pessoa{
    private _nome: string
    private _sobrenome: string

    constructor(nome: string, sobrenome: string){
        this._nome = nome
        this._sobrenome = sobrenome
    }

    get Nome(){
        return this._nome
    }

    get Sobrenome(){
        return this._sobrenome
    }
    sobrenome(): string{
        return this._nome + " " + this._sobrenome
    }
}




let p1 = new Pessoa("Antoniel","William")
console.log(p1.Nome,p1.Sobrenome)
console.log(p1.sobrenome())