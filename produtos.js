const clientes = require("./dados/produto.json");

const id = 1;

const produtos = {
    "nome": "Gergelim",
    "preco": "45"
};

const chaves = Object.keys(produtos);

const nome = produtos.find((n) => n.id == id);

chaves.forEach((chave) => {
    nome[chave] = produtos[chave];
});



console.log(produtos);
