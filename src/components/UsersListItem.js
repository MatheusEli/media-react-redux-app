import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";

function UsersListItem({ user }) {

    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

    const handleUserRemove = () => {
        doRemoveUser(user);
    };

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <div className="flex flex-row items-center justify-between">
            <Button onClick={handleUserRemove} loading={isRemovingUser} className="mr-3"><GoTrashcan /></Button>
                {removingUserError && <div>Error deleting user</div>}
                {user.name}
                </div>
            </div>
        </div>
    );
}

export default UsersListItem;