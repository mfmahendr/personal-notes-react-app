import React from "react";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";

function NoteItemAction({id, archived, deleteHandler, moveHandler }){
    return (
        <div className="note-item__action">
            <DeleteButton id={id} deleteHandler={() => deleteHandler(id)}/>
            <ArchiveButton id={id} isArchived={archived} moveHandler={() => moveHandler(id)}/>
        </div>
    )
}

export default NoteItemAction;