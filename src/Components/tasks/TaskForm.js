import React, { useContext, useRef, useEffect, useState } from "react"
import { TaskContext } from "../tasks/TaskProvider"
import { useHistory, useParams  } from 'react-router-dom';


export const TaskForm = (props) => {
    const { addTask, getTasks, getTaskById, editTask } = useContext(TaskContext)


    //for edit, hold on to state of task in this view
    const [tasks, setTasks] = useState({task: "", completeBy: ""})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {taskId} = useParams();
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

    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newTask = { ...tasks }
        //animal is an object with properties. 
        //set the property to the new value
        newTask[event.target.name] = event.target.value
        //update state
        setTasks(newTask)
    }


    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
        if (taskId){
            getTaskById(taskId)
            .then(task => {
                setTasks(task)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
}, [])


    const constructNewTask = () => {
        if (task === 0) {
            window.alert("Please create a task")
        } else {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (taskId){
                //PUT - update
                editTask({
                    id: tasks.id,
                    task: tasks.task,
                    completeBy: tasks.completeBy,
                    userId: tasks.userId
                })
                .then(() => history.push(`/tasks/detail/${taskId}`))
            }else {
                //POST - add
                addTask({
                    task: tasks.task,
                    userId: parseInt(localStorage.getItem("werewolf_user")),
                    completeBy: tasks.completeBy
                })
                .then(() => history.push("/tasks"))
            }
        }
    }

    
    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="taskName">Task Name: </label>
                    <input type="text" name="task" id="tasks" value={tasks.task} required autoFocus className="form-control" placeholder="Task name" 
                    onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="completeTask">Complete By Date: </label>
                    <input type="date" name="completeBy" value={tasks.completeBy} className="form-control"
                    onChange={handleControlledInputChange}
                    ></input>
                </div>
            </fieldset>
            <button type="saveTask"
                disabled={isLoading}
                onClick = {evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewTask()
                }}> {taskId ? <>Save Task</> : <>Add Task</>}
                </button>
        </form>
    )
}


