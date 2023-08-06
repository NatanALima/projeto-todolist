import { createGlobalStyle, styled } from "styled-components";
import InputContainer from "./components/layout/InputContainer";
import { useEffect, useState } from "react";

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

const MainTitle = styled.h1`
  font-size: 3em;
`;

const ContentTitle = styled.h2`
  margin-top: 2em;
  font-size: 2em;
  text-decoration: underline;
`

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks", {
      method: "GET",
      headers: {
        'Content-Type': 'apllication/json'
      }
    })
    .then(resp => resp.json())
    .then(data => setTasks(data))
    .catch(err => console.log(err));
  },[]);

  
  const listNotChecked = tasks.filter(item => item.isChecked === false);
  const listChecked = tasks.filter(item => item.isChecked === true);

  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <MainTitle>To Do List</MainTitle>
        {listNotChecked.map(content => <InputContainer key={content.id} type={content.text} placeholder={content.placeholder} disabled={content.disabled} btnSelect={content.btnSelect} btnCollection={content.btnCollection} indexValue={content.id}/>)}

        {listChecked.length ? (
          <>
            <ContentTitle>Tarefas Concluídas</ContentTitle>
            {listChecked.map(content => <InputContainer key={content.id} type={content.text} placeholder={content.placeholder} value={content.value} disabled={content.disabled} btnSelect={content.btnSelect} btnCollection={content.btnCollection} isChecked={content.isChecked} indexValue={content.id }/>)}
          </>
        ): null}
      </MainContainer>
    </>
  )
}

export default App
