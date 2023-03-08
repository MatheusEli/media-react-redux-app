import { useThunk } from "../hooks/useThunk";
import { removeUser } from "../store";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import ExpandablePanel from './ExpandablePanel';
import AlbumsList from "./AlbumsList";


function UsersListItem({ user }) {

    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser);

    const handleUserRemove = () => {
        doRemoveUser(user);
    };

    const header = <>
        <Button onClick={handleUserRemove} loading={isRemovingUser} className="mr-3"><GoTrashcan /></Button>
        {removingUserError && <div>Error deleting user</div>}
        {user.name}
    </>;

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>
         
    );
}

export default UsersListItem;