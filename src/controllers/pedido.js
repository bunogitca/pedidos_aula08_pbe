const pedidos = require("../../dados/pedidos.json")

function subtotal() {
    pedidos.forEach(p => {
        p.subtotal = p.quantidade * p.preco
    })
}
const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(pedidos[pedidos.length - 1].id) + 1 //autoIncrement
    pedidos.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    subtotal()
    res.json(pedidos)
}
const alterar = (req, res) => {
    const id = req.params.id
    const pedido = pedidos.find(p => p.id == id)
    if (pedido) {
        const index = pedidos.findIndex(p => p.id == id)
        pedidos[index] = { ...pedido, ...req.body }
        res.json(pedidos[index])
    } else {
        res.status(404).json({ message: "Pedido não encontrado" })
    }
}
const excluir = (req, res) => {
    const id = req.params.id
    const index = pedidos.findIndex(p => p.id == id)
    if (index !== -1) {
        pedidos.splice(index, 1)
        res.status(200).json({ message: "Pedido excluído com sucesso" })
    } else {
        res.status(404).json({ message: "Pedido não encontrado" })
    }
}

module.exports = {
    criar, listar, alterar, excluir
}