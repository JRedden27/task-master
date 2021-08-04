import { Button, Paper } from '@material-ui/core';
import React from 'react';
import DeleteIcon from "@material-ui/icons/Delete";

function Note({title, content, id, delNote}) {
    function clickHandler(){
        delNote(id);
    }
    return (
        <Paper
            style={{
            minwidth:"200px",
            minHeight:"100px",
            margin:"20px",
            padding:"10px",
            display: "inline-flex",
        }}
        >
            <div>
            <h1>{title}</h1>
            <p>{content}</p>
            </div>
            <Button onClick={clickHandler} style={{marginLeft:"120px"}}>
                <DeleteIcon style={{ color: "red"}}/>
            </Button>
            
        </Paper>
    )
}

export default Note
