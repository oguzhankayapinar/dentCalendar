import { useState, useEffect } from 'react'
import { onSnapshot, collection, } from "firebase/firestore";
import { db } from '../config/firebase'

export function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'todos'),
            (snapshot) => {
                const data = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setTodos(data)
            })

        return () => unsubscribe()
    }, [])

    return todos
}

export function useProjects(todos) {
    const [projects, setProjects] = useState([])

    function calculateNumOfTodos(projectName, todos) {
        return todos.filter(todo => todo.projectName.length === projectName.length)
    }


    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'projects'), (snapshot) => {
            const data = snapshot.docs.map(doc => {

                const projectName = doc.data().name


                return {
                    id: doc.id,
                    name: projectName,
                    numOfTodos: calculateNumOfTodos(projectName, todos)
                }
            })
            setProjects(data)
        })

        return () => unsubscribe()
    }, [])

    return projects
}

