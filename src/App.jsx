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
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(data => setTasks(data))
    .catch(err => console.log(err));
  },[]);

  

  const addTask = (newTask) => {
    newTask.btnCollection = "default";
    newTask.isChecked = false;
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    })
    .then(window.location.reload())
    .catch(err => console.log(err));

  }

  const editTask = (task) => {
    fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify(task)
    })
    .then(resp => resp.json())
    .then(window.location.reload())
    .catch(err => console.log(err));
  }

  const selectTask = (taskId) => {
    const taskInfo = tasks.filter(item => item.id === taskId);
    return taskInfo;
  }

  
  const listNotChecked = tasks.filter(item => item.isChecked === false);
  const listChecked = tasks.filter(item => item.isChecked === true);

  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <MainTitle>To Do List</MainTitle>
        <InputContainer type={"text"} name={"taskValue"} placeholder={"Adicione um novo Texto"} btnSelect={"add"} selectTask={selectTask} addTask={addTask}/>
        {listNotChecked.map(content => <InputContainer key={content.id} type={"text"} value={content.taskValue} name={"taskValue"} disabled={true} btnSelect={"collection"} btnCollection={content.btnCollection} indexValue={content.id} task={selectTask(content.id)[0]} addTask={addTask} editTask={editTask}/>)}

        {listChecked.length ? (
          <>
            <ContentTitle>Tarefas Concluídas</ContentTitle>
            {listChecked.map(content => <InputContainer key={content.id} type={"text"} value={content.taskValue} name={"taskValue"} disabled={true} btnSelect={"collection"} btnCollection={content.btnCollection} isChecked={content.isChecked} indexValue={content.id} task={selectTask(content.id)[0]} addTask={addTask} editTask={editTask}/>)}
          </>
        ): null}
      </MainContainer>
    </>
  )
}

export default App
