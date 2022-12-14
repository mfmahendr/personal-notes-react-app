import React from "react";
import NoteItemContent from "./NoteItemContent";
import NoteItemAction from "./NoteItemAction";

function NoteItem({ id, title, body, createdAt, archived, deleteHandler, moveHandler }){
    return (
        <div className="note-item">
            <NoteItemContent
                title={title} 
                body={body} 
                createdAt={createdAt} 
            />
            <NoteItemAction 
                id={id} 
                archived={archived} 
                deleteHandler={deleteHandler} 
                moveHandler={moveHandler}
            />
        </div>
    );
}

export default NoteItem;