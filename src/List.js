const List = (props) => {



    return(

        <div>
            {props.list.map((task,index) => {
                return(
                    <div>
                      <p> Task {index + 1} : {task} </p>  
                    </div>
                )
            })}
        </div>
    )
}

export default List;



