import { useState } from "react";
import List from "./List";

const TaskSubmit = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const deleteTask = (i) => {
        const currentList = taskList.slice();
        const List = currentList.filter( (e, index) =>index !== i );

        return(setTaskList(List))
    }

    return (
        <div>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            const currentList = taskList.slice();
            const List =  currentList.concat(task);
            setTaskList(List);
            setTask("");
        }}
        >
          <input
            id="addTodo"
            value={task}
            placeholder="Add Todo..."
            onChange={(e) => setTask(e.target.value)}
          />
          <button
          className="submit"
          type="submit">Submit</button>
        </form>
         
        <div className="list-container">
            {taskList.map((task,index) => {
                return(
                    <List
                    key= {index}
                    number= {index+1}
                    task= {task}
                    delClick= { () => deleteTask(index)}
                    />
                )
            })}
        </div>
        


        </div>
    )
}

export default TaskSubmit;