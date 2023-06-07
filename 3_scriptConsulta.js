
let Modal = document.querySelector("dialog")
let FecharBotao = document.getElementById("BotaoFechar")

FecharBotao.addEventListener('click', function () {
    Modal.close()
    document.getElementById("informativo").innerHTML = "";
    document.getElementById("InputDialog").value = "";
});
var Tr1Pagar = document.getElementById("Tr1Pagar")
Tr1Pagar.addEventListener('click', () => {
    Modal.showModal()
    Valor = document.getElementById('Tr1Valor').innerHTML;
    Tipo = document.getElementById('Tr1Tipo').innerHTML;
    document.getElementById("valorModal").innerHTML = Valor;
    document.getElementById("tipoModal").innerHTML = Tipo;
});
var Tr2Pagar = document.getElementById("Tr2Pagar");
Tr2Pagar.addEventListener('click', () => {
    Valor = document.getElementById('Tr2Valor').innerHTML;
    Tipo = document.getElementById('Tr2Tipo').innerHTML;
    document.getElementById("valorModal").innerHTML = Valor;
    document.getElementById("tipoModal").innerHTML = Tipo;
    Modal.showModal()
});
var Tr3Pagar = document.getElementById("Tr3Pagar");
Tr3Pagar.addEventListener('click', () => {
    Valor = document.getElementById('Tr3Valor').innerHTML
    Tipo = document.getElementById('Tr3Tipo').innerHTML
    document.getElementById("valorModal").innerHTML = Valor
    document.getElementById("tipoModal").innerHTML = Tipo
    Modal.showModal()
});
var Tr4Pagar = document.getElementById("Tr4Pagar");
Tr4Pagar.addEventListener('click', () => {
    Valor = document.getElementById('Tr4Valor').innerHTML;
    Tipo = document.getElementById('Tr4Tipo').innerHTML;
    document.getElementById("valorModal").innerHTML = Valor;
    document.getElementById("tipoModal").innerHTML = Tipo;
    Modal.showModal()
});
function ChaveValorModal() {
    localStorage.setItem('KeyTrValor', Valor);
    localStorage.setItem('KeyTrTipo', Tipo);
}
function enviar() {
    BotaoEnviar = location.href = "5_Pagamento.html"
}
////////// trabalhando o envio do modal //////
let EnviarModal = document.getElementById("enviarModal");
EnviarModal.onclick = function () {
    let InputDialog = document.getElementById("InputDialog").value;
    if (InputDialog == "") {

        var informarCPF = "🚫 PREENCHA O CAMPO COM O CPF DO CLIENTE🚫"
        informarCPF = informarCPF.fontcolor('#FFFFF')
        document.getElementById("informativo").innerHTML = informarCPF;
    } else {
        enviar();
        document.getElementById("InputDialog").value = ""
        Modal.close();
        ChaveValorModal()
    }

}
