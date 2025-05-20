import CreateForm from './CreateForm';
import Todo from './Todo';
import { useState } from 'react';

function TodoWrapper() {
  const [todos, setTodos] = useState([
    {
      content: '打掃',
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: '拖地',
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
  ]);

  const addTodo = (content) => {
    setTodos([...todos, { content: content, id: Math.random() }]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toogleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false }
          : todo;
      })
    );
  };

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <Todo
            toggleCompleted={toggleCompleted}
            toggleIsEditing={toogleIsEditing}
            editTodo={editTodo}
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </div>
  );
}

export default TodoWrapper;
