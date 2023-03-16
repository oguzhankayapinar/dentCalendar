import { useState } from "react";
import Modal from "./Modal";
import { Bell, CalendarDay, Clock, Palette, X } from 'react-bootstrap-icons'
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


function AddNewTodo() {
    const [showModal, setShowModal] = useState(false)

    const [text, setText] = useState('')
    const [day, setDay] = useState(new Date())
    const [time, setTime] = useState(new Date())

    return (
        <div className="AddNewTodo">
            <div className="btn" >
                <button onClick={() => setShowModal(true)}>
                    +New Entry
                </button>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <form>
                        <div className="text">
                            <h3>Add new to do!</h3>
                            <input
                                type='text'
                                value={text}
                                onChange={e => setText(e.target.value)}
                                placeholder='To do ...'
                                autoFocus
                            />
                        </div>
                        <div className="remind">
                            <Bell />
                            <p>Remind Me!</p>
                        </div>
                        <div className="pick-day">
                            <div className="title">
                                <CalendarDay />
                                <p>Choose a day</p>
                            </div>
                            <DatePicker
                                value={day}
                                onChange={day => setDay(day)}
                            />
                        </div>
                        <div className="pick-time">
                            <div className="title">
                                <Clock />
                                <p>Choose time</p>
                            </div>
                            <TimePicker
                                value={time}
                                onChange={time => setTime(time)}
                            />
                        </div>
                        <div className="pick-project">
                            <div className="title">
                                <Palette />
                                <p>Choose a project</p>
                            </div>
                            <div className="projects">
                                <div className="project active">
                                    personal
                                </div>
                                <div className="project">
                                    work
                                </div>
                                <div className="project">
                                    work
                                </div>
                            </div>
                        </div>
                        <div className="cancel" onClick={() => setShowModal(false)}>
                            <X size='20' />
                        </div>
                        <div className="confirm">
                            <button>+ Add to do</button>
                        </div>
                    </form>
                </LocalizationProvider>
            </Modal>
        </div>
    )
}

export default AddNewTodo;