// EXERCÍCIO 1

const nome = document.querySelector("#nome");
const btnOla = document.querySelector("#btnOla");
const resultado = document.querySelector("#resultado");

btnOla.addEventListener("click", function() {
    resultado.textContent = "Olá, " + nome.value + "! Seja bem-vindo!";
});


// EXERCÍCIO 2

const titulo = document.querySelector("#titulo");
const btnAlterar = document.querySelector("#btnAlterar");

btnAlterar.addEventListener("click", function() {
    titulo.textContent = "SENAI";
    titulo.style.color = "red";
});


// EXERCÍCIO 3

const btnContador = document.querySelector("#btnContador");
const contador = document.querySelector("#contador");

let cliques = 0;

btnContador.addEventListener("click", function() {
    cliques = cliques + 1;
    contador.textContent = "Cliques: " + cliques;
});


// EXERCÍCIO 4

const status4 = document.querySelector("#status4");
const btn4 = document.querySelector("#btn4");

btn4.addEventListener("click", function() {
    status4.textContent = "Atendimento aberto";
    status4.style.color = "green";
});


// EXERCÍCIO 5

const produto5 = document.querySelector("#produto5");
const quantidade5 = document.querySelector("#quantidade5");
const preco5 = document.querySelector("#preco5");
const btn5 = document.querySelector("#btn5");
const resultado5 = document.querySelector("#resultado5");

btn5.addEventListener("click", function() {
    let quantidade = Number(quantidade5.value);
    let preco = Number(preco5.value);

    let total = quantidade * preco;

    resultado5.textContent = "Produto: " + produto5.value + " | Total: R$ " + total.toFixed(2);
});


// EXERCÍCIO 6

const nota1 = document.querySelector("#nota61");
const nota2 = document.querySelector("#nota62");
const nota3 = document.querySelector("#nota63");
const btn6 = document.querySelector("#btn6");
const resultado6 = document.querySelector("#resultado6");

btn6.addEventListener("click", function() {
    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    let n3 = Number(nota3.value);

    let media = (n1 + n2 + n3) / 3;

    if (media >= 6) {
        resultado6.textContent = "Média: " + media.toFixed(2) + " - Aluno aprovado.";
    } else {
        resultado6.textContent = "Média: " + media.toFixed(2) + " - Aluno reprovado.";
    }
});


// EXERCÍCIO 7

const nome7 = document.querySelector("#nome7");
const email7 = document.querySelector("#email7");
const senha7 = document.querySelector("#senha7");
const btn7 = document.querySelector("#btn7");
const resultado7 = document.querySelector("#resultado7");

btn7.addEventListener("click", function() {

    if (nome7.value == "" || email7.value == "" || senha7.value == "") {
        resultado7.textContent = "Preencha todos os campos.";
    } else {
        resultado7.textContent = "Cadastro realizado com sucesso!";
    }

});


// EXERCÍCIO 8

const produto8 = document.querySelector("#produto8");
const estoque8 = document.querySelector("#estoque8");
const pedido8 = document.querySelector("#pedido8");
const btn8 = document.querySelector("#btn8");
const resultado8 = document.querySelector("#resultado8");

btn8.addEventListener("click", function() {

    let estoque = Number(estoque8.value);
    let pedido = Number(pedido8.value);

    if (pedido <= estoque) {
        resultado8.textContent = "Produto: " + produto8.value + " - Pedido disponível para separação.";
    } else {
        resultado8.textContent = "Estoque insuficiente.";
    }

});


// EXERCÍCIO 9

const tarefa9 = document.querySelector("#tarefa9");
const btn9 = document.querySelector("#btn9");
const lista9 = document.querySelector("#lista9");

btn9.addEventListener("click", function() {

    if (tarefa9.value != "") {

        let tarefa = document.createElement("li");

        tarefa.textContent = tarefa9.value;

        lista9.appendChild(tarefa);

        tarefa9.value = "";
    }

});


// EXERCÍCIO 10

const preco10 = document.querySelector("#preco10");
const desconto10 = document.querySelector("#desconto10");
const btn10 = document.querySelector("#btn10");
const resultado10 = document.querySelector("#resultado10");

btn10.addEventListener("click", function() {

    let preco = Number(preco10.value);
    let desconto = Number(desconto10.value);

    let valorDesconto = preco * desconto / 100;
    let precoFinal = preco - valorDesconto;

    resultado10.textContent = "Desconto: R$ " + valorDesconto.toFixed(2) + 
    " | Preço final: R$ " + precoFinal.toFixed(2);

});


// EXERCÍCIO 11

const usuario11 = document.querySelector("#usuario11");
const senha11 = document.querySelector("#senha11");
const btn11 = document.querySelector("#btn11");
const resultado11 = document.querySelector("#resultado11");
const area11 = document.querySelector("#area11");

btn11.addEventListener("click", function() {

    if (usuario11.value == "aluno" && senha11.value == "1234") {

        resultado11.textContent = "Login realizado com sucesso!";
        area11.textContent = "Bem-vindo ao sistema.";

    } else {

        resultado11.textContent = "Usuário ou senha incorretos.";
        area11.textContent = "";

    }

});


// EXERCÍCIO 12

const produto12 = document.querySelector("#produto12");
const preco12 = document.querySelector("#preco12");
const btn12 = document.querySelector("#btn12");
const lista12 = document.querySelector("#lista12");
const total12 = document.querySelector("#total12");

let total = 0;

btn12.addEventListener("click", function() {

    if (produto12.value != "" && preco12.value != "") {

        let item = document.createElement("li");

        let preco = Number(preco12.value);

        item.textContent = produto12.value + " - R$ " + preco.toFixed(2);

        lista12.appendChild(item);

        total = total + preco;

        total12.textContent = "Total: R$ " + total.toFixed(2);

        produto12.value = "";
        preco12.value = "";
    }

});


