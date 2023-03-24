import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import moment from 'moment'
import React, { useContext, useState } from 'react'
import { ArrowClockwise, CheckCircleFill, Circle, Trash } from 'react-bootstrap-icons'
import { db } from '../config/firebase'
import { TodoContext } from '../context'

function Todo({ todo }) {
    //State
    const [hover, setHover] = useState(false)

    // Context
    const { selectedTodo, setSelectedTodo } = useContext(TodoContext)

    const handleDelete = (todo) => {
        deleteTodo(todo)

        if (selectedTodo === todo) {
            setSelectedTodo(undefined)
        }
    }

    const deleteTodo = async (todo) => {
        const result = await deleteDoc(doc(db, "todos", todo.id))
    }
    const checkTodo = async (todo) => {
        const result = await updateDoc(doc(db, "todos", todo.id),
            {
                checked: !todo.checked
            }
        )
    }

    const repeatNextToday = async () => {
        const nextDayDate = await moment(todo.date, 'MM/DD/YYYY').add(1, 'days')

        const repeatedTodo = {
            ...todo,
            checked: false,
            date: nextDayDate.format('MM/DD/YYYY'),
            day: nextDayDate.format('d')
        }

        delete repeatedTodo.id

        addDoc(collection(db, "todos"), repeatedTodo)

    }

    return (
        <div className='Todo'>
            <div
                className="todo-container"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <div
                    className="check-todo"
                    onClick={() => checkTodo(todo)}
                >
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
                <div
                    onClick={() => setSelectedTodo(todo)}
                    className="text"
                >
                    <p style={{ color: todo.checked ? '#bebebe' : '#000000' }}>{todo.text}</p>
                    <span> {todo.time} - {todo.projectName}</span>
                    <div className={`line ${todo.checked ? 'line-through' : ''}`}></div>
                </div>
                <div
                    className="add-to-next-day"
                    onClick={() => repeatNextToday(todo)}
                >
                    {
                        todo.checked &&
                        <span>
                            <ArrowClockwise />
                        </span>
                    }
                </div>
                <div
                    onClick={() => handleDelete(todo)}
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