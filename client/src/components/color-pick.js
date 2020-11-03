//This is going to look like on the far left is Color x where x is a props and this fontcolor is the chosen color.
//In the middle is going to be a input field with the hex
//On the right is a button that opens a modal for the color picker
import React from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

function ColorPick(props) {
    const [hex, setHex] = React.useState(0);

    const numberToHexString = (number) => {
        return "0x" + ("000000" + number.toString(16)).substr(-6);
    };

    return (
        <div style={{display:"flex"}}>
            <span style={{flexGrow:"1", fontSize:"3.2vh", alignItems:"center", fontWeight:"600", justifyContent:"center", display:"flex"}}>
                Color {props.number}
            </span>
            <span style={{flexGrow:"0.5"}}>
                <TextField id="standard-basic" label="Hex-Value" value={numberToHexString(hex)}/>
            </span>
            <span style={{flexGrow:"2"}}>
                hi
            </span>
        </div>
    );
};

export default ColorPick;