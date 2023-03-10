import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrashcan } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store';
import PhotosList from './PhotosList';

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
            <PhotosList album={album}/>
        </ExpandablePanel>
    );

}

export default AlbumsListItem;