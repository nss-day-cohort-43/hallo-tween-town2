import React, { useContext, useRef, useEffect } from "react"
import { TaskContext } from "../tasks/TaskProvider"
import { useHistory } from 'react-router-dom';
// import { Button, Checkbox, Form } from 'semantic-ui-react'

export const TaskForm = (props) => {
    const { addTask, getTasks } = useContext(TaskContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const task = useRef(null)
    const completeBy = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
       getTasks()
    }, [])

    const constructNewTask = () => {
        /*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const taskId = task.current.value

        if (taskId === 0) {
            window.alert("Please create a task")
        } else {
            addTask({
                task: task,
                taskId,
                completeBy
            })
            .then(() => history.push("/tasks"))
        }
    }

    const history = useHistory();

    
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
            <button type="save"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTask()
                }}
                className="btn btn-primary">
                Save Task
            </button>
        </form>
    )
}


    // const FormExampleForm = () => (
    // <Form className="taskForm">
    //     <h2 className="taskForm__title">New Task</h2>
    //     <Form.Field>
    //     <label htmlFor="taskName">Task Title</label>
    //     <input placeholder='Task Title' id="animalName" ref={name} required autoFocus/>
    //     </Form.Field>
    //     <Form.Field>
    //     <label htmlFor="completeBy">Complete By Date:</label>
    //     <input placeholder='Complete Date' id="taskDate" ref={task} required/>
    //     </Form.Field>
    //     <Form.Field>
    //     <Checkbox label='Completed Task!' />
    //     </Form.Field>
    //     <Button type='submit' onClick=preventDefault()
    //     constructNewTask()>
    //     Save Task</Button>
    // </Form>
    // )

    // export default FormExampleForm

    
