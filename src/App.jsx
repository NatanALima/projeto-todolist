import InputContainer from "./components/layout/InputContainer"
function App() {

  return (
    <main>
      <h1>To do List</h1>
      <InputContainer type={"text"} placeholder={"Adicione um novo Texto"} btnSelect={"add"} />
      <InputContainer type={"text"} disabled={true} btnSelect={"collection"} btnCollection={"default"}/>
    </main>
  )
}

export default App
