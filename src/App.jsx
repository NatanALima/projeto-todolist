import { createGlobalStyle, styled } from "styled-components";
import InputContainer from "./components/layout/InputContainer";

const GlobalStyle = createGlobalStyle `
:root {
  --fontColor: #94a1d1;
  --bgColor: #1A1B26;
  --containerColor: #262A40;
  --containerCheckedColor: #3d425f;
  --fontStyle: 'Ubuntu Mono', monospace;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: var(--bgColor);
  color: white;
  font-family: var(--fontStyle);
}
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3em;
`;

const ContainerContent = styled.section`
  display: flex;
  margin-bottom: 3em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const MainTitle = styled.h1`
  font-size: 3em;
`;

const ContentTitle = styled.h2`
  font-size: 2em;
  text-decoration: underline;
`

function App() {

  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <MainTitle>To Do List</MainTitle>
        <InputContainer type={"text"} placeholder={"Adicione um novo Texto"} btnSelect={"add"} />
        <ContainerContent>
          <InputContainer type={"text"} disabled={true} btnSelect={"collection"} btnCollection={"default"}/>
          <InputContainer type={"text"} disabled={true} btnSelect={"collection"} btnCollection={"default"}/>
        </ContainerContent>
        <ContainerContent>
          <ContentTitle>Tarefas Concluídas</ContentTitle>
          <InputContainer type={"text"} value={"Qualquer coisa"} disabled={true} btnSelect={"collection"} btnCollection={"checked"} isChecked/>
        </ContainerContent>
      </MainContainer>
    </>
  )
}

export default App
