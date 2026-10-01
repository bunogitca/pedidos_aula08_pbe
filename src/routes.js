const express =  require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedido = require("./controllers/pedido")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)
router.get('/clientes', Cliente.listar)
router.get('/pedidos', Pedido.listar)
router.put('/clientes', Cliente.alterar)
router.put('/pedidos', Pedido.alterar)
router.delete('/clientes', Cliente.excluir)
router.delete('/pedidos', Pedido.excluir)
router.post('/clientes', Cliente.criar)
router.post('/pedidos', Pedido.criar)
router.get('/produtos', Produto.listar)
router.put('/produtos', Produto.alterar2)
router.post('/produtos', Produto.criar)
router.delete('/produtos', Produto.excluir2)

module.exports = router