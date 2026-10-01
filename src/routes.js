const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")
const Produto = require("./controllers/produto")
const Item = require("./controllers/item")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)
router.get('/clientes', Cliente.listar)
router.get('/pedidos', Pedido.listar)
router.post('/clientes', Cliente.criar)
router.post('/pedidos', Pedido.criar)
router.put('/clientes/:id', Cliente.alterar)
router.put('/pedidos/:id', Pedido.alterar)
router.delete('/clientes/:id', Cliente.excluir)
router.delete('/pedidos/:id', Pedido.excluir)
router.get('/produtos', Produto.listar)
router.post('/produtos', Produto.criar)
router.put('/produtos/:id', Produto.alterar)
router.delete('/produtos/:id', Produto.excluir)
router.get('/itens', Item.listar)
router.post('/itens', Item.criar)
router.put('/itens/:id', Item.alterar)
router.delete('/itens/:id', Item.excluir)


module.exports = router