import { useState } from "react";
import TaskSubmit from "./TaskSubmit";

const Todos = () => {


    return (
      <div className="body-container">
        <header>todos</header>

        <TaskSubmit />

        <div>

        </div>

      </div>
    );
}



export default Todos;









{/* <div>
            {list.map(task => {
                return(
                    <p> {task} </p>
                )
            })}
        </div> */}





// handleClick = (i) => {
//     const submit = task;
//     const currentList = taskList;

//     return ( setTaskList(currentList.concat(submit)) )
// }

