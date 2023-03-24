import { doc, updateDoc } from "firebase/firestore"
import moment from "moment"
import { useContext, useEffect, useRef, useState } from "react"
import { db } from "../config/firebase"
import { TodoContext } from "../context"
import TodoForm from "./TodoForm"
import { X } from 'react-bootstrap-icons'

function EditTodo() {
    //State
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoProject, setTodoProject] = useState('')


    //Context
    const { selectedTodo, projects } = useContext(TodoContext)

    const { setSelectedTodo } = useContext(TodoContext)

    //Ref
    const editRef = useRef()


    useEffect(() => {
        if (selectedTodo) {
            setText(selectedTodo.text)

            // setDay(moment(selectedTodo.date))
            // setTime(moment(selectedTodo.time))
        }
    }, [selectedTodo])

    useEffect(() => {
        if (selectedTodo) {
            updateDoc(doc(db, "todos", selectedTodo.id),
                {
                    text,
                    date: moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time: moment(time).format('hh:mm A'),
                    projectName: todoProject,
                }
            )
        }
    }, [text, day, time, todoProject])

    const handleSubmit = (e) => {

    }


    useEffect(() => {
        document.addEventListener('click', handleClick)

        return () => document.removeEventListener('click', handleClick)
    })

    const handleClick = e => {
        if (e.target === editRef.current || editRef.current.contains(e.target)) {
            setSelectedTodo(undefined)
        }
    }

    return (
        <div  >
            {selectedTodo &&
                <div className="EditTodo" >
                    <div className="header">
                        Edit Todo
                    </div>
                    <div className="container">

                        <TodoForm
                            handleSubmit={handleSubmit}
                            text={text}
                            setText={setText}
                            day={day}
                            setDay={setDay}
                            time={time}
                            setTime={setTime}
                            projects={projects}
                            todoProject={todoProject}
                            setTodoProject={setTodoProject}


                        />
                    </div>

                    <div className='editRef'
                        ref={editRef} >
                        <X size='23' />
                    </div>

                </div>
            }

        </div>
    )
}
export default EditTodo