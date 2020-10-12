import React, { useContext, useRef, useEffect } from "react"
import { TaskContext } from "../tasks/TaskProvider"
import { useHistory } from 'react-router-dom';


export const TaskForm = (props) => {
    const { addTask, getTasks } = useContext(TaskContext)
    const history = useHistory()
    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const task = useRef(null)
    const completeBy = useRef(null)
    const userId = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getTasks()
    }, [])

    const constructNewTask = () => {
        if (task === 0) {
            window.alert("Please create a task")
        } else {
            addTask({
                task: task.current.value,
                userId: userId.current.value,
                completeBy: completeBy.current.value
            })
            .then(() => history.push("/tasks"))
        }
    }

    
    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="taskName">Task Name: </label>
                    <input type="text" id="taskName" ref={task} required autoFocus className="form-control" placeholder="Task name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="completeTask">Complete By Date: </label>
                    <input type="date" name="completeBy" ref={completeBy} className="form-control"></input>
                </div>
            </fieldset>
            <button type="saveTask"
                onClick = {evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTask()
                }}
                className="btn btn-primary">
                Save Task
            </button>
        </form>
    )
}


