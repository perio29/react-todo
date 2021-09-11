import "./App.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [todos, setTodos] = useState(["java"]);
  const [inputText, setInputText] = useState("");

  const onChangeText = (e) => {
    setInputText(e.target.value);
  };

  const onClickAdd = () => {
    if (inputText === "") return;
    const newTodos = [...todos, inputText];
    setTodos(newTodos);
    setInputText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo}>
              <Sli>
                {todo}
                <button>編集</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </Sli>
            </div>
          );
        })}
      </ul>
      <input
        placeholder="何をしようかな"
        value={inputText}
        onChange={onChangeText}
      />
      <button onClick={onClickAdd} disabled={!inputText}>
        保存
      </button>
    </div>
  );
}

const Sli = styled.li`
  list-style-type: decimal;
`;

export default App;
