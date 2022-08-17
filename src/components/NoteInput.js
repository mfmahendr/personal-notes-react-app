import React from "react";

class NoteInput extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            title: '',
            body: '',
            maxTitleLength: 50,
        }

        this.submitHandler = this.submitHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.bodyChangeHandler = this.bodyChangeHandler.bind(this);
    }

    submitHandler(event){
        event.preventDefault();
        const note = {
            id: +new Date(),
            title: this.state.title,
            body: this.state.body,
            createdAt: new Date(),
            archived: false
        }
        this.props.addHandler(note);
    }

    titleChangeHandler(event){
        this.setState(() => { 
            return { title: event.target.value.slice(0, this.state.maxTitleLength) }
         });
    }

    bodyChangeHandler(event){
        this.setState(() => { 
            return { body: event.target.value }
         });
    }

    render(){
        return (
            <div className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.submitHandler}>
                    <p className="note-input__title__char-limit">Sisa Karakter { this.state.maxTitleLength - this.state.title.length  }</p>
                    <input  type="text"
                            className="note-input__title"
                            placeholder="Ini adalah judul..."
                            required
                            value={this.state.title}
                            onChange={this.titleChangeHandler}/>
                    <textarea   name="body" 
                                className="note-input__body" 
                                placeholder="Tuliskan catatanmu di sini..." 
                                required
                                value={this.state.body}
                                onChange={this.bodyChangeHandler}/>
                    <button type="submit">Buat</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;