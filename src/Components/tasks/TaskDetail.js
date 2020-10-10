import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import { useParams, useHistory } from "react-router-dom"

export const TaskDetail = () => {
    const { deleteTask, getTaskById } = useContext(TaskContext)
	
	const [task, setTask] = useState({})
	
	const {taskId} = useParams();
	const history = useHistory();

    useEffect(() => {
		console.log("useEffect", taskId)
        getTaskById(taskId)
        .then((response) => {
			setTask(response)
		})
			}, [])

    return (
        <section className="task">
            <h3 className="task__name">{task.task}</h3>
            <div className="task__completeBy">Complete By: {task.completeBy}</div>
			<div className="task__checked">Complete?: {task.checked}</div>
            
            <button onClick={
                () => {
                    deleteTask(task.id)
                    .then(() => {
                    history.push("/tasks")
                })
                }}>Delete Task
            </button>

            <button onClick={() => {
                history.push(`/tasks/edit/${task.id}`)
                }}>Edit Task
            </button>

        </section>
    )
}