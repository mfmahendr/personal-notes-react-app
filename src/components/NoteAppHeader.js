import React from "react";
import NoteSearch from "./NoteSearch";

function NoteAppHeader({searchHandler}){
    return (
        <div className="note-app__header">
            <h1>Notes</h1>
            <NoteSearch searchHandler={searchHandler}/>
        </div>
    );
}

export default NoteAppHeader;