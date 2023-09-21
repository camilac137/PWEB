var nomeAluno = prompt ("Nome do Aluno:");
var nota1 = parsefloat (prompt ("Nota 1:"));
var nota2 = parsefloat (prompt ("Nota 2:"))
var nota3 = parsefloat (prompt ("Nota 3:"))

var media = ((nota1 + nota2 + nota3)/3);

alert('A média do Aluno $(nomeAluno) é $(media)');