// EXERCÍCIO 13

const nome13 = document.querySelector("#nome13");
const idade13 = document.querySelector("#idade13");
const curso13 = document.querySelector("#curso13");
const btn13 = document.querySelector("#btn13");
const tabela13 = document.querySelector("#tabela13");

btn13.addEventListener("click", function() {

    if (nome13.value != "" && idade13.value != "" && curso13.value != "") {

        let linha = document.createElement("tr");

        linha.innerHTML = `
            <td>${nome13.value}</td>
            <td>${idade13.value}</td>
            <td>${curso13.value}</td>
            <td><button>Excluir</button></td>
        `;

        tabela13.appendChild(linha);

        linha.querySelector("button").addEventListener("click", function() {
            linha.remove();
        });

        nome13.value = "";
        idade13.value = "";
        curso13.value = "";
    }

});


// EXERCÍCIO 14

const produto14 = document.querySelector("#produto14");
const quantidade14 = document.querySelector("#quantidade14");
const preco14 = document.querySelector("#preco14");
const btn14 = document.querySelector("#btn14");
const busca14 = document.querySelector("#busca14");
const tabela14 = document.querySelector("#tabela14");
const itens14 = document.querySelector("#itens14");
const faturamento14 = document.querySelector("#faturamento14");

let vendas = [];

btn14.addEventListener("click", function() {

    let produto = produto14.value;
    let quantidade = Number(quantidade14.value);
    let preco = Number(preco14.value);

    if (produto != "" && quantidade > 0 && preco > 0) {

        vendas.push({
            produto: produto,
            quantidade: quantidade,
            preco: preco
        });

        mostrarVendas();

        produto14.value = "";
        quantidade14.value = "";
        preco14.value = "";
    }

});

function mostrarVendas() {

    tabela14.innerHTML = "";

    let totalItens = 0;
    let faturamento = 0;
    let pesquisa = busca14.value.toLowerCase();

    for (let i = 0; i < vendas.length; i++) {

        if (vendas[i].produto.toLowerCase().includes(pesquisa)) {

            let linha = document.createElement("tr");

            let totalVenda = vendas[i].quantidade * vendas[i].preco;

            linha.innerHTML = `
                <td>${vendas[i].produto}</td>
                <td>${vendas[i].quantidade}</td>
                <td>R$ ${vendas[i].preco.toFixed(2)}</td>
                <td>R$ ${totalVenda.toFixed(2)}</td>
            `;

            tabela14.appendChild(linha);

            totalItens = totalItens + vendas[i].quantidade;
            faturamento = faturamento + totalVenda;
        }
    }

    itens14.textContent = "Total de itens: " + totalItens;
    faturamento14.textContent = "Faturamento: R$ " + faturamento.toFixed(2);
}

busca14.addEventListener("input", function() {
    mostrarVendas();
});


// EXERCÍCIO 15

const nome15 = document.querySelector("#nome15");
const ra15 = document.querySelector("#ra15");
const curso15 = document.querySelector("#curso15");
const nota151 = document.querySelector("#nota151");
const nota152 = document.querySelector("#nota152");
const btn15 = document.querySelector("#btn15");
const busca15 = document.querySelector("#busca15");
const tabela15 = document.querySelector("#tabela15");

const alunos15Texto = document.querySelector("#alunos15");
const aprovados15 = document.querySelector("#aprovados15");
const reprovados15 = document.querySelector("#reprovados15");

let alunos = [];

btn15.addEventListener("click", function() {

    let nome = nome15.value;
    let ra = ra15.value;
    let curso = curso15.value;
    let nota1 = Number(nota151.value);
    let nota2 = Number(nota152.value);

    if (nome != "" && ra != "" && curso != "") {

        let media = (nota1 + nota2) / 2;

        let situacao;

        if (media >= 6) {
            situacao = "Aprovado";
        } else {
            situacao = "Reprovado";
        }

        alunos.push({
            nome: nome,
            ra: ra,
            curso: curso,
            media: media,
            situacao: situacao
        });

        mostrarAlunos();

        nome15.value = "";
        ra15.value = "";
        curso15.value = "";
        nota151.value = "";
        nota152.value = "";
    }

});

function mostrarAlunos() {

    tabela15.innerHTML = "";

    let pesquisa = busca15.value.toLowerCase();

    for (let i = 0; i < alunos.length; i++) {

        if (
            alunos[i].nome.toLowerCase().includes(pesquisa) ||
            alunos[i].ra.toLowerCase().includes(pesquisa) ||
            alunos[i].curso.toLowerCase().includes(pesquisa)
        ) {

            let linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${alunos[i].nome}</td>
                <td>${alunos[i].ra}</td>
                <td>${alunos[i].curso}</td>
                <td>${alunos[i].media.toFixed(2)}</td>
                <td>${alunos[i].situacao}</td>
                <td><button>Excluir</button></td>
            `;

            tabela15.appendChild(linha);

            linha.querySelector("button").addEventListener("click", function() {
                alunos.splice(i, 1);
                mostrarAlunos();
            });
        }
    }

    let aprovados = 0;
    let reprovados = 0;

    for (let i = 0; i < alunos.length; i++) {

        if (alunos[i].situacao == "Aprovado") {
            aprovados++;
        } else {
            reprovados++;
        }
    }

    alunos15Texto.textContent = "Alunos: " + alunos.length;
    aprovados15.textContent = "Aprovados: " + aprovados;
    reprovados15.textContent = "Reprovados: " + reprovados;
}

busca15.addEventListener("input", function() {
    mostrarAlunos();
});
