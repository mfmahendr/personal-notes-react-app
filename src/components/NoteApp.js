import React from "react";
import NoteAppBody from "./NoteAppBody";
import NoteAppFooter from "./NoteAppFooter";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchQuery: ''
        };

        this.searchHandler = this.searchHandler.bind(this);
    }

    searchHandler(event){
        this.setState(() => { 
            return { searchQuery: event.target.value } 
        } );
    }

    render(){
        return (
            <>
                <NoteAppHeader searchHandler={this.searchHandler}/>
                <NoteAppBody searchQuery={this.state.searchQuery}/>
                <NoteAppFooter />
            </>
        );
    }
}

export default NoteApp;