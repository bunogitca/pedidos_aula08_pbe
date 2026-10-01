const itens = require("../../dados/itens.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = itens.length ? Number(itens[itens.length - 1].id) + 1 : 1
    itens.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(itens)
}

const buscar = (req, res) => {
    const item = itens.find((i) => i.id == req.params.id)
    if (!item) return res.status(404).send("Item não encontrado")
    res.json(item)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    delete dados.id

    const item = itens.find((i) => i.id == id)
    if (!item) return res.status(404).send("Erro ao atualizar item")

    const chaves = Object.keys(dados)
    chaves.forEach((chave) => {
        item[chave] = dados[chave]
    })

    res.send("item atualizado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    const indice = itens.findIndex((i) => i.id == id)
    if (indice === -1) return res.status(404).send("Erro ao excluir item")

    itens.splice(indice, 1)

    res.send("item excluido com sucesso")
}

module.exports = {
    criar, listar, buscar, alterar, excluir
}