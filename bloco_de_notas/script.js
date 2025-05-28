async function carregarAnotacoes() {
    const url = 'https://68378ec22c55e01d184a2b9b.mockapi.io/Anotacoes'
    const resposta = await fetch(url)
    const arrayAnotacoes = await resposta.json()
    console.log(arrayAnotacoes)

    const listaNotas = document.getElementById('listaNotas')
    listaNotas.innerHTML = ''

    arrayAnotacoes.forEach(anotacao => {
        listaNotas.innerHTML += `<div class="nota">
        <div>${anotacao.Descricao}</div>
        <div class="data-nota">${anotacao.Data}</div>
        <div class="acoes-nota">
          <button class="btn-editar">Editar</button>
          <button class="btn-excluir">Excluir</button>
        </div>`
    });
     
    
}

async function cadastrarAnotacoes() {
    const descricaoDigitada = document.getElementById('descricao').value 
    const dataDigitada = document.getElementById('data').value 

    const dadosAnotacao = {
        descricao: descricaoDigitada,
        data: dataDigitada
    }
    console.log(dadosAnotacao)
    
}






carregarAnotacoes()
