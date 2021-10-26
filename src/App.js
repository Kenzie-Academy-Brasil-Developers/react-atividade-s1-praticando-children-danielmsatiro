  import './App.css';
import CenteredCard from "./components/CenteredCard.js"

function App() {
  return (
    <div className="App">
    <CenteredCard>
      <div>
        <h1>Se liga nessa:</h1>
        <p>A professora diz:</p>
        <p>- Joãozinho, se eu digo “fui bonita”, é passado. E se eu disser “sou bonita”, o que é?</p>
        <p>Joãozinho responde:</p>
        <p>- É mentira, professora. </p>
      </div> 
    </CenteredCard>
    <CenteredCard>
      <div>
        <h1>E que tal essa?</h1>
        <p>Joãozinho não tinha feito o dever de casa, então a mãe dele perguntou:</p>
        <p>- Ôh, Joãozinho. Porque você não fez o dever de casa?</p>
        <p>- Oxi, mãe. E agora a gente não está morando em um apartamento?</p>
      </div> 
    </CenteredCard>
    <CenteredCard>
      <div>
        <h1>E essa?</h1>
        <p>Na sala de aula a professora perguntou para Joãozinho:</p>
        <p>
- Joãozinho, se você tivesse 30 reais num bolso e 70 reais no outro, o que teria?</p>
        <p>- Com certeza a calça de outra pessoa, professora.</p>
      </div> 
    </CenteredCard>
    </div>
  );
}

export default App;
