import React, { useState } from "react";

const Item = React.memo(({todoList, completeTodo, editId, editTodo, updateTodo}) => {
  const [newContent, setNewContent] = useState("");

  const handleEdit = (id, content) => {
    setNewContent(content);
    editTodo(id);
  };

  return (
    <ul>
      {todoList.map((todo) => 
        <div key={todo.id}>
          {editId === todo.id ? (
          <>
            <input type="text" value={newContent} onChange={(e) => setNewContent(e.target.value)}/>
            <button onClick={() => updateTodo(todo.id, newContent)}>更新</button>
          </>) : (
          <>
            <li>{todo.content}</li>
            <button onClick={() => handleEdit(todo.id, todo.content)}>編集</button>
            <button onClick={() => completeTodo(todo.id)}>完了</button>
          </>
          )}
        </div>
      )}
    </ul>
  )
});

export default Item;
