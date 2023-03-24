import { useContext, useState } from "react"
import { CaretUp, Palette, PencilFill, } from "react-bootstrap-icons"
import { TodoContext } from "../context"
import AddNewProject from "./AddNewProject"
import Project from "./Project"

function Projects() {

    const [showMenu, setShowMenu] = useState(true)
    const [edit, setEdit] = useState(false)
    const pencilColor = edit ? "#1EC94C" : "#000000"

    //Context 
    const { projects } = useContext(TodoContext)
    console.log(projects)

    return (
        <div className="Projects">
            <div className="header">
                <div className="title">
                    <Palette size="20" />
                    <p>Projects</p>
                </div>

                <div className="btns">
                    {
                        showMenu &&
                        <span className="edit" onClick={() => setEdit(edit => !edit)}>
                            <PencilFill size="14" color={pencilColor} />
                        </span>
                    }
                    <AddNewProject />
                    <span className="arrow">
                        <CaretUp size="20" />
                    </span>
                </div>
            </div>


            <div className="item">
                {
                    projects.map(project =>
                        <Project
                            project={project}
                            edit={edit}
                            key={project.id}
                        />
                    )
                }

            </div>
        </div>
    )
}
export default Projects