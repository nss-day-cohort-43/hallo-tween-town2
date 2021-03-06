import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import { useParams, useHistory } from "react-router-dom"
import { Button, Checkbox } from 'semantic-ui-react'
import "./Task.css"
import {Card} from 'semantic-ui-react'

export const TaskDetail = () => {
    const { tasks, deleteTask, getTaskById } = useContext(TaskContext)
	
	const [task, setTask] = useState({})
	
	const {taskId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getTaskById(taskId)
        .then((response) => {
			setTask(response)
		})
			}, [])

    return (
        <Card>
        <Card.Content>
        <section className="task">
            <Card.Header>
            <h3 className="task__name">{task.task}</h3></Card.Header><Card.Content>
            <div className="task__completeBy">Complete By: {task.completeBy}</div>
			<div className="task__checked">Complete? <input type="Checkbox">{task.checked}</input></div>
            
            <Button onClick={
                () => {
                    deleteTask(task.id)
                    .then(() => {
                    history.push("/tasks")
                })
                }}>Delete Task
            </Button>

            <Button onClick={() => {
                history.push(`/tasks/edit/${task.id}`)
                }}>Edit Task
            </Button></Card.Content>

        </section>
        </Card.Content>
        </Card>
    )
}