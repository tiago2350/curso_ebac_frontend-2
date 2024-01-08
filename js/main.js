$(document).ready(function () {
  $("#numeroCpf").mask("000.000.000-00", { reverse: true });
  $("#telefone").mask("(00) 00000-0000");
  $("#numeroCep").mask("00000-000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      cpf: {
        required: true,
      },
      endereco: {
        required: true,
      },
      cep: {
        required: true,
      },
    },
    messages: {
      nome: '<span class="campoErrado">Por favor, insira o seu nome.</span>',
      email: '<span class="campoErrado">Por favor, insira o seu email.</span>',
      telefone:
        '<span class="campoErrado">Por favor, insira o seu telefone.</span>',
      cpf: '<span class="campoErrado">Por favor, insira o seu CPF</span>',
      endereco:
        '<span class="campoErrado">Por favor, insira o seu endereço</span>',
      cep: '<span class="campoErrado">Por favor, insira o seu CEP</span>',
    },
    submitHandler: function (form) {
      form.submit();
      alert("Formulário enviado com sucesso!");
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(
          `Existem ${camposIncorretos} campos incorretos. Por favor, verifique os campos e tente novamente.`
        );
      }
    },
  });
});