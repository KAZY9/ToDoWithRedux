import { useDispatch, useSelector } from "react-redux";
import { setTodo, addTodo, completeTodo, editTodo, updateTodo } from "./store/modules/todo";
import Input from "./components/Input";
import Item from "./components/Item";

function App() {
  const { todo, todoList, editId } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(setTodo(e.target.value))
  }

  const handleAddTodo = () => {
    const newTodo = { id: Math.random().toString(36).substr(2), content: todo, status: "未完了" };
    dispatch(addTodo(newTodo));
  }

  const handleCompleteTodo = (id) => {
    dispatch(completeTodo(id));
  }

  const handleEditTodo = (id) => {
    dispatch(editTodo(id));
  }

  const handleUpdateTodo = (id, newContent) => {
    dispatch(updateTodo({ id, newContent }));
  }

  return (
    <>
      <Input todo={todo} handleInputChange={handleInputChange} addTodo={handleAddTodo} />
      <Item todoList={todoList} completeTodo={handleCompleteTodo} editId={editId} editTodo={handleEditTodo} updateTodo={handleUpdateTodo} />
    </>
  );
}

export default App;
