import React from "react";
import NoteItem from "./NoteItem";

function NotesList({datas, deleteHandler, moveHandler}){
    return (
        <div className="notes-list">
            { datas.map((data) => 
                <NoteItem {...data}
                    deleteHandler={deleteHandler}
                    moveHandler={moveHandler}
                    key={data.id}
                /> )
            }
        </div>
    );
}

export default NotesList;