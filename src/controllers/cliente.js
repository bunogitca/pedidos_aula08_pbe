const clientes = require("../../dados/clientes.json")

const criar = (req, res) => {
    const dados = req.body
    dados.id = Number(clientes[clientes.length - 1].id) + 1 //autoIncrement
    clientes.push(dados)
    res.status(201).json(dados)
}
const listar = (req, res) => {
    res.json(clientes)
}
const alterar = (req, res) => { 
    const id = req.params.id
    const cliente = clientes.find(cliente => cliente.id == id)
}
const excluir = (req, res) => {
    const id = req.params.id
    const index = clientes.findIndex(cliente => cliente.id == id)
    if (index !== -1) {
        clientes.splice(index, 1)
        res.status(200).json({ message: "Cliente excluído com sucesso" })
    } else {
        res.status(404).json({ message: "Cliente não encontrado" })
    }
 }

module.exports = {
    criar, listar, alterar, excluir
}