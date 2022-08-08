import { useState } from "react";



const Todos = () => {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);


    return (
      <div className="body-container">
        <header>todos</header>

        <form
        >
          <input
            id="addTodo"
            value={task}
            placeholder="Add Todo..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button 
          type="submit">Submit</button>
        </form>

        
      </div>
    );
}

// handleClick = (i) => {
//     const submit = task;
//     const currentList = taskList;

//     return ( setTaskList(currentList.concat(submit)) )
// }

export default Todos;