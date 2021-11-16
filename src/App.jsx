import React from 'react';
import { useState } from 'react'; 
import { useEffect } from 'react';
import "./App.css"
import Form from './compnents/Form';
import Todolist from './compnents/Todolist';
 const App = () => {

  const [inputText,setInputtext] = useState(""); 
  const [todos,setTodos] = useState([]);  
const [status,setstatus]= useState('all');

const [filterTodos,setFilterTodos]= useState([]);
const filterHandler =()=>{
switch(status){
case "completed": 
setFilterTodos(todos.filter(todo=> todo.completed === true ))
break;
case "uncompleted": 
setFilterTodos(todos.filter(todo=> todo.completed === false ))
break;
default:
  setFilterTodos(todos);
  break;

}
  
}
useEffect(()=>{
  getLocal();
  },[]);

useEffect(()=>{
 filterHandler();
 saveLocal();
},[todos,status]);




const saveLocal=()=>{
  
   
    localStorage.setItem("todos",JSON.stringify(todos));
   
}
const getLocal=()=>{
  if(localStorage.getItem("todos")===null){
    localStorage.setItem("todos",JSON.stringify([]));
   }
  else{
   let localTodo= JSON.parse(localStorage.getItem("todos"));
  
  setTodos(localTodo);
  }


}
  return ( <>
  <div className='App' >
<header>
  <h1>TODO list  </h1>
  </header>

<Form setInputtext={setInputtext} todos={todos} setTodos={setTodos}  inputText={inputText}  setstatus={setstatus}/>
  <Todolist  todos={todos} setTodos={setTodos} filterTodos={filterTodos} />
  </div>
  </>
  );
  
}
 
export default App; 