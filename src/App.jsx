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

  const deleteTask = (task) => {
    fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"

      },
      body: null
    })
    .then(window.location.reload())
    .catch(err => console.log(err));
  }

  const selectTask = (taskId) => {
    const taskInfo = tasks.filter(item => item.id === taskId);
    return taskInfo;
  }

  
  const listNotChecked = tasks.filter(item => item.isChecked === false);
  const listChecked = tasks.filter(item => item.isChecked === true);
  
  //O Aqui haverá três formas diferentes de chamada para o componente InputContainer, sendo o primeiro para adicionar um nova tarefa, o segundo para tarefas pendentes e o terceiro, e último, destinado à tarefas concluídas (checkadas);
  // Há o uso de dois maps diferentes que percorrem, na qual um deles percorre uma lista de tarefas pendentes e o outro de tarefas concluídas (que só aparecerá quando Houver alguma) 
  return (
    <>
      <GlobalStyle/>
      <MainContainer>
        <MainTitle>To Do List</MainTitle>
        <InputContainer type={"text"} name={"taskValue"} placeholder={"Adicione um novo Texto"} btnSelect={"add"} addTask={addTask} isTask={false}/>
        {listNotChecked.map(content => <InputContainer key={content.id} type={"text"} value={content.taskValue} name={"taskValue"} disabled={true} btnSelect={"collection"} btnCollection={"default"} indexValue={content.id} task={selectTask(content.id)[0]} addTask={addTask} editTask={editTask} delTask={deleteTask} isTask={true}/>)}

        {listChecked.length ? (
          <>
            <ContentTitle>Tarefas Concluídas</ContentTitle>
            {listChecked.map(content => <InputContainer key={content.id} type={"text"} value={content.taskValue} name={"taskValue"} disabled={true} btnSelect={"collection"} btnCollection={"checkedList"} isChecked={content.isChecked} indexValue={content.id} task={selectTask(content.id)[0]} addTask={addTask} editTask={editTask} delTask={deleteTask} isTask={true}/>)}
          </>
        ): null}
      </MainContainer>
    </>
  )
}

export default App
