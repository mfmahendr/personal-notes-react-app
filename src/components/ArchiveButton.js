import React from "react";

function ArchiveButton({id, isArchived, moveHandler}){
    return (
        <button className="note-item__archive-button" onClick={() => moveHandler(id)}>
            {isArchived? "Pindahkan": "Arsipkan"}
        </button>
    );
}

export default ArchiveButton;