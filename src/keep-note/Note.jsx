import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const Note = (props) => {
    return (
        <>
            <div className="card" style={{width: "210px", margin: "40px 0 5px 10px", float: "left"}}>
                <div className="card-body" style={{padding: '10px 10px 4px 10px'}}>
                    <h6 className="card-title"> { props.noteData.title } </h6>
                    <p className="card-text" style={{marginBottom: '5px', fontSize: '14px'}}> { props.noteData.content } </p>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <Button className="editBtn allBtn" variant="contained" color="secondary">
                            <EditOutlinedIcon />
                        </Button>
                        <Button className="delBtn allBtn" variant="contained" color="secondary" onClick={() => {
                            props.onDelNote(props.id)
                        }} >
                            <DeleteOutlineOutlinedIcon />
                        </Button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Note;