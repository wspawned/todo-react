import { useState } from "react";
import List from "./List";

const TaskSubmit = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [key,setKey] = useState(0);
    // const [isCompleted,setIsCompleted] = useState(false)

    const deleteTask = (key) => {
        const currentList = taskList.slice();
        const List = currentList.filter( (e) => e.key !== key );

        return(setTaskList(List))
    }

    return (
        <div>
        <form
        onSubmit={(e) => {
            e.preventDefault();
            setKey(key+1);
            const currentList = taskList.slice();
            const List =  currentList.concat(
                {key: key, task: task});
                // isCompleted: isCompleted
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
            {taskList.map((elm,index) => {
                
                return(
                    <List
                    key= {elm.key}
                    task= {elm.task}
                    // isCompleted={elm.isCompleted}
                    number= {index+1}
                    delClick= { () => deleteTask(elm.key)}
                    />
                )
            })}
        </div>
        <div className="button-container" >
            <button className="clear-completed"
            >Clear Completed</button>

            <button className="clear-all"
            onClick={() => setTaskList([]) }
            >Clear All</button>
        </div>

        </div>
    )
}

export default TaskSubmit;