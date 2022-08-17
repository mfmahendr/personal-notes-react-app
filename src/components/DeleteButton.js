import React from "react";

function DeleteButton({id, deleteHandler}){
    return (
        <button className="note-item__delete-button" onClick={() => deleteHandler(id)}>
            Hapus
        </button>
    );
}

export default DeleteButton;