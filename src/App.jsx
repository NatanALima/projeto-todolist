import InputContainer from "./components/layout/InputContainer"
// import Button from "./components/BtnCollection/ButtonCollection"
import ButtonCollection from "./components/BtnCollection/ButtonCollection"
function App() {

  return (
    <main>
      <h1>To do List</h1>
      <InputContainer/>
      <ButtonCollection typeBtnSelect={"default"}/>
    </main>
  )
}

export default App
