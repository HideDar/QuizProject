import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Manage User
            </div>
            <div classNameName="users-content">
                <div>
                    <button>Add New User</button>
                </div>
                <div>
                    Table User

                </div>
                <ModalCreateUser />
            </div>

        </div>
    )
}

export default ManageUser;