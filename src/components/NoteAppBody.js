import React from "react";
import { getInitialData } from "../utils";
import EmptyNote from "./EmptyNote";
import NoteInput from "./NoteInput";
import NotesList from "./NotesList";

class NoteAppBody extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getInitialData()
        };

        this.addHandler = this.addHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.moveHandler = this.moveHandler.bind(this);
    }

    addHandler(newNote){
        this.setState((prevState) => {
            prevState.notes.push(newNote);
            return prevState;
        });
    }

    deleteHandler(id){
        this.setState((prevState) => {
            return {
                notes: prevState.notes.filter((note) => note.id !== id)
            };
        })
    }

    moveHandler(id){
        this.setState((prevState) => {
            const index = prevState.notes.findIndex((note) => note.id === id);
            if (index !== -1) {
                prevState.notes[index] = {
                    ...prevState.notes[index],
                    archived: !prevState.notes[index].archived
                };
            }

            return prevState;
        })
    }

    render(){
        const activeNotes = this.state.notes.filter((note) => note.archived === false );
        const archivedNotes = this.state.notes.filter((note) => note.archived === true );

        const activeNotesToShow = activeNotes.filter((note) => {
            return ( note.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()) 
                // || note.body.toLowerCase().includes(this.props.searchQuery.toLowerCase()) 
            )
        });
        const archivedNotesToShow = archivedNotes.filter((note) => {
            return ( note.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()) 
                // || note.title.toLowerCase().includes(this.props.searchQuery.toLowerCase()) 
            )
        } );

        return (
            <div className="note-app__body">
                <NoteInput addHandler={this.addHandler}/>
                <h2>Catatan Aktif</h2>
                { activeNotesToShow.length !== 0 ? (
                        <NotesList  datas={activeNotesToShow}
                                    deleteHandler={this.deleteHandler}
                                    moveHandler={this.moveHandler}/>
                    ) : (
                        <EmptyNote />
                )}
                <h2>Arsip</h2>
                { archivedNotesToShow.length !== 0 ? (
                        <NotesList  datas={archivedNotesToShow}
                                    deleteHandler={this.deleteHandler}
                                    moveHandler={this.moveHandler}/>
                    ) : (
                        <EmptyNote />
                )}
            </div>
        );
    }
}

export default NoteAppBody;