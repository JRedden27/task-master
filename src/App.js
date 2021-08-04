import React, { useState } from "react";
import Footer from "./compnents/Footer";
import FormArea from "./compnents/FormArea";
import Header from "./compnents/Header";
import Note from "./compnents/Note";


function App() {
    const [notes, setNotes] = useState([]);
    function addNote(note) {
        setNotes(preNotes=>{
            return [...preNotes, note]
        });
    }
    function delNote(id) {
        setNotes(preNotes=>{
            return preNotes.filter((note, index)=>{
                return index !== id
            });
        });
        
    }
   return (
    <div>
       <Header/>
       <FormArea addNote={addNote} />
       {notes.map((note, index) =>
        <Note
            id={index}
            delNote={delNote}
            title={note.title}
            content={note.content} />
       )}
       <Footer/>
    </div>

   
    );
}

export default App