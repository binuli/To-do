import React from "react";

const Form = ({ setInputText, setTodo, inputText, todos }) => {
  const inputTextHandler = (e) => {
    if (e.target.value !== "") setInputText(e.target.value);
  };
  const todoHandler = (e) => {
    e.preventDefault();
    setTodo([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <div>
      <form>
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={inputText}
        />
        <button onClick={todoHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
