import { useState } from "react";


const List = (props) => {

    const [Completed, setCompleted] = useState(false);

    

    return(
        <div className="task-container">
            <button className="check-button"
            onClick={() => {
                setCompleted(!Completed)
            } }
            > { Completed? "✓" : "□" }
            </button>
            <p className= {Completed? "task-completed" : "task" }
            > Task {props.number} : {props.task} </p>  
            <button className="delete-button"
            onClick= {() => {props.delClick()
            setCompleted(false)}
            }
            >delete</button>
        </div>
    )
}

export default List;



    // const toggleCompleted = () => {
    //     setCompleted(current => !current )
    // }
    //// onClick={toggleCompleted}


