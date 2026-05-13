let totalItens = 0;

function adicionarAoCarrinho(nome, preco) {
    totalItens++;
    document.getElementById('total-itens').textContent = totalItens;
    alert(`${nome} adicionado ao carrinho por R$ ${preco.toFixed(2)}!`);
}