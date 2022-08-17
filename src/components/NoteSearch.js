import React from "react";

function NoteSearch({searchHandler}){
    return (
        <div className="note-search">
            <input type="text" placeholder="Cari catatan..." onChange={searchHandler}/>
        </div>
    );
}

export default NoteSearch;