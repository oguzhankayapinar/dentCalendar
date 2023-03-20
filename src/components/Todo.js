import { deleteDoc, doc } from 'firebase/firestore'
import React, { useState } from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'
import { db } from '../config/firebase'

function Todo({ todo }) {
    const [hover, setHover] = useState(false)

    const deleteTodo = async (todo) => {
        const result = await deleteDoc(doc(db, "todos", todo.id))
    }

    return (
        <div className='Todo'>
            <div
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div className="check-todo">
                    {
                        todo.checked ?
                            <span className="checked">
                                <CheckCircleFill color="#bebebe" />
                            </span>
                            :
                            <span className="unchecked">
                                <Circle color={todo.color} />
                            </span>
                    }
                </div>
                <div className="text">
                    <p style={{ color: todo.checked ? '#bebebe' : '#000000' }}>{todo.text}</p>
                    <span> {todo.time} - {todo.projectName}</span>
                    <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
                </div>
                <div className="add-to-next-day">
                    {
                        todo.checked &&
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
                </div>
                <div
                    onClick={() => deleteTodo(todo)}
                    className="delete-todo">
                    {
                        (hover || todo.checked) &&
                        <span>
                            <Trash />
                        </span>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo