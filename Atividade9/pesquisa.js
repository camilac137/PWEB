let totalIdade = 0;

    let idadeMaisVelha = 0;

    let idadeMaisNova = Infinity;

    let totalPessimo = 0;

    let totalPessoas = 0;

    let totalOtimoBom = 0;

    function adicionarResposta() {

      const idade = parseInt(document.getElementById('idade').value);

      const sexo = document.getElementById('sexo').value;

      const opiniao = document.getElementById('opiniao').value;

      totalIdade += idade;

      idadeMaisVelha = Math.max(idadeMaisVelha, idade);

      idadeMaisNova = Math.min(idadeMaisNova, idade);

      if (opiniao === 'péssimo') {
        totalPessimo++;
      }

      else if (opiniao === 'ótimo') {
        totalOtimoBom++;
      }

      else if (opiniao === 'bom') {
        totalOtimoBom++;
      }

      totalPessoas++;

      document.getElementById('mediaIdade').textContent = (totalIdade / totalPessoas).toFixed(2);

      document.getElementById('idadeMaisVelha').textContent = idadeMaisVelha;

      document.getElementById('idadeMaisNova').textContent = idadeMaisNova;

      document.getElementById('totalPessimo').textContent = totalPessimo;

      document.getElementById('porcentagem').textContent = ((totalOtimoBom / totalPessoas) * 100).toFixed(2) + '%';

    }