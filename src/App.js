import "./App.css";
import { useState } from "react";
import styled from "styled-components";

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodos, setNewTodos] = useState("");

  const saveNewTodo = () => {
    setTodos([...todos, newTodos]);
    setNewTodos();
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTodo = (id, text) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text };
        }
        return todo;
      })
    );
  };

  const toggleEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isEditing: !todo.isEditing };
        }
        return todo;
      })
    );
  };

  return (
    <div className="App">
      <ol>
        {todos.map((todo) => (
          <Sli key={todo.id}>
            {!todo.isEditing ? (
              todo.text
            ) : (
              <input
                value={todo.text}
                onChange={(e) => changeTodo(todo.id, e.target.value)}
              />
            )}
            {!todo.isEditing && (
              <button onClick={() => toggleEditing(todo.id)}>編集</button>
            )}
            <button onClick={() => deleteTodo(todo.id)}>削除</button>
            {todo.isEditing && (
              <button onClick={() => toggleEditing(todo.id)}>完了</button>
            )}
          </Sli>
        ))}
      </ol>
      <input
        placeholder="何をしようかな"
        value={newTodos ? newTodos.text : ""}
        onChange={(e) => {
          setNewTodos({
            text: e.target.value,
            id: Date(),
            isEditing: false,
          });
          if (!e.target.value) {
            setNewTodos();
          }
        }}
      />
      <button onClick={saveNewTodo} disabled={!newTodos}>
        保存
      </button>
    </div>
  );
}

const Sli = styled.li`
  list-style-type: decimal;
  color: #333;
`;

export default App;
