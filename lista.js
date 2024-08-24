// Inicializamos o código com arrays vazios para que eles armazenem valores que serão introduzidos
var itens = [];
var contador = 0; // Contador para gerar IDs únicos

// Criamos os eventos abaixo para enviar as informações
const botao = document.getElementById('botaoAdd');

// Adiciona um evento de clique na variável botão
botao.addEventListener('click', function(event) {
    // Variáveis para recuperar os valores que os usuários digitarem nos inputs por meio do value
    var nomeProduto = document.querySelector('input[name=nome_produto]');
    var precoProduto = document.querySelector('input[name=valor_produto]');

    // Esse bloco com o .push vai inserir valores dentro do array que se encontra vazio
    itens.push({
        id: contador++, // Adiciona um ID único para cada item
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    atualizarListaProdutos();
    
    // Limpa os inputs após adicionar
    nomeProduto.value = "";
    precoProduto.value = "";
});

// Função para atualizar a lista de produtos exibida
function atualizarListaProdutos() {
    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;

    // Limpa a lista de produtos antes de renderizar novamente
    listaProdutos.innerHTML = "";
    itens.forEach(function(val) {
        soma += parseFloat(val.valor);

        listaProdutos.innerHTML += `
            <div class="lista-produto-single" id="item-${val.id}">
                <h3>${val.nome}</h3>
                <h3 class="price-produto"><span>R$ ${val.valor}</span></h3>          
            </div>
        `;
    });

    soma = soma.toFixed(2);

    // Atualiza o valor total
    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'Total: R$ ' + soma;
}


// Botão para limpar todos os produtos
document.querySelector('button[name=limpar]')
    .addEventListener('click', () => {
        itens = []; // Limpa o array de itens
        document.querySelector('.lista-produtos').innerHTML = ""; // Limpa a lista de produtos do DOM
        document.querySelector('.soma-produto h1').innerHTML = "Total: R$ 00,00"; // Reseta o valor total
    });