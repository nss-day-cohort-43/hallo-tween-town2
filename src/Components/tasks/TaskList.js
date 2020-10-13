import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import { useHistory } from "react-router-dom"
import {Button} from "semantic-ui-react"
import "./Task.css"
import {Grid } from 'semantic-ui-react'

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
            <div className="taskTitleButton">
            <h2>Tasks</h2>
            <Button onClick={() => {history.push("/tasks/create")}}>
                New Task
            </Button></div>
                <Grid container columns={3}>
                   <Grid.Row>
                      
            {
                tasks.map(task => {
                    return <Grid.Column><TaskCard key={task.id} task={task} /></Grid.Column>
                })
            }
             </Grid.Row>
            </Grid>
           
        
        </>
    )
}