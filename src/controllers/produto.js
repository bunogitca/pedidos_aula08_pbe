const produtos = require("../../dados/produtos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = produtos.length ? Number(produtos[produtos.length - 1].id) + 1 : 1
    produtos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(produtos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    delete dados.id

    const produto = produtos.find((p) => p.id == id)
    if (!produto) return res.status(404).send("Erro ao atualizar produto")

    const chaves = Object.keys(dados)
    chaves.forEach((chave) => {
        produto[chave] = dados[chave]
    })

    res.send("produto atualizado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    const indice = produtos.findIndex((p) => p.id == id)
    if (indice === -1) return res.status(404).send("Erro ao excluir produto")

    produtos.splice(indice, 1)

    res.send("produto excluido com sucesso")
}

module.exports = {
    criar, listar, alterar, excluir
}