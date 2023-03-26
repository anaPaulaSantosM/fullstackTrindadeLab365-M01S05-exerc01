let nomes = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];

let nomesDuplicados = [];
let nomesUnicos = [];

nomes.forEach(nome => {
    if (!nomesUnicos.includes(nome)) {
      nomesUnicos.push(nome);
    } else {
      nomesDuplicados.push(nome);
    }
  });

console.log("Esses são os nomes duplicados: " + nomesDuplicados.join(', '));
console.log("Esses são os nomes únicos:" + nomesUnicos);