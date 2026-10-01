const pedidos = require("../../dados/pedidos.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = pedidos.length ? Number(pedidos[pedidos.length - 1].id) + 1 : 1
    pedidos.push(dados)
    res.status(201).json(dados)
}

const listar = (req, res) => {
    res.json(pedidos)
}

const alterar = (req, res) => {
    const id = req.params.id
    const dados = req.body
    delete dados.id

    const pedido = pedidos.find((p) => p.id == id)
    if (!pedido) return res.status(404).send("Erro ao atualizar pedido")

    const chaves = Object.keys(dados)
    chaves.forEach((chave) => {
        pedido[chave] = dados[chave]
    })

    res.send("Pedido atualizado com sucesso")
}

const excluir = (req, res) => {
    const id = req.params.id

    const indice = pedidos.findIndex((p) => p.id == id)
    if (indice === -1) return res.status(404).send("Erro ao excluir pedido")

    pedidos.splice(indice, 1)

    res.send("Pedido excluido com sucesso")
}

module.exports = {
    criar,
    listar,
    alterar,
    excluir
}