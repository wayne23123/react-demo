import { useState } from 'react';

function EditForm({ todo, editTodo }) {
  const [content, setContent] = useState(todo.content);
  const handleSubmit = (event) => {
    event.preventDefault();
    editTodo(todo.id, content);
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      {/* two-way binding => UI 改變 ， state 改變， state 改變 ， UI 改變 */}
      <input
        type="text"
        placeholder="請輸入待辦事項"
        value={content}
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button type="submit">完成</button>
    </form>
  );
}

export default EditForm;
