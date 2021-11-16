import React from 'react';

const Form = ({inputText,setInputtext, todos,setTodos,setstatus  }  ) => {
    const inputTextHandeler = (e) => {
        setInputtext(e.target.value);
    }
    
const submitHandler = (e)=>{

e.preventDefault();
setTodos([...todos,{text: inputText,completed : false,id:Math.random()*1000 }]);

setInputtext("");
}
const statusHandler = (e) =>{
  setstatus(e.target.value);
}

    return (<>
         <form>
      <input  value={inputText}    onChange={inputTextHandeler} type="text" className="todo-input" />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler}  name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    </>  );
}
 
export default Form;<></>