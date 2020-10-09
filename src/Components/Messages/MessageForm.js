import React from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from 'semantic-ui-react'

export const MessageForm = () => (
    <>
        <Form>
            <Form.Field>
                <label>User Input</label>
                <input />
            </Form.Field>
        </Form>
    </>
)