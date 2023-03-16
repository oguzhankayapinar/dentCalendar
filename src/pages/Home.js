import React from 'react'
import "../Home.css"
import Sidebar from '../components/Sidebar'
import Main from '../components/Main'
import AddNewTodo from '../components/AddNewTodo'
import Calendar from '../components/Calendar'
import Projects from '../components/Projects'
import Todos from '../components/Todos'
import EditTodo from '../components/EditTodo'

const Home = () => {
    return (
        <div className='Home'>
            <Sidebar>
                <AddNewTodo />
                <Calendar />
                <Projects />
            </Sidebar>
            <Main>
                <Todos />
                <EditTodo />
            </Main>
        </div>
    )
}

export default Home;