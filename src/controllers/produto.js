const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(produtos[produtos.length - 1].id) + 1
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(produtos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    let status = 0

    produtos.forEach((prod) => {
        if (prod.id == id) {
            prod.nome = dados.nome
            prod.preco = dados.preco
            prod.quantidade = dados.quantidade
            status = 1
        }
    })
    if(status == 1) {
        res.send("produto atualizado com sucesso")
    }else{
        res.status(404).send("Erro ao atualizar produto")
    }
}

const excluir = (req, res) => {
    const id = req.params.id
    let status = 0

    produtos.forEach((prod, indice) => {
        if(prod.id == id) {
            status = 1
            produtos.splice(indice, 1)
        }
    })
    if(status == 1) {
        res.send("produto excluido com sucesso")
    }else{
        res.status(404).send("Erro ao excluir produto")
    }
}

module.exports = {
    criar, listar, alterar, excluir
}