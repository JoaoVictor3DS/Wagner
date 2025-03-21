import './App.css'

function App() {
  // Parte 1: arrays.js
  console.log('Parte 1: arrays.js')
  let frutas = ['laranja', 'banana', 'maçã', 'uva', 'abacaxi'];
  console.log(frutas.length);
  const terceiro_item = () => {
    return (
      <div>
        <p>
          {frutas[2]}
        </p>
      </div>
    );
  }

  // Parte 2: arrays.js
  console.log('Parte 2: arrays.js');
  let n = [1, 2, 3, 4, 5];
  console.log(n);
  n.pop();
  console.log(n);
  n.shift();
  console.log(n);

  // Parte 3: arrays.js
  console.log('Parte 3: arrays.js');
  let jogadores = [{ nome: "Pele", pontos: 10 }, { nome: "Maradona", pontos: 7 }, { nome: "Neymar", pontos: 8 }];
  console.log(jogadores);
  jogadores[0].pontos = 100;
  console.log(jogadores);

  // Parte 4: arrays.js
  console.log('Parte 4: arrays.js');

  let p = ['palavra', 'verbo', 'linguagem',];
  let index = p.indexOf('linguagem');
  if (index >= 0) {
    console.log(index)
  } else {
    console.log('Palavra não encontrada')
  }

  // Parte 5: arrays.js
  console.log('Parte 5: arrays.js');

  let dados = [['João', 17, 'Goiânia'], ['Maria', 18, 'Goiânia'], ['Augusto', 17, 'Goiânia']];

  console.log(dados[1][0] + ' da cidade de ' + dados[1][2]);

  return (
    <div className='container'>
      <div className='body'>
        <h1>Parte 1: arrays.js</h1>
        {terceiro_item()}

      </div>
    </div>
  )
}

export default App
