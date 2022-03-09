function mediaDasnotas(){
  
    var notaPrimeirobimestre = parseFloat(document.getElementById("resposta1").value);
    var notaSegundobimestre = parseFloat(document.getElementById("resposta2").value);
    var notaTerceirobimestre = parseFloat(document.getElementById("resposta3").value);
    var notaQuartobimestre = parseFloat(document.getElementById("resposta4").value);
    
    var resultado = (notaPrimeirobimestre + notaSegundobimestre + notaTerceirobimestre + notaQuartobimestre) / 4;
    
    if (resultado >= 6){
      alert("Parabéns! Você passou!😁 sua média foi " + resultado )
      }else{
        alert("Que pena, sua média foi " + resultado + " infelizmente você reprovou!😢")
  }
    
  console.log(resultado);
  }
