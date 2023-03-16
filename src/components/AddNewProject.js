import { useState } from "react";
import { Plus } from "react-bootstrap-icons";
import Modal from "./Modal";
import ProjectForm from "./ProjectForm";

function AddNewProject() {
    const [showModal, setShowModal] = useState(false)
    const [projectName, setProjectName] = useState("")

    function handleSubmit(e) {

    }

    return (
        <div className="AddNewProject">
            <div className="add-button" onClick={() => setShowModal(true)}>
                <Plus size="20" />
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal}>
                <ProjectForm
                    handleSubmit={handleSubmit}
                    heading="New Project"
                    value={projectName}
                    setValue={setProjectName}
                    setShowModal={setShowModal}
                    confirmButtonText="Add New Project"
                />
            </Modal>



        </div>
    )
}
export default AddNewProject;