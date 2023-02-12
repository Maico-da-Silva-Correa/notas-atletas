let atletas = [ 
{ 
	nome: "Cesar Abascal", notas: [10, 9.34, 8.42, 10, 7.88] 
	},
 { 
 	nome: "Fernando Puntel", notas: [8, 10, 10, 7, 9.33] 
 	},
  {
  	 nome: "Daiane Jelinsky", notas: [7, 10, 9.5, 9.5, 8] 
  	 },
   { 
   	nome: "Bruno Castro", notas: [10, 10, 10, 9, 9.5] 
   } 
   ];

function resposta(atletas){
 return atletas.map(function(a){
  let dv = 0
let  soma = 0 
 
   a.notas.sort().slice(1, 4).forEach(function(nota){
   
    soma = soma + nota
    dv = soma / 3
    
  })
   

  let m = {
  	Atleta: a.nome,
  	Notas: a.notas,
  	Média: dv
  }
  
 	return m
 })
         
 
}

console.log(resposta(atletas))
