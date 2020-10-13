import React from "react"
import {Link} from "react-router-dom"
import "./Task.css"
import {Card } from 'semantic-ui-react'

export const TaskCard = ({ task }) => (
    <Card.Group>
        <Card>
            <Card.Content>
    <section className="task">
        <Card.Header><h3 className="task__name">
            <Link to={`/tasks/detail/${task.id}`}>
                { task.task }
            </Link>
        </h3></Card.Header><Card.Content>
        <div className="task__breed">{ task.completeBy }</div>
        </Card.Content>
        </section>
            </Card.Content>
        </Card>
    </Card.Group>
)
