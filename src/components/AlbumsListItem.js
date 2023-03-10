import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';

function AlbumsListItem({ album }) {

    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }


    const header = (
        <>
            <Button className="mr-2" onClick={handleRemoveAlbum} loading={results.isLoading}>
                <GoTrashcan />
            </Button>
            <div>{album.title}</div>
        </>
    );

    return (
        <ExpandablePanel header={header}>
            List of photos in the album
        </ExpandablePanel>
    );

}

export default AlbumsListItem;