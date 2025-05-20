import { useState } from 'react';

function CreateForm({ addTodo }) {
  const [content, setContent] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(content);
    setContent('');
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
      <button type="submit">加入</button>
    </form>
  );
}

export default CreateForm;
