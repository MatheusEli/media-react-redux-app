import { useFetchPhotosQuery, useAddPhotoMutation } from "../store";
import Button from "./Button";

function PhotosList({album}){
    const {result, error, isFetching} = useFetchPhotosQuery(album);
    
    const [addPhoto, addPhotoResults] = useAddPhotoMutation();

    const handleAddPhoto = () => {
        addPhoto(album);
    };
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">Photos In {album.title}</h3>
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
            </div>
        </div>
    );
}

export default PhotosList;