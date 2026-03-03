class Cliente {
    #cpf
    constructor(nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.#cpf = cpf
        this.telefone = new Set()
    }
    get cpf(){
        return this.#cpf
    }
}

class Telefone {
    constructor(ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
}

class Endereco {
    constructor(rua, numero, cidade, estado){
        this.rua = rua
        this.numero = numero
        this.cidade = cidade
        this.estado = estado
        // amanita muscaria
    }
}

class Empresa {
    #cnpj
    constructor(social, fantasia, cnpj, endereco) {
        this.social = social
        this.fantasia = fantasia
        this.#cnpj = cnpj
        this.endereco = endereco
        this.clientes = new Set()
        this.telefones = new Set()
    }
    get descricao() {
        let descricao = '--------------------------------' + '\n'
                + 'Razão Social: ' + this.social + '\n'
                + 'Nome Fantasia: ' + this.fantasia + '\n'
                + '--------------------------------'
                + '\n'

                for (let c of this.clientes){
                    descricao += 'Nome: ' + c.nome + '\n'
                    + 'Rua: ' + c.endereco.rua + ' Número: ' + c.endereco.numero + ' Cidade: ' + c.endereco.cidade + ' Estado: ' + c.endereco.estado + '\n'
                    
                    for (let t of c.telefone){
                        descricao += 'DDD: ' + t.ddd + ' Número: ' + t.numero + '\n'
                    }

                    descricao += '\n'
                }

        return descricao
    }
    get minusculo() {
        let descricao = '--------------------------------' + '\n'
                + 'Razão Social: ' + this.social.toLowerCase() + '\n'
                + 'Nome Fantasia: ' + this.fantasia.toLowerCase() + '\n'
                + '--------------------------------'
                + '\n'

                for (let c of this.clientes){
                    descricao += 'Nome: ' + c.nome.toLowerCase() + '\n'
                    + 'Rua: ' + c.endereco.rua.toLowerCase() +
                     ' Número: ' + c.endereco.numero.toLowerCase() +
                     ' Cidade: ' + c.endereco.cidade.toLowerCase() +
                     ' Estado: ' + c.endereco.estado.toLowerCase() + '\n'
                    
                    for (let t of this.telefones){
                        descricao += 'DDD: ' + t.ddd + ' Número: ' + t.numero + '\n'
                    }

                    descricao += '\n'
                }

            return descricao
    }
    get maiusculo() {
        let descricao = '--------------------------------' + '\n'
                + 'Razão Social: ' + this.social.toUpperCase() + '\n'
                + 'Nome Fantasia: ' + this.fantasia.toUpperCase() + '\n'
                + '--------------------------------'
                + '\n'

                for (let c of this.clientes){
                    descricao += 'Nome: ' + c.nome.toUpperCase() + '\n'
                    + 'Rua: ' + c.endereco.rua.toUpperCase() + 
                    ' Número: ' + c.endereco.numero +
                    ' Cidade: ' + c.endereco.cidade.toUpperCase() + 
                    ' Estado: ' + c.endereco.estado.toUpperCase() + '\n'
                    
                    for (let t of this.telefones){
                        descricao += 'DDD: ' + t.ddd + ' Número: ' + t.numero + '\n'
                    }

                    descricao += '\n'
                }

        return descricao
    }
}

// empresa
let empresa = new Empresa('Mercado Livre', 'ABC LTDA', '123456789', new Endereco('Av. Paulista', '123', 'São Paulo', 'SP'))
empresa.telefones.add(new Telefone('12', '123456789'))
empresa.telefones.add(new Telefone('12', '987654321'))

// clientes
let cliente1 = new Cliente('João', '111111111111', new Endereco('Av. Paulista', '7001', 'São Paulo', 'SP'))
cliente1.telefone.add(new Telefone('12', '543219876'))
cliente1.telefone.add(new Telefone('12', '827361283'))

let cliente2 = new Cliente('Gabriel', '222222222222', new Endereco('Av. Paulista', '7002', 'São Paulo', 'SP'))
cliente2.telefone.add(new Telefone('12', '121232312'))
cliente2.telefone.add(new Telefone('12', '342342344'))

let cliente3 = new Cliente('Vinícius', '33333333333333',new Endereco('Av. Paulista', '7003', 'São Paulo', 'SP'))
cliente3.telefone.add(new Telefone('12', '123456867'))
cliente3.telefone.add(new Telefone('12', '908987566'))

let cliente4 = new Cliente('Alcino', '444444444444', new Endereco('Av. Paulista', '7004', 'São Paulo', 'SP'))
cliente4.telefone.add(new Telefone('12', '768975858'))
cliente4.telefone.add(new Telefone('12', '999988875'))

let cliente5 = new Cliente('João', '555555555555', new Endereco('Av. Paulista', '7005', 'São Paulo', 'SP'))
cliente5.telefone.add(new Telefone('12', '123123112'))
cliente5.telefone.add(new Telefone('12', '565675858'))

// cliente -> empresa
empresa.clientes.add(cliente1)
empresa.clientes.add(cliente2)
empresa.clientes.add(cliente3)
empresa.clientes.add(cliente4)
empresa.clientes.add(cliente5)

//empresa.maiusculo, empresa.minusculo ou empresa.descricao
console.log(empresa.descricao)