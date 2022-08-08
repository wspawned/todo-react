import { useState } from "react";
import List from "./List";


const TaskSubmit = () => {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

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
          type="submit">Submit</button>
        </form>
         

        

        <List list = {taskList} />

        </div>
    )
}

export default TaskSubmit;