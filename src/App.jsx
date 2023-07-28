import { createGlobalStyle, styled } from "styled-components"
import InputContainer from "./components/layout/InputContainer"
function App() {
  const GlobalStyle = createGlobalStyle `
    body {
      background-color: #1A1B26;
      color: white;
      font-family: 'Ubuntu Mono', monospace;
    }
  `

  const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3em;
  `;

  const MainTitle = styled.h1`
    font-size: 3em;
  `
  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <MainTitle>To Do List</MainTitle>
        <InputContainer type={"text"} placeholder={"Adicione um novo Texto"} btnSelect={"add"} />
        <InputContainer type={"text"} disabled={true} btnSelect={"collection"} btnCollection={"default"}/>
      </MainContainer>
    </>
  )
}

export default App
