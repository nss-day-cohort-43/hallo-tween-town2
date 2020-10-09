import React from "react"
import {Link} from "react-router-dom"

export const TaskCard = ({ task }) => (
    <section className="task">
        <h3 className="task__name">
            <Link to={`/tasks/detail/${task.id}`}>
                { task.task }
            </Link>
        </h3>
        <div className="task__breed">{ task.completeBy }</div>
    </section>
)