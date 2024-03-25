
const Input = ({todo, handleInputChange, addTodo}) => {

    return (
        <>
            <h3>Todo List</h3>
            <input type="text" onChange={handleInputChange} value={todo} />
            <button onClick={addTodo}>追加</button>
        </>
    )
}

export default Input;