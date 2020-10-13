import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import { useHistory } from "react-router-dom"
import {Button} from "semantic-ui-react"

export const TaskList = () => {
   // This state changes when `getTasks()` is invoked below
    const { tasks, getTasks } = useContext(TaskContext)
    const history = useHistory()
    

	//useEffect - reach out to the world for something
    useEffect(() => {
		getTasks()
		
    }, [])


    return (
        <>  
            
            <h2>Tasks</h2>
            <Button onClick={() => {history.push("/tasks/create")}}>
                New Task
            </Button>
            <div className="tasks">
            {
                tasks.map(task => {
                    return <TaskCard key={task.id} task={task} />
                })
            }
            </div>
        </>
    )
}