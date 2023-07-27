import InputContainer from "./components/layout/InputContainer"
function App() {

  return (
    <main>
      <h1>To do List</h1>
      <InputContainer btnSelect={"add"} />
      <InputContainer btnSelect={"collection"} btnCollection={"default"}/>
    </main>
  )
}

export default App
