var InputCadastroEnviar = document.getElementById("InputCadastroEnviar")
InputCadastroEnviar.addEventListener("click", function () {

    const InputCadastroName = document.getElementById("InputCadastroName").innerHTML
    const InputCadastroCPF = document.getElementById("InputCadastroCPF").value
    const InputCadastroEmail = document.getElementById("InputCadastroEmail").value
    const InputCadastroTelef = document.getElementById("InputCadastroTelef").value
})
var LimparDados = document.getElementById("LimparDados")
LimparDados.addEventListener("click", function () {
    const InputCadastroName = document.getElementById("InputCadastroName").innerHTML = ""
    const InputCadastroCPF = document.getElementById("InputCadastroCPF").value = ""
    const InputCadastroEmail = document.getElementById("InputCadastroEmail").value = ""
    const InputCadastroTelef = document.getElementById("InputCadastroTelef").value = ""
})
