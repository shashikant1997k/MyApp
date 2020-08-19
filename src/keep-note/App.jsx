import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import Header from './Header';
import NoteEditor from './NoteEditor';
import Note from './Note';
import Footer from './Footer';

const App = () => {
    let [noteItem, setNoteItem] = useState([]);
    const addNote = (note) => {
        setNoteItem((preVal) => {
            return [...preVal, note];
        })
    }

    const deleteNote = (id) => {
        setNoteItem((oldNotes) => {
            return oldNotes.filter((val, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            {/* <Header /> */}
            <NoteEditor onAddNote={addNote} />
            <div>
                { (noteItem.length > 0) ? noteItem.map((val, index) => {
                    return (val.title && val.content) ? 
                    <Note id={index} key={index} noteData={val} onDelNote={deleteNote} /> : null;
                }) : null}
            </div>
            <Footer />
        </>
    )
}

export default App;