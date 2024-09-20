function exibirDados() {
    // Captura os valores dos campos usando getElementById
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let cpf = document.getElementById("cpf").value;
    let senha = document.getElementById("senha").value;

    // Cria a string formatada com os dados do formulário
    let dados = `
        <h2>Dados do Formulário:</h2>
        <p>Nome: ${nome}</p>
        <p>Sobrenome: ${sobrenome}</p>
        <p>CPF: ${cpf}</p>
        <p>Senha: ${senha}</p>
    `;

    // Insere os dados formatados na div 'dadosFormulario'
    document.getElementById("dadosFormulario").innerHTML = dados;
}