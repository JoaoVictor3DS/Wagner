import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("João")
  const [age, setAge] = useState(25)
  const [isEnrolled, setIsEnrolled] = useState(true)
  const [userNumber, setUserNumber] = useState(null)
  const [grade, setGrade] = useState(null)
  const [menuOption, setMenuOption] = useState(null)
  const [number, setNumber] = useState(null)
  const [tabuada, setTabuada] = useState([])
  const [clickCount, setClickCount] = useState(0)

  const handleButtonClick = () => {
    document.title = "Título Alterado"
  }

  const handleParagraphColorChange = () => {
    document.getElementById("paragraph").style.color = "blue"
  }

  const handleTabuada = (num) => {
    const result = []
    for (let i = 1; i <= 10; i++) {
      result.push(`${num} x ${i} = ${num * i}`)
    }
    setTabuada(result)
  }

  return (
    <>
      <h2>Olá, Mundo!</h2>
      <button onClick={() => alert("Olá, Mundo!")}>Mostrar Alerta</button>
      <button onClick={() => console.log(5 + 3)}>Somar 5 + 3</button>

      <h2>Variáveis e Tipos de Dados</h2>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p>Matriculado: {isEnrolled ? "Sim" : "Não"}</p>
      <button onClick={() => console.log(typeof name, typeof age, typeof isEnrolled)}>Verificar Tipos</button>
      <input type="number" onChange={(e) => setUserNumber(parseInt(e.target.value))} placeholder="Digite um número" />
      <button onClick={() => console.log(userNumber)}>Mostrar Número</button>

      <h2>Operadores e Estruturas Condicionais</h2>
      <input type="number" onChange={(e) => setGrade(parseInt(e.target.value))} placeholder="Digite sua nota" />
      <button onClick={() => {
        if (grade >= 8) console.log("Aprovado")
        else if (grade >= 4) console.log("Recuperação")
        else console.log("Reprovado")
      }}>Verificar Nota</button>
      <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} placeholder="Digite um número" />
      <button onClick={() => console.log(number % 2 === 0 ? "Par" : "Ímpar")}>Verificar Paridade</button>
      <input type="text" onChange={(e) => setMenuOption(e.target.value)} placeholder="Escolha uma opção (A, B, C)" />
      <button onClick={() => {
        if (menuOption === "A") console.log("Opção A escolhida")
        else if (menuOption === "B") console.log("Opção B escolhida")
        else if (menuOption === "C") console.log("Opção C escolhida")
        else console.log("Opção inválida")
      }}>Escolher Opção</button>

      <h2>Laços de Repetição</h2>
      <button onClick={() => {
        for (let i = 1; i <= 10; i++) {
          console.log(i)
        }
      }}>Contar de 1 a 10</button>
      <input type="number" onChange={(e) => handleTabuada(parseInt(e.target.value))} placeholder="Digite um número para a tabuada" />
      <ul>
        {tabuada.map((item, index) => <li key={index}>{item}</li>)}
      </ul>

      <h2>Manipulação do DOM</h2>
      <button onClick={handleButtonClick}>Alterar Título</button>
      <p id="paragraph">Este é um parágrafo.</p>
      <button onClick={handleParagraphColorChange}>Alterar Cor do Parágrafo</button>

      <h2>Criando um Contador de Cliques</h2>
      <button onClick={() => setClickCount(clickCount + 1)}>Clique Aqui</button>
      <button onClick={() => setClickCount(0)}>Zerar Contador</button>
      <p>Contador de Cliques: {clickCount}</p>
    </>
  )
}

export default App
