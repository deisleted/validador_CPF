function validacao_cpf(cpf) {

    var cpf = document.getElementById('cpf_digitado').value
    var verificador1 = 0
    var verificador2 = 0

    // Desabilitar a cada novo evento a mensagem anterior.
    document.getElementById('success').style.display = 'none'
    document.getElementById('error').style.display = 'none'

    // verificação do primeiro dígito, laço e divisão final.
    for (var i = 10; i > 1; i--) {
        verificador1 += (cpf.charAt(10 - i) * i)
    } var resultado_digito1 = verificador1 % 11 < 2 ? 0 : 11 - (verificador1 % 11)


    // verificação do segundo dígito, laço e divisão final.
    for (var i = 11; i > 1; i--) {
        verificador2 += (cpf.charAt(11 - i) * i)
    } var resultado_digito2 = verificador2 % 11 < 2 ? 0 : 11 - (verificador2 % 11)

    // validação dos critérios de qtd. de números, números repetidos e calculo dos dígitos verificadores.
    if (cpf.length == 11 &&
        cpf != 00000000000 &&
        cpf != 11111111111 &&
        cpf != 22222222222 &&
        cpf != 33333333333 &&
        cpf != 44444444444 &&
        cpf != 55555555555 &&
        cpf != 66666666666 &&
        cpf != 77777777777 &&
        cpf != 88888888888 &&
        cpf != 99999999999 &&
        resultado_digito1 == cpf.charAt(9) &&
        resultado_digito2 == cpf.charAt(10)) {
        // Exibição da mensagem de CPF Válido.
        document.getElementById('success').style.display = 'block'
    } else {
        // Exibição da mensagem de CPF Inválido.
        document.getElementById('error').style.display = 'block'

    }
}


