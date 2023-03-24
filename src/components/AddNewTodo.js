import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../context";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { calendarItems } from "./constants";
import moment from 'moment';
import randomcolor from 'randomcolor';


function AddNewTodo() {
    //Context
    const { projects, selectedProject } = useContext(TodoContext)

    //State
    const [showModal, setShowModal] = useState(false)
    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())
    const [todoProject, setTodoProject] = useState(selectedProject)

    function handleSubmit(e) {
        e.preventDefault()
        if (text) {
            const result = addDoc(collection(db, "todos"),
                {
                    text: text,
                    date: moment(day).format('MM/DD/YYYY'),
                    day: moment(day).format('d'),
                    time: moment(time).format('hh:mm A'),
                    checked: false,
                    color: randomcolor(),
                    // projectName: todoProject
                }
            )

            setShowModal(false)
            setText('')
            setDay(new Date())
            setTime(new Date())
        }
    }

    useEffect(() => {
        setTodoProject(selectedProject)
    }, [selectedProject])

    return (
        <div className="AddNewTodo">
            <div className="btn" >
                <button onClick={() => setShowModal(true)}>
                    +New Entry
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <TodoForm
                    handleSubmit={handleSubmit}
                    heading="Add new to do!"
                    text={text}
                    setText={setText}
                    day={day}
                    setDay={setDay}
                    time={time}
                    setTime={setTime}
                    // projects={projects}
                    showButtons={true}
                    setShowModal={setShowModal}
                    todoProject={todoProject}
                    setTodoProject={setTodoProject}

                />
            </Modal>
        </div>
    )
}

export default AddNewTodo;