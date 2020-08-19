import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

const NoteEditor = (props) => {
    let [data, setData] = useState({
        title: '',
        content: ''
    });

    const inputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        setData((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    const noteAdd = () => {
        props.onAddNote(data)
        
        if(data.title && data.content){
            setData({
                title: '',
                content: ''
            })
        }   
    }

    return (
        <>
            <div className="noteEdMain">
                <div className="inputDiv" >
                    <input type="text" placeholder="Title" onChange={inputChange} value={data.title} name="title" />
                    <textarea name="content" placeholder="Content" onChange={inputChange} value={data.content} cols="" rows=""></textarea>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <Button className="addBtn allBtn" onClick={noteAdd} variant="contained" color="secondary">
                            <AddIcon />
                        </Button>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default NoteEditor;